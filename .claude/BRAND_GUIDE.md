# TutorBot Plus - Brand Identity Guide

## 🎨 Brand Concept

**TutorBot Plus** is an AI-powered educational platform that combines intelligent tutoring with human expertise. Our visual identity reflects trustworthiness, intelligence, and educational excellence.

**Brand Personality:**
- Educational & Trustworthy
- Modern & Intelligent
- Approachable & Supportive
- Professional & Clean

---

## 🎨 Brand Colors (CRITICAL - USE ONLY THESE!)

### Primary Palette

**Indigo/Purple Family (Intelligence & Creativity):**
```
Primary:
- #6366F1 (indigo-500) - Primary action color, trust
- #818CF8 (indigo-400) - Lighter accents
- #4F46E5 (indigo-600) - Hover states, depth

Purple (Creativity & Learning):
- #A855F7 (purple-500) - Creative emphasis
- #9333EA (purple-600) - Depth
- #C084FC (purple-400) - Lighter accents
```

**Blue Family (Trust & Education):**
```
- #3B82F6 (blue-500) - Secondary action color
- #2563EB (blue-600) - Professional depth
- #60A5FA (blue-400) - Lighter accents
```

### Usage Rules

**Primary CTAs (Buttons, Important Actions):**
- Use Indigo/Purple gradients
- `bg-gradient-to-r from-indigo-500 to-purple-600`
- `bg-gradient-to-r from-blue-500 to-indigo-600`

**Secondary Elements:**
- Solid colors: `bg-indigo-500`, `bg-purple-500`, `bg-blue-500`
- Text highlights: `text-indigo-600`, `text-purple-600`

**Backgrounds:**
- Main: White, Slate-50
- Cards: White with soft shadows
- Sections: Alternating white/slate-50

**Text:**
- Headings: Slate-900, Indigo-900
- Body: Slate-600, Slate-700
- Muted: Slate-500

**Status Colors (Semantic):**
- Success: Green-500 (learning progress, completed)
- Warning: Amber-500 (needs review)
- Error: Red-500 (errors only)
- Info: Blue-500 (tips, hints)

### What NOT to Use (VoiceCraft Template Colors)

**❌ FORBIDDEN COLORS:**
- Yellow (`yellow-*`) - This is VoiceCraft branding
- Orange (`orange-*`) - Not part of TutorBot brand
- Emerald/Teal (`emerald-*`, `teal-*`) - This is LogoSmith branding
- Harsh black borders (`border-black`, `border-4`)

**Why these are forbidden:**
These colors belong to the VoiceCraft template we're adapting from. TutorBot Plus has its own unique identity: Indigo/Purple/Blue = Educational, intelligent, trustworthy.

---

## ✨ Shadows (Soft, Professional)

### Shadow System

**Use These (Soft, Educational):**
```css
shadow-soft-sm       - Subtle elevation (badges, chips)
shadow-soft-md       - Card elevation (default)
shadow-soft-lg       - Modal/popup elevation
shadow-soft-xl       - Hero section elevation
shadow-glow-indigo   - Interactive glow (hover states)
shadow-glow-purple   - Accent glow (focus states)
```

**Implementation Example:**
```tsx
// Card
<div className="bg-white rounded-xl shadow-soft-md">

// Button on hover
<button className="hover:shadow-glow-indigo">

// Hero section
<section className="shadow-soft-xl">
```

### What NOT to Use

**❌ FORBIDDEN SHADOWS:**
- `brutalist-shadow` - Too harsh for educational platform
- `shadow-brutal` - Wrong brand personality
- Hard/dark shadows - Not professional

---

## 🔲 Borders & Corners

### Border Radius (Smooth, Modern)

**Use These:**
```css
rounded-xl      - Buttons, small cards (12px)
rounded-2xl     - Large cards, containers (16px)
rounded-3xl     - Hero sections, features (24px)
rounded-full    - Avatars, badges, pills
```

**Usage Guide:**
- Buttons: `rounded-xl`
- Cards: `rounded-xl` or `rounded-2xl`
- Input fields: `rounded-xl`
- Hero sections: `rounded-3xl`
- Profile pictures: `rounded-full`

### Border Styles

**Prefer:**
- Soft borders: `border border-slate-200`
- Focus states: `ring-2 ring-indigo-500`
- Dividers: `border-slate-200`

**❌ NEVER USE:**
- `border-4` - Too thick, brutalist
- `border-black` - Too harsh
- Sharp corners (`rounded-none`, `rounded-sm`)

---

## 🔘 Button Styles

### Primary Buttons

