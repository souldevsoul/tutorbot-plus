/**
 * ESLint Plugin: Product Quality - FIXED VERSION
 * Only checks actual color values, not utility classes
 */

/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');
/* eslint-enable @typescript-eslint/no-require-imports */

// List of Tailwind utility prefixes that are NOT colors
const NON_COLOR_UTILITIES = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-left',
  'text-center',
  'text-right',
  'text-justify',
  'text-opacity-',
  'text-ellipsis',
  'text-clip',
  'text-wrap',
  'bg-opacity-',
  'bg-none',
  'bg-gradient-',
  'bg-fixed',
  'bg-local',
  'bg-scroll',
  'bg-clip-',
  'bg-origin-',
  'bg-contain',
  'bg-cover',
  'bg-auto',
  'border-',
  'border-solid',
  'border-dashed',
  'border-dotted',
  'border-double',
  'border-none',
  'border-0',
  'border-2',
  'border-4',
  'border-8',
  'border-t',
  'border-r',
  'border-b',
  'border-l',
  'border-x',
  'border-y',
  'border-t-',
  'border-r-',
  'border-b-',
  'border-l-',
  'border-opacity-',
];

function isColorClass(className) {
  // Check if it's a non-color utility
  if (NON_COLOR_UTILITIES.some(util => className.startsWith(util))) {
    return false;
  }

  // Check if it's an actual color class
  const colorPrefixes = ['text-', 'bg-', 'border-'];
  if (!colorPrefixes.some(prefix => className.startsWith(prefix))) {
    return false;
  }

  // Must have a color name after the prefix
  const parts = className.split('-');
  if (parts.length < 2) {
    return false;
  }

  // Check if second part is a color name (not a utility)
  const colorNames = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
    'black',
    'white',
    'transparent',
    'current',
    'inherit',
  ];

  return colorNames.some(color => parts[1] === color || parts[1].startsWith(color));
}

