import { openSync } from "./fontkit.ts";

const font = openSync("public/fonts/Inter-Regular.woff2");
const headlines = ["Welcome to Yak", "Auto Text Width", "Fontkit meets CSS"] as const;

const measure = (text: string) =>
  font && "layout" in font ? font.layout(text).advanceWidth / font.unitsPerEm : 0;

/** Calculated at build time */
export const textWidths = Object.fromEntries(
  headlines.map((text) => [text, measure(text)] as const)
);
