# Button Component — Detailed Figma vs CSS Comparison

**Analysis Date**: 2026-09-13  
**Status**: ⚠️ CRITICAL MISMATCH FOUND

---

## Summary of Findings

| Category | Figma Spec | CSS Implementation | Status |
|----------|-----------|------------------|--------|
| Font Family | Inter | Figtree (`var(--fontfamily-body)`) | ❌ MISMATCH |
| Font Size | 16px | 16px (`var(--fontsize-lg)`) | ✅ MATCH |
| Font Weight | Medium (500) | 500 | ✅ MATCH |
| Line Height | normal | 24px (`var(--lineheight-lg)`) | ❌ MISMATCH |
| Padding | 12px vertical / 20px horizontal | 12px / 12px (`var(--spacing-sm) var(--spacing-md)`) | ❌ MISMATCH |
| Border Radius | 8px | 8px (`var(--borderradius-md)`) | ✅ MATCH |
| White Space | nowrap | nowrap | ✅ MATCH |

---

## Detailed Specification Comparison

### 1. ❌ CRITICAL: Font Family Mismatch

**Figma Spec**: `font-['Inter:Medium']` = **Inter** font family  
**CSS Current**: `font-family: var(--fontfamily-body);` = **Figtree**  
**Token Value**: `--fontfamily-body: Figtree;`

**Issue**: Figma design explicitly uses Inter (visible in screenshot), but code uses Figtree from the body token.

**Why This Matters**: Inter and Figtree have different metrics, letter spacing, and visual weight. The button will render with different proportions and readability.

**Fix Options**:
1. Create a new token `--fontfamily-ui` or `--fontfamily-button` set to Inter
2. Or use a fallback: `font-family: Inter, var(--fontfamily-body), sans-serif;`
3. Or update the body token to be Inter if that's the intended system font

---

### 2. ❌ CRITICAL: Line Height Mismatch

**Figma Spec**: `leading-[normal]` = **line-height: normal**  
**CSS Current**: `line-height: var(--lineheight-lg);` = **24px**  
**Token Value**: `--lineheight-lg: 24px;`

**Issue**: Figma specifies `normal` line-height (browser default ~1.2), but code uses `24px` (1.5x the font size).

**Visual Impact**: The button text will have more vertical space than designed. Line height mismatch of 24px vs ~19px (normal for 16px font) is visually significant.

**Figma Notes**: "leading-[normal]" is explicitly set in every variant description. This is intentional design.

