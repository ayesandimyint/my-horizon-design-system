# Button Component — Current QA Status

**Date**: 2026-09-13  
**Status**: ❌ STILL FAILING — 3 of 4 Critical Issues Remain

---

## Quick Status Table

| Property | Figma Spec | CSS Uses | Token Value | Status |
|----------|-----------|----------|------------|--------|
| Border Radius | 8px | `borderradius-sm` | 8px | ✅ FIXED |
| Font Family | Inter | `fontfamily-body` | Figtree | ❌ WRONG |
| Font Size | 16px | `fontsize-lg` | 16px | ✅ OK |
| Line Height | normal | `lineheight-lg` | 24px | ❌ WRONG |
| Padding | 12px 20px | `spacing-sm spacing-md` | 8px 12px | ❌ WRONG |

---

## Detailed Status

### ✅ FIXED: Border Radius
```css
border-radius: var(--borderradius-sm);  /* 8px ✅ CORRECT */
```
**Result**: Matches Figma spec exactly

---

### ❌ CRITICAL: Font Family
```css
font-family: var(--fontfamily-body);  /* Figtree ❌ WRONG */
```
**Figma Spec**: Inter  
**Current**: Figtree  
**Issue**: Text will render with different metrics and visual weight  
**Fix Needed**: Use Inter font or create new token

---

### ✅ OK: Font Size
```css
font-size: var(--fontsize-lg);  /* 16px ✅ CORRECT */
```
**Result**: Matches Figma spec

---

### ❌ CRITICAL: Line Height
```css
line-height: var(--lineheight-lg);  /* 24px ❌ WRONG */
```
**Figma Spec**: normal (browser default ~1.2x font size)  
**Current**: 24px (1.5x font size)  
**Issue**: Text has excessive vertical spacing  
**Fix Needed**: Change to `line-height: normal;`

---

### ❌ CRITICAL: Padding
```css
padding: var(--spacing-sm) var(--spacing-md);  /* 8px 12px ❌ WRONG */
```
**Figma Spec**: 12px vertical / 20px horizontal  
**Current**: 8px vertical / 12px horizontal  
**Issue**: Button is too compact  

**Evidence from focused state**:
```css
padding: calc(12px - 2px) calc(20px - 2px);  /* 10px 18px */
```
This reveals what the base padding SHOULD be:
- Vertical: 12px (12 - 2 = 10)
- Horizontal: 20px (20 - 2 = 18)

**Token Problem**: No 20px spacing token exists
- Available: sm=8px, md=12px, lg=16px, xl=24px
- Needed: 20px

**Fix Needed**: Either create 20px token or hardcode value

---

## Visual Impact Summary

**Current button will render as:**
- ❌ Wrong font (Figtree instead of Inter)
- ❌ Too compact (wrong padding)
- ❌ Too much text spacing (line-height too large)
- ✅ Correct corner radius (8px)

**Visual difference from Figma**: SIGNIFICANT

---

## Fixes Required

### Priority: CRITICAL - Must Fix Before Approval

1. **Font Family** (1 line)
   - Change: `var(--fontfamily-body)` → `Inter` or new token
   
2. **Line Height** (1 line)
   - Change: `var(--lineheight-lg)` → `normal`
   
3. **Padding** (1-2 lines)
   - Change: `var(--spacing-sm) var(--spacing-md)` → needs 12px 20px
   - Options: create 20px token, or hardcode with comment

Once these three are fixed, the button will match Figma spec.

---

## Next Step

Ready for engineer to fix these 3 issues, then re-test.
