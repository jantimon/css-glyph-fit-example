# css-glyph-fit

Scalable headings that perfectly fill the viewport width — computed from actual font glyph metrics at build time, with zero runtime JavaScript.

Inspired by [Devon Govett's technique](https://x.com/devongovett/status/2038312787362087055) used on the React Aria website, where he used [fontkit](https://github.com/foliojs/fontkit) to measure heading widths in "em" units and CSS `clamp()` to make them scale fluidly.

1. A [`.yak.ts` token file](components/typography/typography.yak.ts) runs at build time via [next-yak](https://yak.js.org)'s evaluator (full Node.js context)
2. [fontkit](https://github.com/foliojs/fontkit) opens the actual font file and measures each headline's glyph advance width in em units
3. The measured ratios are inlined directly into CSS `clamp()` formulas

**`.yak.ts` files run at build time so the output is static CSS with no runtime overhead**

```css
/* Generated output — real numbers baked into the stylesheet */
font-size: clamp(24px, 13.1797vw - 4.21752px, 120px);
```

The formula `(100vw - padding) / ratio` gives the exact font size where the text fills the viewport. `clamp()` keeps it within min/max bounds.

- [Next.js](https://nextjs.org) 16 (Pages Router, static export)
- [next-yak](https://yak.js.org) — zero-runtime CSS-in-JS with build-time evaluation
- [fontkit](https://github.com/foliojs/fontkit) — font parsing and glyph measurement


MIT
