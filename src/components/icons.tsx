import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg(props: IconProps & { children: React.ReactNode }) {
  const { children, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <path d="M4 5h2l1.2 9.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L20 8H7" />
    </Svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 13c6-1 9-8 14-9-1 6-7 11-13 12" />
      <path d="M8 16c1.4-2.2 3.6-4 6-5" />
    </Svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.4 7 8.7 4.2-1.3 7-4.5 7-8.7V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 3h6" />
      <path d="M10 3v5.2L6.4 16A4 4 0 0 0 10 21h4a4 4 0 0 0 3.6-5L14 8.2V3" />
    </Svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M14 19a4.4 4.4 0 0 1 6.5 0" />
    </Svg>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m3 8 9-4 9 4-9 4-9-4Z" />
      <path d="M3 8v8l9 4 9-4V8" />
      <path d="M12 12v8" />
    </Svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 7h11v8H3z" />
      <path d="M14 10h4l3 3v2h-7" />
      <circle cx="7" cy="17" r="1.6" />
      <circle cx="17" cy="17" r="1.6" />
    </Svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9Z" />
    </Svg>
  );
}

export function VisitIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M3 12h18" />
      <path d="M12 4a14 14 0 0 1 0 16" />
      <path d="M12 4a14 14 0 0 0 0 16" />
    </Svg>
  );
}

export function BoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.2 9.2a2.2 2.2 0 1 1 1.6-3.7 2.2 2.2 0 1 1 3.7 1.6L16.8 14.8a2.2 2.2 0 1 1-1.6 3.7 2.2 2.2 0 1 1-3.7-1.6Z" />
    </Svg>
  );
}

export function DeliveryIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 13h11V6H3z" />
      <path d="M14 9h4l3 3v3h-7" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="17.5" cy="17.5" r="1.5" />
    </Svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </Svg>
  );
}

export function ReturnIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12a8 8 0 1 0 2.2-5.5" />
      <path d="M4 5v5h5" />
    </Svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 13v-2a7 7 0 0 1 14 0v2" />
      <path d="M5 13h2.4A1.6 1.6 0 0 1 9 14.6V17a1.6 1.6 0 0 1-1.6 1.6H6A2 2 0 0 1 4 16.6V15a2 2 0 0 1 1-1.7Z" />
      <path d="M19 13h-2.4A1.6 1.6 0 0 0 15 14.6V17a1.6 1.6 0 0 0 1.6 1.6H18A2 2 0 0 0 20 16.6V15a2 2 0 0 0-1-1.7Z" />
    </Svg>
  );
}

export function BowlIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 11h16c-.6 5-4.4 8-8 8s-7.4-3-8-8Z" />
      <path d="M8 8c.6-1.5 2-2.5 4-2.5S15.4 6.5 16 8" />
    </Svg>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 19h14" />
      <path d="M7 16c3-6 6-8 10-10" />
      <path d="M13 6h4v4" />
    </Svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 4h3l1 4-2 1a11 11 0 0 0 6 6l1-2 4 1v3c0 1-1 2-2 2A15 15 0 0 1 5 6c0-1 1-2 2-2Z" />
    </Svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="m4 8 8 6 8-6" />
    </Svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </Svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z" />
    </Svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 5h4l4.2 5.6L16.8 5H20l-6.4 8.2L20 21h-4l-4.6-6.2L7.2 21H4l6.8-8.6Z" />
    </Svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 8.2A3 3 0 0 1 7.2 6h9.6a3 3 0 0 1 2.7 2.2C20 9.6 20 12 20 12s0 2.4-.5 3.8A3 3 0 0 1 16.8 18H7.2a3 3 0 0 1-2.7-2.2C4 14.4 4 12 4 12s0-2.4.5-3.8Z" />
      <path d="m11 9.8 5 2.2-5 2.2z" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m9 6 6 6-6 6" />
    </Svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function StarIcon({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m12 3.6 2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 15.6 7.4 18l.9-5.2-3.8-3.7 5.2-.8Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </Svg>
  );
}

/** Official-style WhatsApp glyph (filled). */
export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