module.exports = {
  rules: {
    'no-broken-internal-links': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Ensure all internal links point to existing pages',
          category: 'Product Quality',
          recommended: true,
        },
        messages: {
          brokenLink: 'Internal link "{{href}}" points to non-existent page. This will cause a 404 error.',
        },
      },
      create(context) {
        return {
          JSXAttribute(node) {
            if (node.name.name === 'href' && node.value?.type === 'Literal') {
              const href = node.value.value;

              if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
                const cleanPath = href.split('#')[0].split('?')[0];

                // Try both app and src/app directories
                const baseDirs = [
                  path.join(context.getCwd(), 'app'),
                  path.join(context.getCwd(), 'src', 'app'),
                ];

                let fileExists = false;

                for (const baseDir of baseDirs) {
                  // Check direct path
                  const directFiles = [
                    path.join(baseDir, cleanPath, 'page.tsx'),
                    path.join(baseDir, cleanPath, 'page.jsx'),
                  ];

                  if (directFiles.some(file => fs.existsSync(file))) {
                    fileExists = true;
                    break;
                  }

                  // Check with dynamic route patterns like [locale]
                  try {
                    const searchDir = fs.existsSync(baseDir) ? fs.readdirSync(baseDir) : [];
                    for (const entry of searchDir) {
                      // Check for [locale] or other dynamic segments
                      if (entry.startsWith('[') && entry.endsWith(']')) {
                        const dynamicPath = path.join(baseDir, entry);
                        const nestedFiles = [
                          path.join(dynamicPath, cleanPath, 'page.tsx'),
                          path.join(dynamicPath, cleanPath, 'page.jsx'),
                          path.join(dynamicPath, '(unauth)', cleanPath, 'page.tsx'),
                          path.join(dynamicPath, '(unauth)', cleanPath, 'page.jsx'),
                          path.join(dynamicPath, '(auth)', cleanPath, 'page.tsx'),
                          path.join(dynamicPath, '(auth)', cleanPath, 'page.jsx'),
                        ];

                        if (nestedFiles.some(file => fs.existsSync(file))) {
                          fileExists = true;
                          break;
                        }
                      }

                      // Check for route groups like (marketing), (dashboard), etc.
                      if (entry.startsWith('(') && entry.endsWith(')')) {
                        const routeGroupPath = path.join(baseDir, entry);
                        const routeGroupFiles = [
                          path.join(routeGroupPath, cleanPath, 'page.tsx'),
                          path.join(routeGroupPath, cleanPath, 'page.jsx'),
                        ];

                        if (routeGroupFiles.some(file => fs.existsSync(file))) {
                          fileExists = true;
                          break;
                        }
                      }
                    }
                  } catch {
                    // Ignore errors reading directory
                  }

                  if (fileExists) {
                    break;
                  }
                }

                if (!fileExists && cleanPath !== '/' && cleanPath !== '') {
                  context.report({
                    node,
                    messageId: 'brokenLink',
                    data: { href },
                  });
                }
              }
            }
          },
        };
      },
    },

    'use-styleguide-colors-only': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Only use colors defined in the style guide',
          category: 'Brand Consistency',
          recommended: true,
        },
        messages: {
          unauthorizedColor: 'Color "{{color}}" is not in the approved style guide. Use one of: {{approved}}',
          arbitraryColor: 'Avoid arbitrary color values like "{{color}}". Use Tailwind utility classes from the style guide.',
        },
        schema: [
          {
            type: 'object',
            properties: {
              allowedColors: {
                type: 'array',
                items: { type: 'string' },
              },
            },
          },
        ],
      },
      create(context) {
        const options = context.options[0] || {};
        const allowedColors = options.allowedColors || ['black', 'white', 'gray-'];

        return {
          JSXAttribute(node) {
            if (node.name.name === 'className' && node.value?.value) {
              const classes = node.value.value.split(' ');

              classes.forEach((className) => {
                // Only check if it's actually a color class
                if (!isColorClass(className)) {
                  return;
                }

                const color = className.split('-').slice(1).join('-');
                const isAllowed = allowedColors.some(allowed => color.startsWith(allowed));

                if (!isAllowed && !color.includes('[') && !color.includes('inherit') && !color.includes('transparent')) {
                  context.report({
                    node,
                    messageId: 'unauthorizedColor',
                    data: {
                      color: className,
                      approved: allowedColors.join(', '),
                    },
                  });
                }

                // Check for arbitrary values like bg-[#FF0000]
                if (className.includes('[#') || className.includes('[rgb')) {
                  context.report({
                    node,
                    messageId: 'arbitraryColor',
                    data: { color: className },
                  });
                }
              });
            }
          },
        };
      },
    },

    'consistent-company-info': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Ensure company information (address, phone, email) is consistent',
          category: 'Content Consistency',
          recommended: true,
        },
        messages: {
          inconsistentEmail: 'Email "{{found}}" doesn\'t match configured email "{{configured}}"',
        },
        schema: [
          {
            type: 'object',
            properties: {
              companyName: { type: 'string' },
              email: { type: 'string' },
            },
          },
        ],
      },
      create(context) {
        const options = context.options[0] || {};

        return {
          Literal(node) {
            if (typeof node.value === 'string' && options.email) {
              const emailMatch = node.value.match(/\b[\w.%+-]+@[A-Z0-9.-]+\.[A-Z|]{2,}\b/i);
              if (emailMatch && emailMatch[0] !== options.email && !emailMatch[0].includes('example.com')) {
                context.report({
                  node,
                  messageId: 'inconsistentEmail',
                  data: {
                    found: emailMatch[0],
                    configured: options.email,
                  },
                });
              }
            }
          },
        };
      },
    },

    'consistent-payment-providers': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Ensure payment provider mentions are consistent',
          category: 'Content Consistency',
          recommended: true,
        },
        messages: {
          inconsistentProvider: 'Payment provider "{{provider}}" used here, but config specifies "{{configured}}". Keep consistent.',
        },
        schema: [
          {
            type: 'object',
            properties: {
              provider: {
                type: 'string',
                enum: ['stripe', 'ecommpay', 'paypal', 'square'],
              },
            },
          },
        ],
      },
      create(context) {
        const options = context.options[0] || {};
        const configuredProvider = options.provider || 'stripe';

        const providerPatterns = {
          stripe: /\bstripe\b/i,
          ecommpay: /\becommpay\b/i,
          paypal: /\bpaypal\b/i,
          square: /\bsquare\b/i,
        };

        return {
          Literal(node) {
            if (typeof node.value === 'string') {
              Object.entries(providerPatterns).forEach(([provider, pattern]) => {
                if (pattern.test(node.value) && provider !== configuredProvider) {
                  context.report({
                    node,
                    messageId: 'inconsistentProvider',
                    data: { provider, configured: configuredProvider },
                  });
                }
              });
            }
          },
        };
      },
    },

    // ========================================
    // UX CONSISTENCY RULES
    // ========================================

    'no-button-without-handler': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Buttons should have onClick handler or type attribute',
          category: 'UX Consistency',
          recommended: true,
        },
        messages: {
          missingHandler: 'Button has no onClick handler or type. Non-interactive buttons confuse users.',
        },
      },
      create(context) {
        return {
          JSXElement(node) {
            const elementName = node.openingElement.name.name;

            if (elementName === 'button' || elementName === 'Button') {
              const attributes = node.openingElement.attributes;
              const hasOnClick = attributes.some(attr => attr.name?.name === 'onClick');
              const hasType = attributes.some(attr => attr.name?.name === 'type');
              const hasAsChild = attributes.some(attr => attr.name?.name === 'asChild');

              if (!hasOnClick && !hasType && !hasAsChild) {
                context.report({
                  node,
                  messageId: 'missingHandler',
                });
              }
            }
          },
        };
      },
    },

    'no-form-without-submit': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Forms must have onSubmit handler',
          category: 'UX Consistency',
          recommended: true,
        },
        messages: {
          missingSubmit: 'Form has no onSubmit handler. Forms should handle submission explicitly.',
        },
      },
      create(context) {
        return {
          JSXElement(node) {
            if (node.openingElement.name.name === 'form') {
              const attributes = node.openingElement.attributes;
              const hasOnSubmit = attributes.some(attr => attr.name?.name === 'onSubmit');
              const hasAction = attributes.some(attr => attr.name?.name === 'action');

              if (!hasOnSubmit && !hasAction) {
                context.report({
                  node,
                  messageId: 'missingSubmit',
                });
              }
            }
          },
        };
      },
    },

    'no-missing-alt-text': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Images must have alt text for accessibility',
          category: 'Accessibility',
          recommended: true,
        },
        messages: {
          missingAlt: 'Image missing alt attribute. Add alt="" for decorative images or descriptive alt text.',
        },
      },
      create(context) {
        return {
          JSXElement(node) {
            const elementName = node.openingElement.name.name;

            if (elementName === 'img' || elementName === 'Image') {
              const attributes = node.openingElement.attributes;
              const altAttr = attributes.find(attr => attr.name?.name === 'alt');

              if (!altAttr) {
                context.report({
                  node,
                  messageId: 'missingAlt',
                });
              }
            }
          },
        };
      },
    },

    'no-generic-placeholders': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Avoid generic placeholder text like "Enter text", "Click here"',
          category: 'UX Consistency',
          recommended: true,
        },
        messages: {
          genericPlaceholder: 'Generic placeholder "{{text}}" should be more specific. Example: "Enter your email address"',
        },
      },
      create(context) {
        const genericPhrases = [
          'click here',
          'click me',
          'enter text',
          'type here',
          'input text',
          'enter value',
        ];

        return {
          JSXAttribute(node) {
            if (node.name?.name === 'placeholder' && node.value?.value) {
              const value = node.value.value.toLowerCase().trim();

              if (genericPhrases.includes(value)) {
                context.report({
                  node,
                  messageId: 'genericPlaceholder',
                  data: { text: node.value.value },
                });
              }
            }
          },
        };
      },
    },

    'require-loading-state-on-async-button': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Buttons with async onClick should show loading state',
          category: 'UX Consistency',
          recommended: true,
        },
        messages: {
          missingLoadingState: 'Async button onClick should have loading state. Users need feedback during async operations.',
        },
      },
      create(context) {
        return {
          JSXElement(node) {
            const elementName = node.openingElement.name.name;

            if (elementName === 'button' || elementName === 'Button') {
              const attributes = node.openingElement.attributes;
              const onClickAttr = attributes.find(attr => attr.name?.name === 'onClick');

              if (onClickAttr?.value?.expression) {
                const source = context.getSourceCode();
                const onClickCode = source.getText(onClickAttr.value.expression);

                const isAsync = onClickCode.includes('async') || onClickCode.includes('await')
                  || onClickCode.includes('fetch(') || onClickCode.includes('.then(');

                if (isAsync) {
                  const hasLoadingProp = attributes.some(attr =>
                    attr.name?.name === 'loading'
                    || attr.name?.name === 'isLoading'
                    || attr.name?.name === 'disabled',
                  );

                  if (!hasLoadingProp) {
                    context.report({
                      node: onClickAttr,
                      messageId: 'missingLoadingState',
                    });
                  }
                }
              }
            }
          },
        };
      },
    },

    'require-try-catch-fetch': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Fetch calls should be wrapped in try-catch',
          category: 'Error Handling',
          recommended: true,
        },
        messages: {
          missingTryCatch: 'Fetch call not wrapped in try-catch. API calls can fail and should handle errors gracefully.',
        },
      },
      create(context) {
        return {
          CallExpression(node) {
            if (node.callee.name === 'fetch'
              || (node.callee.type === 'MemberExpression' && node.callee.property.name === 'fetch')) {
              let parent = node.parent;
              let inTryCatch = false;

              while (parent) {
                if (parent.type === 'TryStatement') {
                  inTryCatch = true;
                  break;
                }
                parent = parent.parent;
              }

              if (!inTryCatch) {
                context.report({
                  node,
                  messageId: 'missingTryCatch',
                });
              }
            }
          },
        };
      },
    },

    'require-empty-state': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Lists/grids should handle empty state with helpful message',
          category: 'UX Consistency',
          recommended: true,
        },
        messages: {
          missingEmptyState: 'Array map without empty state check. Show helpful message when data is empty.',
        },
      },
      create(context) {
        return {
          CallExpression(node) {
            if (node.callee.type === 'MemberExpression'
              && node.callee.property.name === 'map') {
              let parent = node.parent;
              let hasLengthCheck = false;

              while (parent && parent.type !== 'Program') {
                if (parent.type === 'ConditionalExpression'
                  || parent.type === 'IfStatement'
                  || parent.type === 'LogicalExpression') {
                  const source = context.getSourceCode();
                  const parentText = source.getText(parent);

                  if (parentText.includes('.length')
                    || parentText.includes('?.length')
                    || parentText.includes('isEmpty')
                    || parentText.includes('hasData')) {
                    hasLengthCheck = true;
                    break;
                  }
                }
                parent = parent.parent;
              }

              if (!hasLengthCheck) {
                context.report({
                  node,
                  messageId: 'missingEmptyState',
                });
              }
            }
          },
        };
      },
    },

    'require-image-optimization': {
      meta: {
        type: 'suggestion',
        docs: {
          description: 'Use Next.js Image component instead of img tag',
          category: 'Performance',
          recommended: true,
        },
        messages: {
          useNextImage: 'Use Next.js <Image> component instead of <img> for automatic optimization.',
        },
      },
      create(context) {
        return {
          JSXElement(node) {
            if (node.openingElement.name.name === 'img') {
              const filename = context.getFilename();
              if (filename.includes('/app/') || filename.includes('/pages/') || filename.includes('/src/')) {
                context.report({
                  node,
                  messageId: 'useNextImage',
                });
              }
            }
          },
        };
      },
    },

    'require-aria-label-on-icon-buttons': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Icon-only buttons need aria-label for screen readers',
          category: 'Accessibility',
          recommended: true,
        },
        messages: {
          missingAriaLabel: 'Icon button missing aria-label. Screen readers need descriptive text.',
        },
      },
      create(context) {
        return {
          JSXElement(node) {
            const elementName = node.openingElement.name.name;

            if (elementName === 'button' || elementName === 'Button') {
              const attributes = node.openingElement.attributes;
              const hasAriaLabel = attributes.some(attr =>
                attr.name?.name === 'aria-label'
                || attr.name?.name === 'aria-labelledby',
              );

              const hasTextChild = node.children.some(child =>
                child.type === 'JSXText' && child.value.trim().length > 0,
              );

              const source = context.getSourceCode();
              const buttonContent = source.getText(node);
              const hasIcon = /Icon|icon|svg|SVG|Ri[A-Z]|Lucide|Menu|X|Close|Search|Arrow/.test(buttonContent);

              if (hasIcon && !hasTextChild && !hasAriaLabel) {
                context.report({
                  node,
                  messageId: 'missingAriaLabel',
                });
              }
            }
          },
        };
      },
    },

    // ========================================
    // PROJECT ADAPTATION RULES
    // ========================================

    'no-brutalist-styling': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Ensure modern soft design style is used (no brutalist styling from VoiceCraft template)',
          category: 'Design System Consistency',
          recommended: true,
        },
        messages: {
          brutalistClass: 'Brutalist class "{{className}}" detected. Use modern soft design: border-2 instead of border-4, rounded-2xl instead of sharp corners.',
          brutalistShadow: 'brutalist-shadow class detected. Use Tailwind shadows: shadow-lg, shadow-xl, shadow-2xl.',
          reactIcons: 'React Icons import detected. Use Lucide icons instead (import from "lucide-react").',
          uppercaseText: 'UPPERCASE text detected: "{{text}}". Use Title Case for modern soft design.',
          blackBg: 'Black background (bg-black) detected on card/container. Use gradient backgrounds: bg-gradient-to-br from-orange-50 via-amber-50 to-lime-50.',
        },
      },
      create(context) {
        const brutalistClasses = [
          'border-4',
          'border-8',
          'brutalist-shadow',
        ];

        function shouldSkipFile() {
          const filename = context.getFilename();
          return filename.includes('CLAUDE.md') ||
              filename.includes('README.md') ||
              filename.includes('.git/') ||
              filename.includes('node_modules/') ||
              filename.includes('eslint-plugin-product-quality');
        }

        return {
          // Check className attributes for brutalist classes
          JSXAttribute(node) {
            if (shouldSkipFile()) return;

            if (node.name.name === 'className' && node.value?.value) {
              const classes = node.value.value.split(' ');

              classes.forEach((className) => {
                // Check for brutalist classes
                if (brutalistClasses.some(bc => className.includes(bc))) {
                  context.report({
                    node,
                    messageId: className.includes('brutalist-shadow') ? 'brutalistShadow' : 'brutalistClass',
                    data: { className },
                  });
                }

                // Check for border-4 border-black combination
                if (className === 'border-4' && classes.includes('border-black')) {
                  context.report({
                    node,
                    messageId: 'brutalistClass',
                    data: { className: 'border-4 border-black' },
                  });
                }

                // Check for bg-black on containers (not buttons)
                if (className === 'bg-black') {
                  const parentIsContainer = node.parent.parent.openingElement?.name.name === 'div'
                    || node.parent.parent.openingElement?.name.name === 'section'
                    || node.parent.parent.openingElement?.name.name === 'article'
                    || classes.some(c => c.includes('card') || c.includes('container'));

                  if (parentIsContainer) {
                    context.report({
                      node,
                      messageId: 'blackBg',
                      data: { className },
                    });
                  }
                }
              });
            }
          },

          // Check for React Icons imports
          ImportDeclaration(node) {
            if (shouldSkipFile()) return;

            if (node.source.value.startsWith('react-icons/')) {
              context.report({
                node,
                messageId: 'reactIcons',
              });
            }
          },

          // Check for UPPERCASE text in JSX
          JSXText(node) {
            if (shouldSkipFile()) return;

            const text = node.value.trim();

            // Skip hex colors, URLs, and other technical strings
            if (text.startsWith('#') || text.startsWith('http') || text.startsWith('rgb') || text.startsWith('hsl')) {
              return;
            }

            // Check if text is mostly uppercase (more than 50% uppercase letters)
            const uppercaseCount = (text.match(/[A-Z]/g) || []).length;
            const letterCount = (text.match(/[A-Za-z]/g) || []).length;

            if (letterCount >= 4 && uppercaseCount / letterCount > 0.8 && !text.match(/^[A-Z]{1,4}$/)) {
              context.report({
                node,
                messageId: 'uppercaseText',
                data: { text: text.substring(0, 50) },
              });
            }
          },

          // Check for UPPERCASE text in string literals (headings, labels)
          Literal(node) {
            if (shouldSkipFile()) return;

            if (typeof node.value === 'string') {
              const text = node.value.trim();

              // Skip hex colors, URLs, and other technical strings
              if (text.startsWith('#') || text.startsWith('http') || text.startsWith('rgb') || text.startsWith('hsl')) {
                return;
              }

              const uppercaseCount = (text.match(/[A-Z]/g) || []).length;
              const letterCount = (text.match(/[A-Za-z]/g) || []).length;

              // Check for heading-like UPPERCASE strings (long enough to be titles)
              if (letterCount >= 6 && uppercaseCount / letterCount > 0.8 && !text.match(/^[A-Z]{1,4}$/)) {
                // Check if this is likely a heading or label (in JSX context)
                let parent = node.parent;
                let isHeadingContext = false;

                while (parent && !isHeadingContext) {
                  if (parent.type === 'JSXElement') {
                    const elementName = parent.openingElement?.name?.name || '';
                    if (/^[Hh][1-6]$/.test(elementName) || elementName === 'label' || elementName === 'span') {
                      isHeadingContext = true;
                    }
                  }
                  parent = parent.parent;
                }

                if (isHeadingContext) {
                  context.report({
                    node,
                    messageId: 'uppercaseText',
                    data: { text: text.substring(0, 50) },
                  });
                }
              }
            }
          },
        };
      },
    },

    'no-template-remnants': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Ensure template project has been fully adapted (no VoiceCraft, ClipMaster, LogoSmith remnants)',
          category: 'Project Adaptation',
          recommended: true,
        },
        messages: {
          templateRemnant: 'Template remnant found: "{{remnant}}". This suggests the project was not fully adapted from the template. Replace with actual project name/content.',
          templateImportPath: 'Import path contains template name "{{path}}". Rename directory/file to match current project.',
          forbiddenKeyword: 'Domain-specific keyword found: "{{keyword}}". For PetPortrait AI, replace voice/audio content with pet portrait content.',
        },
        schema: [
          {
            type: 'object',
            properties: {
              projectName: {
                type: 'string',
                description: 'Current project name (e.g., "PetPortrait AI")',
              },
              templateNames: {
                type: 'array',
                items: { type: 'string' },
                description: 'List of template names to check for (e.g., ["VoiceCraft", "ClipMaster"])',
              },
              forbiddenKeywords: {
                type: 'array',
                items: { type: 'string' },
                description: 'List of domain-specific keywords to check for (e.g., ["voice", "audio", "Kokoro"])',
              },
            },
          },
        ],
      },
      create(context) {
        const options = context.options[0] || {};
        const projectName = options.projectName || 'CurrentProject';
        const templateNames = options.templateNames || ['VoiceCraft', 'ClipMaster', 'LogoSmith'];
        const forbiddenKeywords = options.forbiddenKeywords || [];

        // Create case-insensitive patterns for each template name
        const patterns = templateNames.flatMap(name => [
          new RegExp(`\\b${name}\\b`, 'i'),           // VoiceCraft
          new RegExp(`\\b${name.toLowerCase()}\\b`, 'i'),  // voicecraft
          new RegExp(`\\b${name.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1)}\\b`, 'i'), // voice-craft
        ]);

        // Create patterns for forbidden keywords
        const keywordPatterns = forbiddenKeywords.map(keyword =>
          new RegExp(`\\b${keyword}\\b`, 'i')
        );

        function shouldSkipFile() {
          const filename = context.getFilename();
          return filename.includes('CLAUDE.md') ||
              filename.includes('README.md') ||
              filename.includes('ADAPTATION_GUIDE.md') ||
              filename.includes('.git/') ||
              filename.includes('node_modules/') ||
              filename.includes('test-voice-cloning.ts') ||
              filename.includes('eslint-plugin-product-quality');
        }

        function checkText(node, text) {
          if (!text || typeof text !== 'string') return;
          if (shouldSkipFile()) return;

          patterns.forEach(pattern => {
            if (pattern.test(text)) {
              const match = text.match(pattern);
              context.report({
                node,
                messageId: 'templateRemnant',
                data: { remnant: match[0] },
              });
            }
          });
        }

        function checkKeywords(node, text) {
          if (!text || typeof text !== 'string') return;
          if (shouldSkipFile()) return;
          if (forbiddenKeywords.length === 0) return;

          keywordPatterns.forEach((pattern, index) => {
            if (pattern.test(text)) {
              const match = text.match(pattern);
              context.report({
                node,
                messageId: 'forbiddenKeyword',
                data: { keyword: match[0] },
              });
            }
          });
        }

        return {
          // Check string literals
          Literal(node) {
            if (typeof node.value === 'string') {
              checkText(node, node.value);
              checkKeywords(node, node.value);
            }
          },

          // Check template literals
          TemplateLiteral(node) {
            node.quasis.forEach(quasi => {
              checkText(quasi, quasi.value.raw);
              checkKeywords(quasi, quasi.value.raw);
            });
          },

          // Check JSX text
          JSXText(node) {
            checkText(node, node.value);
            checkKeywords(node, node.value);
          },

          // Check import/export paths
          ImportDeclaration(node) {
            const source = node.source.value;
            templateNames.forEach(name => {
              const kebabCase = name.replace(/([A-Z])/g, '-$1').toLowerCase().slice(1);
              if (source.includes(name.toLowerCase()) || source.includes(kebabCase)) {
                context.report({
                  node: node.source,
                  messageId: 'templateImportPath',
                  data: { path: source },
                });
              }
            });
          },

          // Check comments
          Program(node) {
            const sourceCode = context.getSourceCode();
            const comments = sourceCode.getAllComments();

            comments.forEach(comment => {
              checkText(comment, comment.value);
              checkKeywords(comment, comment.value);
            });
          },
        };
      },
    },
  },
};