**Fix**: Replace with `line-height: normal;` (hardcoded is acceptable here since it's an explicit design choice)

---

### 3. ❌ CRITICAL: Padding Mismatch

**Figma Spec**: 
- Vertical padding: **12px** (`py-[12px]`)
- Horizontal padding: **20px** (`px-[20px]`)
- Shorthand: `12px 20px` (vertical horizontal)

**CSS Current**: 
- `padding: var(--spacing-sm) var(--spacing-md);`
- Token values: `--spacing-sm: 12px`, `--spacing-md: 12px`
- **Actual padding: 12px 12px** (equal on all sides)

**Issue**: Button is more square/compact than designed. Should be wider horizontally.

**Figma Dimensions**: 91×43px
- With padding 12px/20px: inner content area = 51×19px
- Current 12px/12px: inner content area = 67×19px (too wide)

**Fix**: Need horizontal spacing token for 20px. Options:
1. Use `var(--spacing-md)` for both if it equals 20px (check if --spacing-md is 20px, not 12px)
2. Create `--spacing-lg` or `--spacing-button-horizontal` for 20px
3. Or hardcode: `padding: var(--spacing-sm) 20px;` with comment explaining design intent

---

### 4. ✅ Border Radius: CORRECT

**Figma Spec**: `rounded-[8px]` = **8px**  
**CSS Current**: `border-radius: var(--borderradius-md);` = **8px** ✅  
**Status**: PASS

---

### 5. ✅ Font Size: CORRECT

**Figma Spec**: `text-[16px]` = **16px**  
**CSS Current**: `font-size: var(--fontsize-lg);` = **16px** ✅  
**Status**: PASS

---

### 6. ✅ Font Weight: CORRECT

**Figma Spec**: `font-medium` = **500**  
**CSS Current**: `font-weight: 500;` ✅  
**Status**: PASS

---

### 7. ✅ White Space: CORRECT

**Figma Spec**: `whitespace-nowrap`  
**CSS Current**: `white-space: nowrap;` ✅  
**Status**: PASS

---

## State-by-State Visual Verification

### Primary / Default
**Figma**:
- Background: Blue solid (`bg/primary/bold` = `#3b82f6`)
- Text: White (`text/inverse`)
- Border: None
- Size: 91×43px

**CSS Check**: 
- ✅ Background: `var(--color-bg-primary-idle)` = matches
- ✅ Text: `var(--color-text-inverse)` = matches
- ✅ Border: None = matches
- ⚠️ **Padding mismatch** affects perceived size

### Primary / Hovered
**Figma**:
- Background: Lighter blue (`bg/primary/bold/hovered` = `#629bf8`)
- Text: White
- Transition smooth

**CSS Check**:
- ✅ Background: `var(--color-bg-primary-hovered)` = matches
- ✅ Text: `var(--color-text-inverse)` = matches
- ✅ Transition: `150ms ease` = reasonable

### Primary / Focused
**Figma**:
- Background: Blue (idle state)
- Text: White
- **Border: 2px solid blue** (`border/focused` = `#629bf8`)
- Border placed OUTSIDE (not inset)
- **Size remains 91×43px** (border doesn't expand frame)

**CSS Check**:
- ✅ Background: `var(--color-bg-primary-idle)` = correct
- ✅ Border: `2px solid var(--color-border-brand-bold)` = correct
- ✅ Padding adjustment: `calc(12px - 2px) calc(20px - 2px)` = correct compensation
- ⚠️ **Padding base still wrong** (should be 20px horizontal, not 12px)

### Secondary Variants
**Figma**:
- Default: Light blue background (`bg/primary/subtle` = `#ebf2fe`)
- Hovered: White background (`bg/base`)
- Text: Dark blue (`text/brand`)
- Focused: Light blue background + blue border

**CSS Check**:
- ✅ Colors: All tokens match Figma bindings
- ⚠️ **Padding still wrong** on all states

### Disabled Variants (Both)
**Figma**:
- Background: Gray (`bg/disabled`)
- Text: Medium gray (`text/disabled`)
- Cursor: not-allowed

**CSS Check**:
- ✅ Background: `var(--color-bg-disabled)` = matches
- ✅ Text: `var(--color-text-disabled)` = matches
- ✅ Cursor: `not-allowed` = matches

---

## Figma Component Descriptions (Design Intent)

From Figma metadata:

> **Font**: "Inter Medium" — explicitly specified. The design uses the Inter typeface for the button.

> **Line Height**: "leading-[normal]" — explicitly set in design. This is the intended visual density.

> **Padding**: "px-[20px] py-[12px]" — 20px horizontal, 12px vertical. Gives button adequate horizontal breathing room for text.

> **Corner Radius**: "8px is a placeholder pending a Horizon radius token" — acknowledged in design as temporary; we now have `--borderradius-md`.

> **Note on Secondary Hovered**: "bg=bg/primary/subtle/hovered" which maps to white background (`#ffffff`) — currently using `var(--color-bg-base)`.

---

## Critical Issues Summary

### Must Fix (Visible Mismatch)

1. **Font Family**: Inter vs Figtree — affects text rendering
2. **Padding**: 20px horizontal vs 12px — affects button proportions significantly
3. **Line Height**: normal vs 24px — affects text vertical spacing

### Nice to Have

- Verify `--color-bg-base` is actually white for secondary hovered state

---

## Recommendations

**Priority 1 — Fix Before QA Approval**:

1. **Fix Padding**: Change to match Figma (12px vertical, 20px horizontal)
   - Option A: If `--spacing-md: 20px`, use `padding: var(--spacing-sm) var(--spacing-md)`
   - Option B: If `--spacing-md: 12px`, change CSS to `padding: var(--spacing-sm) 20px;` with comment

2. **Fix Font**: Use Inter font
   - Option A: Create `--fontfamily-ui: Inter` token
   - Option B: Use `font-family: Inter, var(--fontfamily-body), sans-serif;`

3. **Fix Line Height**: Change from token-based to `normal`
   - Change: `line-height: normal;` (acceptable hardcoded value per design spec)

**Priority 2 — Verify**:
- Confirm `--color-bg-base` is correct for secondary hovered state

---

## Impact on QA Status

**Current Status**: ❌ **FAIL** — Visible mismatches with Figma design

The button **will not render the same as Figma** due to:
- Font rendering differences (Inter vs Figtree)
- Different button proportions (padding mismatch)
- Different text spacing (line-height mismatch)

**Next Action**: Fix these three issues and re-test.