```tsx
// Primary CTA (Indigo gradient)
<button className="
  px-6 py-3
  bg-gradient-to-r from-indigo-500 to-purple-600
  text-white font-semibold
  rounded-xl
  shadow-soft-md hover:shadow-glow-indigo
  transition-all duration-200
  hover:scale-105
">
  Start Learning
</button>

// Secondary CTA (Blue gradient)
<button className="
  px-6 py-3
  bg-gradient-to-r from-blue-500 to-indigo-600
  text-white font-semibold
  rounded-xl
  shadow-soft-md hover:shadow-glow-purple
  transition-all duration-200
">
  Get Help from Tutor
</button>
```

### Secondary Buttons

```tsx
// Outline style
<button className="
  px-6 py-3
  border-2 border-indigo-500
  text-indigo-600 font-semibold
  rounded-xl
  hover:bg-indigo-50
  transition-all duration-200
">
  View Progress
</button>
```

### Ghost Buttons

```tsx
<button className="
  px-4 py-2
  text-slate-600
  hover:text-indigo-600
  hover:bg-indigo-50
  rounded-xl
  transition-all duration-200
">
  Learn More
</button>
```

---

## 📝 Typography

### Heading Styles

```tsx
// H1 - Hero headings
<h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
  Your Personal AI Tutor
</h1>

// H2 - Section headings
<h2 className="text-4xl font-bold text-slate-900">
  How It Works
</h2>

// H3 - Subsection headings
<h3 className="text-2xl font-semibold text-slate-900">
  Interactive Learning
</h3>

// H4 - Card titles
<h4 className="text-xl font-semibold text-slate-900">
  Math Tutoring
</h4>
```

### Body Text

```tsx
// Large body (hero, intro sections)
<p className="text-lg text-slate-600 leading-relaxed">
  Learn anything with AI-powered personalized tutoring...
</p>

// Regular body
<p className="text-base text-slate-600">
  Get instant explanations and practice problems...
</p>

// Small text (captions, metadata)
<p className="text-sm text-slate-500">
  Last updated 2 hours ago
</p>
```

### Accent Text

```tsx
// Highlighted terms
<span className="text-indigo-600 font-semibold">AI-powered</span>

// Stats, numbers
<span className="text-3xl font-bold text-indigo-600">50,000+</span>

// Labels
<span className="text-xs font-medium text-purple-600 uppercase tracking-wide">
  Featured
</span>
```

---

## 📏 Spacing System

### Section Spacing

```tsx
// Desktop sections
<section className="py-24 px-6">

// Mobile sections
<section className="py-16 px-4 md:py-24 md:px-6">

// Hero sections (more space)
<section className="py-32 px-6 md:py-40">
```

### Card Spacing

```tsx
// Small cards
<div className="p-6 space-y-4">

// Medium cards (default)
<div className="p-8 space-y-6">

// Large cards
<div className="p-10 space-y-8 md:p-12">
```

### Element Gaps

```tsx
// Tight spacing (related items)
<div className="space-y-2"> or <div className="gap-2 flex">

// Normal spacing
<div className="space-y-4"> or <div className="gap-4 flex">

// Generous spacing (sections, features)
<div className="space-y-6"> or <div className="gap-6 flex">

// Very generous (major sections)
<div className="space-y-8"> or <div className="gap-8 flex">
```

---

## 🎴 Card Styles

### Default Card

```tsx
<div className="
  bg-white
  p-8
  rounded-xl
  shadow-soft-md
  hover:shadow-soft-lg
  transition-shadow duration-200
">
  <h3 className="text-xl font-semibold text-slate-900 mb-4">
    Card Title
  </h3>
  <p className="text-slate-600">
    Card content...
  </p>
</div>
```

### Featured Card (with gradient border)

```tsx
<div className="
  relative p-[2px]
  rounded-xl
  bg-gradient-to-r from-indigo-500 to-purple-600
">
  <div className="bg-white rounded-xl p-8">
    <h3 className="text-xl font-semibold text-indigo-900">
      Featured Content
    </h3>
    <p className="text-slate-600">
      Special card content...
    </p>
  </div>
</div>
```

### Interactive Card (clickable)

```tsx
<div className="
  bg-white
  p-8
  rounded-xl
  shadow-soft-md
  hover:shadow-glow-indigo
  hover:scale-[1.02]
  cursor-pointer
  transition-all duration-200
">
  Content...
</div>
```

---

## 🎯 Component Patterns

### Hero Section

```tsx
<section className="py-32 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
      Learn Anything with{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
        AI Tutoring
      </span>
    </h1>
    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
      Get personalized explanations, practice problems, and instant feedback
    </p>
    <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-glow-indigo hover:scale-105 transition-all duration-200">
      Start Learning Free
    </button>
  </div>
</section>
```

