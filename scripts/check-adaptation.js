#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n🔍 Checking TutorBot Plus adaptation quality...\n');

// Configuration
const PROJECT_NAME = 'TutorBot Plus';
const OLD_NAMES = ['VoiceCraft', 'voicecraft', 'VOICECRAFT'];
const FORBIDDEN_KEYWORDS = [
  'voice cloning',
  'audio synthesis',
  'Kokoro',
  'Minimax',
  'XTTS',
  '@/components/voicecraft',
];

// Auto-discover all public pages (exclude admin, dashboard, specialist, API routes)
function findPublicPages() {
  try {
    const result = execSync(
      'find app -name "page.tsx" -type f',
      { encoding: 'utf-8' }
    ).trim();

    if (!result) return [];

    const allPages = result.split('\n');

    // Filter to only public-facing pages
    return allPages.filter(page => {
      // Exclude these directories
      const excludeDirs = ['admin', 'dashboard', 'specialist', 'api'];
      return !excludeDirs.some(dir => page.includes(`/${dir}/`));
    });
  } catch (e) {
    console.error('Error finding pages:', e.message);
    return [];
  }
}

const CRITICAL_PAGES = findPublicPages();

let hasErrors = false;
let warningCount = 0;

if (CRITICAL_PAGES.length > 0) {
  console.log(`📄 Found ${CRITICAL_PAGES.length} public pages to check:\n${CRITICAL_PAGES.map(p => '   - ' + p).join('\n')}\n`);
} else {
  console.log('⚠️  No public pages found!\n');
}

// Check 1: Search for old project names
console.log('📌 Check 1: Searching for template remnants...');
OLD_NAMES.forEach((name) => {
  try {
    const result = execSync(
      `grep -r "${name}" app components --include="*.tsx" --include="*.ts" | grep -v "node_modules" | wc -l`,
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();

    const count = parseInt(result);
    if (count > 0) {
      console.log(`   ⚠️  Found ${count} occurrences of "${name}"`);
      warningCount += count;
    }
  } catch (e) {
    // grep returns non-zero if no matches, which is what we want
  }
});

// Check 2: Search for forbidden keywords in critical pages
console.log('\n📌 Check 2: Checking critical pages for voice/audio content...');
CRITICAL_PAGES.forEach((page) => {
  // Skip components showcase page - it's allowed to reference component libraries
  if (page.includes('app/components/page.tsx')) {
    return;
  }

  const filePath = path.join(process.cwd(), page);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');

    FORBIDDEN_KEYWORDS.forEach((keyword) => {
      if (content.toLowerCase().includes(keyword.toLowerCase())) {
        console.log(`   ❌ ${page}: Found "${keyword}"`);
        hasErrors = true;
      }
    });
  }
});

// Check 3: Verify React Icons are not used in critical pages
console.log('\n📌 Check 3: Checking for React Icons in critical pages...');
CRITICAL_PAGES.forEach((page) => {
  const filePath = path.join(process.cwd(), page);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');

    if (content.includes('react-icons')) {
      console.log(`   ❌ ${page}: Still using React Icons`);
      hasErrors = true;
    }
  }
});

// Check 4: Verify correct branding
console.log('\n📌 Check 4: Verifying branding...');
const componentsToCheck = [
  'components/shared/Navbar.tsx',
  'components/marketing/layout/footer.tsx',
];

componentsToCheck.forEach((file) => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes(PROJECT_NAME)) {
      console.log(`   ⚠️  ${file}: Missing "${PROJECT_NAME}" branding`);
      warningCount++;
    }
  }
});

// Summary
console.log('\n' + '='.repeat(60));
if (hasErrors) {
  console.log('❌ CRITICAL ERRORS FOUND - Build blocked!');
  console.log('\nPlease fix the errors above before building.');
  console.log('Critical pages must not contain voice/audio content or React Icons.');
  process.exit(1);
} else if (warningCount > 0) {
  console.log(`⚠️  ${warningCount} warnings found (not blocking build)`);
  console.log('✅ Critical pages are properly adapted');
} else {
  console.log('✅ All adaptation checks passed!');
  console.log(`✅ ${PROJECT_NAME} is ready for production`);
}
console.log('='.repeat(60) + '\n');

process.exit(0);
