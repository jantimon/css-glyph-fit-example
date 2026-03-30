const fontkit = await import("fontkit");
const { join } = await import("path");
const openFontKit = fontkit.openSync ?? fontkit.default?.openSync;
export const openSync = (path: string) => openFontKit?.(join(process.cwd(), path));