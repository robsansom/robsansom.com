import { productPath } from '../paths';
/** Intrinsic pixel dimensions of app screenshots (public/images). Keep in
 *  sync with the actual files — wrong ratios stretch the device frames.
 *
 *  These are the 2026-09-18 App Store captures (en-US, iPhone 6.9"),
 *  resized to 900px wide. The previous site's `screen-session.png` is
 *  deliberately absent: it displayed vitamin-D estimates the app does not
 *  make (see HANDOFF.md). */
export const screenDims: Record<string, { w: number; h: number }> = {
  [productPath('/images/app/your-day.webp')]: { w: 900, h: 1956 },
  [productPath('/images/app/your-sun.webp')]: { w: 900, h: 1956 },
  [productPath('/images/app/you.webp')]: { w: 900, h: 1956 },
  [productPath('/images/app/uv-index.webp')]: { w: 900, h: 1956 },
  [productPath('/images/app/live-outing.webp')]: { w: 900, h: 1956 },
};

export function dimsFor(src: string): { w: number; h: number } {
  return screenDims[src] ?? { w: 900, h: 1956 };
}
