"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/drivers", label: "Drivers" },
  { href: "/riders", label: "Riders" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-frame">
        <Link href="/" className="logo-lockup" aria-label="CarryOn home">
          <img
            className="brand-logo"
            src="/assets/carryon-logo.png"
            width={141}
            height={38}
            alt="CarryOn"
          />
        </Link>
        <nav className="header-nav" aria-label="Primary">
          <ul className="nav-main">
            {NAV.map(({ href, label }) => {
              const legalPaths = ["/terms", "/privacy"];
              const active =
                href === "/" ? pathname === "/" :
                href === "/about" ? pathname === href || pathname.startsWith(`${href}/`) || legalPaths.includes(pathname) :
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={active ? "is-active" : undefined}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
