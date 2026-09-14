# Button Component — QA Findings & Corrections

**Test Date**: 2026-09-13  
**Status**: ❌ CRITICAL ISSUES FOUND — Awaiting Fixes

---

## Issues Found During Detailed Comparison

### 1. ❌ Border Radius Token Mismatch (FIXED)
**Issue**: Used `var(--borderradius-md)` = 16px instead of correct value  
**Figma Spec**: 8px  
**Correct Token**: `var(--borderradius-sm)` = 8px  
**Status**: ✅ FIXED in commit 7c75b9b

**Learning**: Always verify token VALUES match design spec, not just assume the naming tier (sm/md/lg) corresponds to the design's visual size.

---

### 2. ❌ Font Family Mismatch (NOT FIXED)
**Figma Spec**: Inter font (explicitly specified)  
**CSS Current**: `var(--fontfamily-body)` = Figtree  
**Impact**: Text renders differently - different metrics, kerning, visual weight  
**Status**: 🔴 REQUIRES FIX

---

### 3. ❌ Padding Mismatch (NOT FIXED)
**Figma Spec**: `12px 20px` (vertical horizontal)  
**CSS Current**: `var(--spacing-sm) var(--spacing-md)` = `8px 12px` (WRONG)  
**Actual Needed**: 12px vertical, 20px horizontal  
**Problem**: No 20px spacing token exists; will need hardcoded value  
**Status**: 🔴 REQUIRES FIX

---

### 4. ❌ Line Height Mismatch (NOT FIXED)
**Figma Spec**: `line-height: normal` (tight, natural spacing)  
**CSS Current**: `var(--lineheight-lg)` = 24px (too much space)  
**Impact**: Button text has excessive vertical spacing  
**Status**: 🔴 REQUIRES FIX

---

## QA Process Improvements

To prevent this from happening again:

### Before Approving a Component:
1. ✅ Get Figma design context (get_design_context)
2. ✅ Get Figma screenshot for visual reference
3. ✅ List every token VALUE from generated CSS file
4. ✅ Match design SPEC against token VALUES (not just names)
5. ✅ For each token used, verify: actual-value = expected-value
6. ✅ Document all mismatches found

### Checklist:
- [ ] Font family: Verify actual font name matches design
- [ ] Font size: Verify px value matches design
- [ ] Line height: Check if should be "normal" or specific value
- [ ] Padding/margins: Check BOTH horizontal AND vertical values
- [ ] Border radius: Verify pixel value, not just token tier name
- [ ] Colors: Verify hex value from token matches design
- [ ] All hardcoded values: Have comment explaining why hardcoded

---

## Next Steps

**Required Fixes Before QA Approval**:

1. Fix font family to Inter
2. Fix padding to 12px 20px
3. Fix line height to normal

Then re-run full QA test.
