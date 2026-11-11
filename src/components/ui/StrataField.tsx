type StrataFieldProps = {
  className?: string;
  /** `field`: wide hero plate. `core`: tighter crop for inline panels. */
  variant?: "field" | "core";
  /** `ink`: strokes for light bands. `paper`: strokes for dark bands. */
  tone?: "ink" | "paper";
};

type Seam = {
  d: string;
  w: number;
  o: number;
  seam?: boolean;
};

const SEAMS: Seam[] = [
  { d: "M-20 30C120-10 260 70 420 42S720-20 840 30", w: 1.4, o: 0.18 },
  { d: "M-20 90C160 50 320 130 500 96S760 60 840 100", w: 2.6, o: 0.9, seam: true },
  { d: "M-20 150C120 118 300 190 480 160S740 130 840 165", w: 1.6, o: 0.3 },
  { d: "M-20 210C180 170 340 250 520 215S780 190 840 220", w: 1.4, o: 0.22 },
  { d: "M-20 265C140 235 320 300 500 270S760 245 840 275", w: 1.8, o: 0.85, seam: true },
  { d: "M-20 320C160 285 340 355 500 325S780 300 840 330", w: 1.8, o: 0.34 },
  { d: "M-20 375C120 345 320 410 480 380S760 355 840 385", w: 1.5, o: 0.26 },
  { d: "M-20 430C180 400 340 465 520 435S780 410 840 440", w: 2.2, o: 0.9, seam: true },
  { d: "M-20 470C140 445 340 500 500 470S780 450 840 480", w: 1.4, o: 0.18 },
];

export default function StrataField({
  className,
  variant = "field",
  tone = "ink",
}: StrataFieldProps) {
  const dark = tone === "paper";

  return (
    <svg
      viewBox={variant === "field" ? "0 0 820 480" : "160 100 520 400"}
      preserveAspectRatio={variant === "field" ? "xMidYMax slice" : "xMidYMid slice"}
      aria-hidden="true"
      fill="none"
      className={`overflow-hidden ${className ?? ""}`}
    >
      {SEAMS.map((seam, i) => (
        <path
          key={seam.d}
          d={seam.d}
          stroke={
            dark
              ? seam.seam
                ? "var(--seam-bright)"
                : "var(--paper)"
              : seam.seam
                ? "var(--seam)"
                : "var(--ink)"
          }
          strokeWidth={seam.w}
          strokeLinecap="round"
          opacity={dark ? seam.o * 0.3 : seam.o}
          pathLength={1}
          className="strata-draw"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </svg>
  );
}
