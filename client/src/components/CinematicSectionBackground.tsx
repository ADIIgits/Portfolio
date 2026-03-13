/**
 * CinematicSectionBackground
 *
 * Drops a right-side portrait image behind any section, blending it into
 * the page background with the same multi-stop gradient used in the hero.
 *
 * Usage:
 *   <section className="relative overflow-hidden ...">
 *     <CinematicSectionBackground imageUrl="https://..." />
 *     ... your section content ...
 *   </section>
 *
 * Props:
 *   imageUrl   — image URL (renders nothing when falsy)
 *   position   — CSS object-position, default "right center"
 *   opacity    — image opacity 0–1, default 0.55
 *   solidEnd   — % where the solid bg ends and the fade begins, default 38
 *   fadeEnd    — % where the image is fully visible, default 72
 */
interface Props {
  imageUrl: string;
  position?: string;
  opacity?: number;
  solidEnd?: number;
  fadeEnd?: number;
}

export function CinematicSectionBackground({
  imageUrl,
  position = "right center",
  opacity = 0.55,
  solidEnd = 38,
  fadeEnd = 72,
}: Props) {
  if (!imageUrl) return null;

  // Five-stop cinematic gradient using the theme's background CSS variable.
  // All stops sit between solidEnd and fadeEnd so the image appears gently.
  const s = solidEnd;
  const f = fadeEnd;
  const m1 = s + (f - s) * 0.22;  // 88 % opacity
  const m2 = s + (f - s) * 0.44;  // 60 % opacity
  const m3 = s + (f - s) * 0.70;  // 28 % opacity
  const m4 = s + (f - s) * 0.88;  // 08 % opacity

  const gradient = `linear-gradient(to right,
    hsl(var(--background)) 0%,
    hsl(var(--background)) ${s}%,
    hsl(var(--background) / 0.88) ${m1.toFixed(1)}%,
    hsl(var(--background) / 0.60) ${m2.toFixed(1)}%,
    hsl(var(--background) / 0.28) ${m3.toFixed(1)}%,
    hsl(var(--background) / 0.08) ${m4.toFixed(1)}%,
    transparent ${f}%
  )`;

  const topFade = `linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 18%)`;
  const bottomFade = `linear-gradient(to top, hsl(var(--background)) 0%, transparent 18%)`;

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Portrait image */}
      <img
        src={imageUrl}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: position, opacity }}
      />

      {/* Left-to-right solid → transparent gradient */}
      <div className="absolute inset-0" style={{ background: gradient }} />

      {/* Top section-edge fade */}
      <div className="absolute inset-x-0 top-0 h-28" style={{ background: topFade }} />

      {/* Bottom section-edge fade */}
      <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: bottomFade }} />
    </div>
  );
}
