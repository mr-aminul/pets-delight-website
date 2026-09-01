import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  /** Pastel fill for the organic cloud behind the illustration */
  blob?: string;
};

function CloudBlob({ fill }: { fill: string }) {
  return (
    <path
      d="M22 54c-8 1-14-5-14-12 0-6 4-11 10-12 1-9 9-15 18-15 7 0 13 3 16 9 3-2 7-2 10 0 5 3 7 9 5 14 6 1 10 6 9 12-1 7-8 11-15 10H28c-2 0-4 0-6-1Z"
      fill={fill}
    />
  );
}

function Frame({
  children,
  blob = "#E8F0EC",
  ...props
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <CloudBlob fill={blob} />
      {children}
    </svg>
  );
}

/** Dry food bag with paw */
export function DryFoodIcon({ blob = "#D8EDE4", ...props }: IconProps) {
  return (
    <Frame blob={blob} {...props}>
      <path
        d="M34 28h28l5 9v38c0 3.2-2.6 5.8-5.8 5.8H34.8c-3.2 0-5.8-2.6-5.8-5.8V37l5-9Z"
        fill="#4FA88A"
        stroke="#1B4332"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M34 37h28" stroke="#1B4332" strokeWidth="2.2" />
      <path d="M38 28l2-6h16l2 6" stroke="#1B4332" strokeWidth="2" strokeLinejoin="round" fill="#FEFAE0" />
      <circle cx="48" cy="56" r="10" fill="#FEFAE0" stroke="#1B4332" strokeWidth="1.8" />
      <ellipse cx="48" cy="59.5" rx="3.4" ry="4" fill="#1B4332" />
      <ellipse cx="41.8" cy="52.2" rx="2.3" ry="2.9" fill="#1B4332" transform="rotate(-22 41.8 52.2)" />
      <ellipse cx="54.2" cy="52.2" rx="2.3" ry="2.9" fill="#1B4332" transform="rotate(22 54.2 52.2)" />
      <ellipse cx="44" cy="47.8" rx="1.9" ry="2.5" fill="#1B4332" />
      <ellipse cx="52" cy="47.8" rx="1.9" ry="2.5" fill="#1B4332" />
    </Frame>
  );
}

/** Food bowl */
export function BowlIconCat({ blob = "#DCEAF2", ...props }: IconProps) {
  return (
    <Frame blob={blob} {...props}>
      <ellipse cx="48" cy="66" rx="26" ry="8" fill="#B8D9C8" stroke="#1B4332" strokeWidth="2" />
      <path
        d="M22 52c2 16 13 24 26 24s24-8 26-24"
        fill="#5CB89A"
        stroke="#1B4332"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <ellipse cx="48" cy="52" rx="26" ry="10" fill="#FEFAE0" stroke="#1B4332" strokeWidth="2.2" />
      <ellipse cx="48" cy="52" rx="15" ry="5" fill="#E8A87C" opacity="0.9" />
      <path d="M34 36c5-8 14-10 24-5" stroke="#FF6B3D" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="58" cy="30" r="3.2" fill="#FF6B3D" />
    </Frame>
  );
}

/** Pouch / treat pack */
export function PouchIcon({ blob = "#F8E0D4", ...props }: IconProps) {
  return (
    <Frame blob={blob} {...props}>
      <path
        d="M32 34h32v8l-2.5 36c0 2.8-2.3 5-5.2 5H39.7c-2.9 0-5.2-2.2-5.2-5L32 42v-8Z"
        fill="#FF8A5B"
        stroke="#1B4332"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M32 42h32" stroke="#1B4332" strokeWidth="2" />
      <rect x="38" y="26" width="20" height="10" rx="2.5" fill="#FEFAE0" stroke="#1B4332" strokeWidth="2" />
      <path
        d="M42 56c0-4.5 3.5-8 8-8s8 3.5 8 8c0 5.5-4.5 10-8 13.5-3.5-3.5-8-8-8-13.5Z"
        fill="#FF6B3D"
        stroke="#1B4332"
        strokeWidth="1.8"
      />
      <circle cx="50" cy="54" r="2" fill="#FEFAE0" />
    </Frame>
  );
}

/** Canned food */
export function CanIcon({ blob = "#D9EBF3", ...props }: IconProps) {
  return (
    <Frame blob={blob} {...props}>
      <ellipse cx="48" cy="30" rx="20" ry="8" fill="#7EB8D4" stroke="#1B4332" strokeWidth="2.2" />
      <path
        d="M28 30v34c0 4.5 9 9 20 9s20-4.5 20-9V30"
        fill="#5BA8C8"
        stroke="#1B4332"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <ellipse cx="48" cy="30" rx="20" ry="8" fill="#C5E4F0" stroke="#1B4332" strokeWidth="2.2" />
      <path d="M32 48h32M32 56h32" stroke="#1B4332" strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
      <circle cx="48" cy="52" r="7" fill="#FEFAE0" stroke="#1B4332" strokeWidth="1.7" />
      <path d="M45 52h6M48 49v6" stroke="#1B4332" strokeWidth="1.5" strokeLinecap="round" />
    </Frame>
  );
}

/** Litter box / scoop */
export function LitterIcon({ blob = "#E4F0E8", ...props }: IconProps) {
  return (
    <Frame blob={blob} {...props}>
      <path
        d="M22 58h52l-4.5 16c-1 3.2-3.8 5.2-7.2 5.2H33.7c-3.4 0-6.2-2-7.2-5.2L22 58Z"
        fill="#E8C97A"
        stroke="#1B4332"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M26 58c2.5-12 10-20 22-20s19.5 8 22 20"
        fill="#FEFAE0"
        stroke="#1B4332"
        strokeWidth="2.2"
      />
      <path
        d="M56 28l12 5-7 22-9.5-2.5 4.5-24.5Z"
        fill="#5BA88A"
        stroke="#1B4332"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="66" cy="30" r="4.5" fill="#FF6B3D" stroke="#1B4332" strokeWidth="1.6" />
    </Frame>
  );
}

/** Collar / accessories */
export function AccessoriesIcon({ blob = "#F3D9D0", ...props }: IconProps) {
  return (
    <Frame blob={blob} {...props}>
      <path
        d="M24 48c0-13 10.7-24 24-24s24 11 24 24"
        fill="none"
        stroke="#E07A55"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M24 48c0-13 10.7-24 24-24s24 11 24 24"
        fill="none"
        stroke="#1B4332"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect x="39" y="22" width="18" height="14" rx="3" fill="#F0B090" stroke="#1B4332" strokeWidth="2" />
      <circle cx="48" cy="29" r="2.8" fill="#1B4332" />
      <circle cx="48" cy="29" r="1.2" fill="#FEFAE0" />
      <path
        d="M48 36v10c0 2 1.5 3.5 3.5 3.5h2"
        stroke="#1B4332"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="52" y="46" width="14" height="10" rx="2" fill="#FF6B3D" stroke="#1B4332" strokeWidth="1.8" />
      <circle cx="59" cy="51" r="1.6" fill="#FEFAE0" />
    </Frame>
  );
}
