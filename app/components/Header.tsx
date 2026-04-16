"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
    { href: "/projets", label: "Projets" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À propos" },
];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <>
            <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
                <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto">
                    <Link href="/" className="logo" onClick={() => setOpen(false)}>
                        Fenixa<span className="logo-dot">.</span>
                    </Link>

                    <nav className="desk flex items-center gap-8">
                        {links.map(l => (
                            <Link key={l.href} href={l.href} className={pathname.startsWith(l.href) ? "on" : ""}>
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="nav-contact-wrap">
                        <Link href="/contact" className="nav-contact">Contact</Link>
                    </div>

                    <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
                        <span className={`s1 ${open ? "open" : ""}`} />
                        <span className={`s2 ${open ? "open" : ""}`} />
                        <span className={`s3 ${open ? "open" : ""}`} />
                    </button>
                </div>
            </header>

            <div className={`mob-menu ${open ? "open" : ""}`}>
                <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
                {links.map(l => (
                    <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)} style={{ color: "var(--gold)" }}>Contact</Link>
            </div>
        </>
    );
}
