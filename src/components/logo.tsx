import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Pet Delight BD home">
      <span className="brand-mark" aria-hidden="true">
        <Image
          src="/images/logo.png"
          alt=""
          width={96}
          height={96}
          sizes="48px"
          priority
        />
      </span>
      <span className="brand-word">
        <strong>Pet</strong>Delight
      </span>
    </Link>
  );
}
