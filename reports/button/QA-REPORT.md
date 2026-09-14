# Button Component — QA Test Report

**Component**: Button  
**Figma Node**: https://www.figma.com/design/e1O2ke1lc0CpM6GhYKyr3o/🧊-Horizon.-Web.-Components.-Draft-?node-id=36-2  
**Test Date**: 2026-09-13  
**Status**: ❌ FAIL — Multiple token violations and missing Figma node URL

---

## Variant Matrix (Expected vs. Implemented)

### Figma Design Variants
- **Primary variant**: 5 states (default, hovered, pressed, focused, disabled) — 91×43px each
- **Secondary variant**: 5 states (default, hovered, pressed, focused, disabled) — 91×43px each
- **Total**: 10 variants

### Story File Coverage
✅ All 10 variants have corresponding stories in Button.stories.tsx  
✅ Variant/state combinations match Figma design  
✅ Plus AllVariants showcase story (11 total stories)

---

## Critical Findings

### 1. ❌ VIOLATION: Hardcoded Font Family (CLAUDE.md §Typography)
**Severity**: ERROR  
**Location**: [Button.css:8](src/components/button/Button.css#L8)  
**Issue**: Font family hardcoded to `Inter` instead of using token  
```css
font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
**CLAUDE.md Rule**: "Font family, weight, size, and line-height come from tokens."  
**Fix**: Replace with `font-family: var(--fontfamily-body);`

---

### 2. ❌ VIOLATION: Hardcoded Font Size (CLAUDE.md §Typography)
**Severity**: ERROR  
**Location**: [Button.css:9](src/components/button/Button.css#L9)  
**Issue**: Font size hardcoded to `16px` instead of using token  
```css
font-size: 16px;
```
**CLAUDE.md Rule**: "Font family, weight, size, and line-height come from tokens."  
**Available tokens**:
- `--fontsize-lg: 16px` (matches button size)

**Fix**: Replace with `var(--fontsize-lg)`

---

### 3. ❌ VIOLATION: Hardcoded Line-Height (CLAUDE.md §Typography)
**Severity**: ERROR  
**Location**: [Button.css:11](src/components/button/Button.css#L11)  
**Issue**: Line-height hardcoded to `normal` instead of using token  
```css
line-height: normal;
```
**CLAUDE.md Rule**: "Leading and tracking (letter-spacing) come from tokens, never hardcoded."  
**Available tokens**:
- `--lineheight-lg: 24px` (paired with fontSize/lg)

**Fix**: Replace with `var(--lineheight-lg)`

---

### 4. ❌ VIOLATION: Hardcoded Padding (CLAUDE.md §Typography/Layout)
**Severity**: ERROR  
**Location**: [Button.css:5](src/components/button/Button.css#L5)  
**Issue**: Padding hardcoded to `12px 20px` instead of using tokens  
```css
padding: 12px 20px;
```
**CLAUDE.md Rule**: "Every color, space, radius, and font value in a component references a token."  
**Available tokens**:
- `--spacing-sm: 12px` (vertical padding)
- `--spacing-md: 12px` (or check for horizontal spacing token)

**Fix**: Replace with `padding: var(--spacing-sm) var(--spacing-md);` or appropriate spacing tokens

---

### 5. ❌ VIOLATION: Hardcoded Border Radius (CLAUDE.md §Components)
**Severity**: ERROR  
**Location**: [Button.css:6](src/components/button/Button.css#L6)  
**Issue**: Border radius hardcoded to `8px` instead of using token  
```css
border-radius: 8px;
```
**CLAUDE.md Rule**: "Every color, space, radius, and font value in a component references a token."  
**Available tokens**:
- `--borderradius-md: 8px` (matches button radius)

**Fix**: Replace with `var(--borderradius-md)`

---

### 6. ⚠️ MISSING: Figma Node URL in Story File
**Severity**: WARNING  
**Location**: [Button.stories.tsx](src/components/button/Button.stories.tsx) — no URL at top  
**Impact**: QA cannot verify the story was built from the correct Figma node; requires manual node-id lookup every test  
**Fix**: Add at top of file:
```typescript
// Figma: https://www.figma.com/design/e1O2ke1lc0CpM6GhYKyr3o/🧊-Horizon.-Web.-Components.-Draft-?node-id=36-2
```

---

## Variant-by-Variant Comparison

### Primary Variant (5 states)

| State | Figma Size | Code Dimension | Background Token | Text Token | Status |
|-------|-----------|----------------|------------------|-----------|--------|
| Default | 91×43px | Should be 91×43px | `--color-bg-primary-idle` | `--color-text-inverse` | ⚠️ Hardcoded padding |
| Hovered | 91×43px | Should be 91×43px | `--color-bg-primary-hovered` | `--color-text-inverse` | ⚠️ Hardcoded padding |
| Pressed | 91×43px | Should be 91×43px | `--color-bg-primary-hovered` | `--color-text-inverse` | ⚠️ Hardcoded padding |
| Focused | 91×43px | Should be 91×43px (with 2px border) | `--color-bg-primary-idle` | `--color-text-inverse` | ⚠️ Hardcoded padding, border token OK |
| Disabled | 91×43px | Should be 91×43px | `--color-bg-disabled` | `--color-text-disabled` | ⚠️ Hardcoded padding |

### Secondary Variant (5 states)

| State | Figma Size | Code Dimension | Background Token | Text Token | Status |
|-------|-----------|----------------|------------------|-----------|--------|
| Default | 91×43px | Should be 91×43px | `--color-bg-primary-light` | `--color-text-brand` | ⚠️ Hardcoded padding |
| Hovered | 91×43px | Should be 91×43px | `--color-bg-base` | `--color-text-brand` | ⚠️ Hardcoded padding |
| Pressed | 91×43px | Should be 91×43px | `--color-bg-primary-hovered` | `--color-text-brand` | ⚠️ Hardcoded padding |
| Focused | 91×43px | Should be 91×43px (with 2px border) | `--color-bg-primary-light` | `--color-text-brand` | ⚠️ Hardcoded padding, border token OK |
| Disabled | 91×43px | Should be 91×43px | `--color-bg-disabled` | `--color-text-disabled` | ⚠️ Hardcoded padding |

---

## Token Verification

**Checked against**: `build/css/tokens.css` (generated from `design-tokens/semantic.light.tokens.json`)

### Color Tokens
✅ `--color-bg-primary-idle`  
✅ `--color-bg-primary-hovered`  
✅ `--color-bg-primary-light`  
✅ `--color-bg-base`  
✅ `--color-bg-disabled`  
✅ `--color-text-inverse`  
✅ `--color-text-brand`  
✅ `--color-text-disabled`  
✅ `--color-border-brand-bold`

### Typography Tokens
✅ `--fontfamily-body: Figtree` (available for use)  
✅ `--fontsize-lg: 16px` (matches button font size)  
✅ `--lineheight-lg: 24px` (available for line-height)

### Spacing Tokens
✅ `--spacing-sm: 12px`  
✅ `--spacing-md: 12px`  

### Radius Tokens
✅ `--borderradius-md: 8px` (matches button radius)

**Result**: All required tokens exist; just need to be used in the CSS

---

## Props & API

Component accepts props matching Figma property names:
- ✅ `label?: string` (button text)
- ✅ `variant: 'primary' | 'secondary'` (matches Figma "variant" property)
- ✅ `state: 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled'` (matches Figma states)
- ✅ `className?: string` (extension point)

**Issue**: States are controlled via CSS classes, not actual interaction. For a real button:
- `:hover` pseudo-class handles hovered state (controlled by browser)
- `:focus-visible` pseudo-class handles focused state (controlled by browser)
- `:active` pseudo-class handles pressed state (controlled by browser)
- The `disabled` attribute handles disabled state (controlled by HTML)

Using `state` prop allows manual testing but is not how real buttons work. This is acceptable for Storybook stories.

**Result**: Props are documented but state is prop-based (design decision)

---

## Summary

| Category | Count | Status |
|----------|-------|--------|
| Token Violations | 5 | ❌ FAIL |
| Missing Metadata | 1 | ⚠️ WARNING |
| Story Coverage | 10/10 | ✅ PASS |
| Token References | All exist | ✅ PASS |
| Props Match Figma | Yes | ✅ PASS |

**VERDICT**: Component does **NOT pass QA** until token violations are fixed. The component works functionally, but violates CLAUDE.md §Typography and §Components rules about hardcoded values.

---

## Required Fixes (in order)

1. **Replace hardcoded font-family** → `var(--fontfamily-body)`
2. **Replace hardcoded font-size** → `var(--fontsize-lg)`
3. **Replace hardcoded line-height** → `var(--lineheight-lg)`
4. **Replace hardcoded padding** → `var(--spacing-sm) var(--spacing-md)`
5. **Replace hardcoded border-radius** → `var(--borderradius-md)`
6. **Add Figma node URL** to top of Button.stories.tsx

After fixes, re-run QA test and request re-approval.
