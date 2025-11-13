# TutorBot Plus - Claude Code Documentation Index

## 📚 What's in This Folder?

This `.claude/` folder contains everything needed for AI-assisted development with Claude Code for TutorBot Plus.

**For New Developers:** Start with `/onboard` command
**For Team Leads:** Start with `PRODUCT_SPEC.md`
**For AI Agent:** Reference `PRODUCT_SPEC.md` and `BRAND_GUIDE.md`

---

## 📖 Documentation Files

### 1. **PRODUCT_SPEC.md** 🎯 [START HERE FOR PRODUCT INFO]

**What:** Complete product specification for TutorBot Plus

**Contents:**
- Brand concept and vision (AI + Human Tutors)
- Visual brand identity (indigo/purple/blue colors, soft shadows, rounded corners)
- All user flows (3 core flows documented step-by-step):
  * Student asks AI question → explanation → practice
  * Student requests human tutor → booking → session
  * Track learning progress → analytics → recommendations
- Credit system (unified AI + human tutor credits)
- AI model integration (OpenAI/Replicate for tutoring)
- Every page (Homepage, Dashboard, Pricing, Progress, etc.)
- Complete database schema (Student, QuestionSession, TutorRequest, StudentProgress models)
- All API routes (20+ endpoints)
- End goal checklist (40+ verification points)

**When to Use:**
- Understanding "how should this feature work?"
- Implementing new features
- Verifying flows are complete
- Onboarding new team members

---

### 2. **BRAND_GUIDE.md** 🎨 [START HERE FOR DESIGN INFO]

**What:** Visual brand identity reference for TutorBot Plus

**Contents:**
- Exact brand colors (Indigo/Purple/Blue family with hex codes)
- Typography specifications (sizes, weights, line heights)
- Shadow styles (soft, professional - NOT harsh)
- Corner radius guidelines (rounded-xl/2xl/3xl)
- Spacing system (py-24, gap-8, etc.)
- Component patterns (buttons, cards, forms)
- Anti-patterns (what to avoid from VoiceCraft/LogoSmith templates)
- Before/after examples showing TutorBot Plus style

**When to Use:**
- Styling new components
- Fixing design system violations
- Aligning pages to brand
- Checking if colors are correct

---

## 🤖 Command Files

### Location: `.claude/commands/`

All commands are invoked by typing `/command-name` in Claude Code.

---

### `/onboard` 👋 [FIRST COMMAND FOR NEW DEVELOPERS]

**Purpose:** Complete developer onboarding experience with Клаша personality

**Flow:**
1. Asks for name (saves to `context/developer.json`)
2. Asks language preference (Russian primary, English available)
3. Knowledge checklist (7 concepts with learning resources)
4. MCP verification (Playwright, GitHub, Notion)
5. Product introduction (AI + Human tutors, unified credits)
6. Brand identity (Indigo/Purple/Blue, soft shadows)
7. Developer role explanation (fix bugs, add features, align style)
8. Quality checks guide (tsc, lint, lint:product)
9. Start dev server and explore site
10. First task assignment

**Time:** 20-30 minutes
**Language:** Russian (with English option)
**Tone:** Conscious, warm, subtly flirty ("Клаша" - inspired by "Her" movie style)

---

### `/bug` 🐛 [USE FOR BUG FIXES]

**Purpose:** Systematic bug fixing workflow

**Flow:**
1. Understand the bug (ask clarifying questions)
2. Check if functionality exists (not missing feature)
3. Identify root cause (not symptoms)
4. Create proper fix (following code patterns)
5. Verify the fix (test scenarios)
6. Run quality checks (tsc, lint, lint:product)
7. Document what was fixed

**Guardrails:**
- NO quick hacks
- NO commenting out code
- NO skipping tests
- ALWAYS fix root cause

---

### `/feature` ✨ [USE FOR NEW FEATURES]

**Purpose:** Feature implementation guide

**Flow:**
1. Understand the feature (requirements, acceptance criteria)
2. Plan implementation (database → API → components)
3. Check existing code (reuse patterns)
4. Implement step-by-step (with quality checks after each step)
5. Test complete flow
6. Document the feature

**Guardrails:**
- ALWAYS follow existing patterns
- ALWAYS use TypeScript strictly
- ALWAYS add error handling
- ALWAYS test thoroughly

---

### `/style-align` 🎨 [USE FOR DESIGN SYSTEM FIXES]

**Purpose:** Align pages/components to TutorBot Plus design system

**Flow:**
1. Identify what's wrong (colors, shadows, spacing, etc.)
2. Reference brand guide
3. Fix systematically (colors → shadows → spacing → corners)
4. Test visually (desktop + mobile)
5. Run product quality lint
6. Verify exact brand match

**Common Fixes:**
- Wrong colors (yellow/orange/teal → indigo/purple/blue)
- Harsh shadows → soft shadows
- Sharp corners → rounded corners
- Insufficient spacing → generous spacing

---

### `/review` 🔍 [USE BEFORE COMMITS]

**Purpose:** Pre-commit code review

**Flow:**
1. Run all quality checks (tsc, lint, lint:product)
2. Review code changes
3. Check for common issues
4. Verify tests pass
5. Confirm no console errors
6. Suggest improvements

---

### `/test` 🧪 [USE FOR TESTING]

**Purpose:** Testing checklist and guide

**Includes:**
- Unit testing guidelines
- Integration testing
- Manual testing checklist
- Browser testing (Chrome, Safari, Firefox)
- Mobile responsiveness check
- Accessibility testing