### Feature Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {features.map((feature) => (
    <div key={feature.id} className="bg-white p-8 rounded-xl shadow-soft-md hover:shadow-soft-lg transition-shadow">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">
        {feature.title}
      </h3>
      <p className="text-slate-600">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

### Pricing Card

```tsx
<div className="bg-white p-8 rounded-2xl shadow-soft-lg border-2 border-indigo-500">
  <div className="text-center space-y-4">
    <h3 className="text-2xl font-bold text-slate-900">Pro Plan</h3>
    <div className="text-4xl font-bold text-indigo-600">
      $29<span className="text-lg text-slate-500">/month</span>
    </div>
    <ul className="space-y-3 text-left">
      <li className="flex items-center gap-2">
        <CheckIcon className="w-5 h-5 text-green-500" />
        <span className="text-slate-600">Unlimited AI questions</span>
      </li>
      {/* More features */}
    </ul>
    <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-soft-md hover:shadow-glow-indigo transition-all">
      Get Started
    </button>
  </div>
</div>
```

---

## ⚠️ Anti-Patterns (What NOT to Do)

### ❌ Wrong: VoiceCraft Template Style

```tsx
// DON'T: Yellow colors, harsh borders, brutalist shadows
<button className="
  px-6 py-3
  bg-yellow-400
  border-4 border-black
  brutalist-shadow
  uppercase
">
  CLICK ME
</button>
```

### ✅ Correct: TutorBot Plus Style

```tsx
// DO: Indigo/purple colors, soft shadows, rounded corners
<button className="
  px-6 py-3
  bg-gradient-to-r from-indigo-500 to-purple-600
  text-white font-semibold
  rounded-xl
  shadow-soft-md hover:shadow-glow-indigo
  transition-all duration-200
">
  Start Learning
</button>
```

### ❌ Wrong: Harsh, Brutalist Design

```tsx
// DON'T: Sharp corners, thick borders, no spacing
<div className="border-4 border-black rounded-none p-2">
  <h3 className="uppercase">TITLE</h3>
</div>
```

### ✅ Correct: Soft, Educational Design

```tsx
// DO: Smooth corners, soft shadows, generous spacing
<div className="bg-white rounded-xl shadow-soft-md p-8 space-y-4">
  <h3 className="text-xl font-semibold text-slate-900">Title</h3>
  <p className="text-slate-600">Description...</p>
</div>
```

---

## 📋 Quick Reference Checklist

Before implementing any component, verify:

- [ ] **Colors**: Only indigo, purple, blue (NO yellow, orange, teal)
- [ ] **Shadows**: Soft shadows only (NO brutalist, harsh shadows)
- [ ] **Corners**: Rounded (rounded-xl, 2xl, 3xl) (NO sharp corners)
- [ ] **Buttons**: Gradients with rounded-xl (NO solid yellow, harsh borders)
- [ ] **Spacing**: Generous (py-24, p-8, gap-6) (NO cramped layouts)
- [ ] **Typography**: Clear, educational (NO all caps unless labels)
- [ ] **Borders**: Soft, subtle (NO thick black borders)
- [ ] **Hover states**: Smooth transitions with glow effects

---

## 🎨 Color Usage Examples

### Background Gradients (Hero, Features)

```tsx
// Subtle background gradient
className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50"

// Stronger gradient (call-to-action sections)
className="bg-gradient-to-r from-indigo-500 to-purple-600"
```

### Text Gradients

```tsx
// Highlighted text
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
  AI-Powered Learning
</span>
```

### Icon Backgrounds

```tsx
// Feature icons
<div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
  <Icon className="w-6 h-6 text-white" />
</div>
```

---

## 🚀 Implementation Workflow

When styling a new component:

1. **Choose base colors** - Start with indigo/purple/blue
2. **Apply soft shadows** - Use shadow-soft-* utilities
3. **Round the corners** - Use rounded-xl or larger
4. **Add generous spacing** - Use p-8, space-y-6, etc.
5. **Test hover states** - Add glow effects on interactive elements
6. **Verify contrast** - Ensure text is readable (WCAG AA)
7. **Run ESLint** - `npm run lint:product` to catch violations

---

**Last Updated:** 2025-01-12
**Version:** 1.0
**For:** TutorBot Plus (AI Tutoring Platform)

**Remember:** We are NOT VoiceCraft (yellow, audio, microphone). We are NOT LogoSmith (emerald, teal, design). We are TutorBot Plus (indigo, purple, blue, education, intelligence, trust).
