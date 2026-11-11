type GeologyPlateProps = {
  className?: string;
};

/**
 * Authored geological cross-section: ground line, surface plant, strata
 * contours, a borehole and its target horizon. Decorative only — always
 * captioned when it could be read as site data.
 */
export default function GeologyPlate({ className }: GeologyPlateProps) {
  return (
    <svg
      viewBox="0 0 640 480"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <g stroke="var(--paper)" strokeWidth="1.2">
        <path d="M0 186C130 174 280 198 430 182S590 172 640 180" opacity="0.24" />
        <path d="M0 232C150 218 300 244 450 228S580 220 640 226" opacity="0.3" />
        <path d="M0 324C160 310 320 336 470 320S590 312 640 318" opacity="0.26" />
        <path d="M0 372C120 358 290 386 450 370S580 362 640 368" opacity="0.26" />
        <path d="M0 424C140 410 300 438 470 422S590 414 640 420" opacity="0.2" />
      </g>
      <path
        d="M0 276C110 262 270 290 420 274S570 262 640 270"
        stroke="var(--seam-bright)"
        strokeWidth="1.5"
        opacity="0.6"
      />

      <g stroke="var(--paper)" strokeWidth="1.4" opacity="0.56">
        <path d="M96 138v-22h44v22" />
        <path d="M152 138v-14h30v14" />
        <circle cx="212" cy="124" r="11" />
        <path d="M232 138v-30h7v30" />
        <path d="M418 138l26-22" />
        <path d="M444 138v-10h9v10" />
        <path d="M496 138v-16h36v16" />
      </g>

      <g stroke="var(--paper)" strokeWidth="1.5" opacity="0.68">
        <path d="M272 138L296 56l24 82" />
        <path d="M281 106h30" />
        <path d="M296 56v-8" />
        <circle cx="296" cy="44" r="5" />
      </g>

      <path
        d="M0 140C110 132 250 148 370 138S560 128 640 136"
        stroke="var(--paper)"
        strokeWidth="1.5"
        opacity="0.6"
      />

      <g stroke="var(--paper)" strokeWidth="1.1" opacity="0.38">
        <path d="M296 186h12" />
        <path d="M296 232h12" />
        <path d="M296 324h12" />
        <path d="M296 372h12" />
      </g>
      <path
        d="M296 138V414"
        stroke="var(--paper)"
        strokeWidth="1.3"
        opacity="0.6"
      />

      <g stroke="var(--paper)" strokeWidth="1.3" opacity="0.4">
        <path d="M140 276q36-12 72 0-36 12-72 0z" />
        <path d="M378 274q30-10 60 0-30 10-60 0z" />
      </g>

      <circle
        cx="296"
        cy="414"
        r="6"
        stroke="var(--seam-bright)"
        strokeWidth="1.5"
        opacity="0.9"
      />
    </svg>
  );
}