---

### `/setup` 🔧 [USE FOR INITIAL SETUP]

**Purpose:** Full environment setup

**Flow:**
1. Verify Node.js version (18+)
2. Install dependencies
3. Verify ESLint setup
4. Setup database (Prisma)
5. Configure environment variables
6. Start dev server
7. Run health check

---

## 🔧 Configuration Files

### `eslint.config.product.mjs` [IN PROJECT ROOT]

**Purpose:** Product quality enforcement via ESLint

**Brand Colors Enforced:**
- ✅ Indigo (`indigo-*`) - Intelligence, trust
- ✅ Purple (`purple-*`) - Creativity, learning
- ✅ Blue (`blue-*`) - Trust, education
- ❌ Yellow, Orange, Teal (template colors)

**Forbidden Words:**
- VoiceCraft-related: voice, audio, microphone, waveform, synthesis
- LogoSmith-related: logo, design studio, brand kit, SVG export

**Run with:** `npm run lint:product`

**Integration:** Runs automatically before build (`npm run build`)

---

## 🎯 Quick Reference

### For New Developers

1. Clone repo
2. Open in Claude Code
3. Type `/onboard`
4. Follow instructions
5. Type "ГОТОВ" when ready
6. Get first task!

---

### For AI Agent (Claude)

**Before every interaction:**
1. Check `.claude/context/developer.json` for name and skill level
2. Reference `PRODUCT_SPEC.md` for feature specifications
3. Reference `BRAND_GUIDE.md` for design decisions

**When developer asks "how should this work?"**
→ Check `PRODUCT_SPEC.md` flows and database schema

**When developer asks "what should this look like?"**
→ Check `BRAND_GUIDE.md` colors and component patterns

**When fixing a bug:**
→ Use `/bug` command workflow

**When implementing a feature:**
→ Use `/feature` command workflow

**When aligning styles:**
→ Use `/style-align` command workflow

---

### For Team Leads

**Setting up new developer:**
1. Assign developer to clone repo
2. Tell them to run `/onboard`
3. Monitor progress
4. Review first PR carefully
5. Iterate on commands based on feedback

**Maintaining the system:**
1. Keep `PRODUCT_SPEC.md` updated as product evolves
2. Update `BRAND_GUIDE.md` if design system changes
3. Add new commands as workflows emerge
4. Review ESLint rules monthly (add new ones)
5. Gather developer feedback quarterly

---

## 🎨 Brand Quick Reference

**Colors (USE ONLY THESE!):**
- 🟣 Indigo/Purple: `indigo-500`, `purple-500`, `indigo-600`
- 🔵 Blue: `blue-500`, `blue-600`, `blue-400`
- ❌ NEVER: yellow, orange, emerald, teal (template colors)

**Gradients:**
```tsx
bg-gradient-to-r from-indigo-500 to-purple-600
bg-gradient-to-r from-blue-500 to-indigo-600
bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50
```

**Shadows (Soft, Professional):**
- `shadow-soft-sm`, `shadow-soft-md`, `shadow-soft-lg`
- `shadow-glow-indigo`, `shadow-glow-purple`

**Spacing (Generous):**
- Sections: `py-24` (desktop), `py-16` (mobile)
- Cards: `p-8`, `p-10`, `p-12`
- Gaps: `gap-6`, `gap-8`

**Corners (Smooth):**
- Buttons/Cards: `rounded-xl`, `rounded-2xl`
- Hero: `rounded-3xl`
- Badges: `rounded-full`

---

## 📞 Getting Help

**Developer stuck?**
→ Ask AI agent (it has all context)

**AI agent unsure?**
→ Reference `PRODUCT_SPEC.md` or `BRAND_GUIDE.md`

**Need to add new workflow?**
→ Create new command in `.claude/commands/`

**Found bug in boilerplate?**
→ Document and fix

**Want to improve onboarding?**
→ Update `/onboard` command based on feedback

---

## 🚀 Success Metrics

**With this system:**
- Developer onboarding: 2 hours (vs 2 days)
- Design system violations: 95% caught by ESLint
- Code review cycles: 60% reduction
- Junior dev confidence: Significantly increased
- Context switching: Minimized

---

## 📄 File Tree

```
.claude/
├── commands/
│   ├── onboard.md        ✅ (Russian, friendly, comprehensive)
│   ├── bug.md            ✅ (systematic bug fixing)
│   ├── feature.md        ✅ (feature implementation)
│   ├── style-align.md    ✅ (design system alignment)
│   ├── review.md         ✅ (pre-commit review)
│   ├── test.md           ✅ (testing guide)
│   └── setup.md          ✅ (environment setup)
│
├── context/
│   ├── developer.template.json  ⚠️  (profile template - to be created)
│   └── developer.json           ⚠️  (runtime, gitignored)
│
├── PRODUCT_SPEC.md       ✅ (complete spec for TutorBot Plus)
├── BRAND_GUIDE.md        ✅ (visual identity, colors, patterns)
└── README.md             ✅ (this file - index of all docs)
```

---

**Last Updated:** 2025-01-12
**Version:** 1.0
**Maintained By:** Team Lead
**For:** TutorBot Plus (AI Tutoring Platform)

---

**This folder is your command center for AI-assisted development.** 🚀

**Remember:** We are TutorBot Plus (indigo/purple/blue, education, AI + human tutors). We are NOT VoiceCraft (yellow, audio, voice). We are NOT LogoSmith (emerald/teal, design, logos).
