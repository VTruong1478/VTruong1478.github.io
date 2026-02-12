import { useId } from "react";

/**
 * Renders raw SVG string as inline SVG with unique IDs (avoids duplicate id clashes).
 * Use for SVG assets that contain pattern/image refs.
 */
export default function InlineSvgIcon({
  rawSvg,
  className = "w-8 h-8",
  ...rest
}) {
  const uid = useId().replace(/:/g, "");
  const idMatches = [...rawSvg.matchAll(/\bid="([^"]+)"/g)];
  const seen = new Set();
  const idMap = {};
  idMatches.forEach(([, id]) => {
    if (!seen.has(id)) {
      seen.add(id);
      idMap[id] = `${id}-${uid}`;
    }
  });
  let out = rawSvg;
  Object.entries(idMap).forEach(([oldId, newId]) => {
    const re = new RegExp(oldId.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    out = out.replace(re, newId);
  });
  // Ensure the injected <svg> is sized by the wrapper and avoids baseline gaps.
  // We force the SVG to be block-level and 100% x 100% so the wrapper's `className`
  // is the single source of truth for rendered size (e.g., 32x32 in the tray).
  const svgClass = className ? `class="${className} block"` : 'class="block"';
  out = out.replace(/<svg\s/, `<svg ${svgClass} `);
  out = out
    .replace(/\bwidth="[^"]+"/, 'width="100%"')
    .replace(/\bheight="[^"]+"/, 'height="100%"');

  // If this SVG contains an embedded raster <image>, prefer crisp rendering.
  // (These tray icons are SVG wrappers around a PNG; smoothing can look blurry on hi-DPI.)
  if (/<image\b/.test(out) && !/\bimage-rendering=/.test(out)) {
    out = out.replace(/<image\b/, '<image image-rendering="pixelated"');
  }

  return (
    <span
      className={`inline-block leading-none ${className}`}
      dangerouslySetInnerHTML={{ __html: out }}
      {...rest}
    />
  );
}
