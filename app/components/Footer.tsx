import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 pb-12"
                    style={{ borderBottom: "1px solid rgba(240,237,232,0.08)" }}>
                    <div className="max-w-xs">
                        <p className="font-serif text-2xl tracking-[0.25em] uppercase mb-4"
                            style={{ color: "var(--fg)", fontWeight: 300 }}>
                            Fenixa<span style={{ color: "var(--gold)" }}>.</span>
                        </p>
                        <p className="text-sm leading-relaxed">
                            Production d&apos;événements d&apos;exception.<br />
                            Paris & toute la France.
                        </p>
                    </div>

                    <div className="flex gap-16 md:gap-20">
                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "var(--fg-subtle)" }}>
                                Navigation
                            </p>
                            <div className="flex flex-col gap-3">
                                {[
                                    { href: "/projets", label: "Projets" },
                                    { href: "/services", label: "Services" },
                                    { href: "/a-propos", label: "À propos" },
                                    { href: "/contact", label: "Contact" },
                                ].map(l => (
                                    <Link key={l.href} href={l.href} className="text-sm">{l.label}</Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "var(--fg-subtle)" }}>
                                Contact
                            </p>
                            <div className="flex flex-col gap-3 text-sm">
                                <a href="mailto:contact@fenixaproduction.fr">contact@fenixaproduction.fr</a>
                                <a href="tel:+33600000000">+33 6 00 00 00 00</a>
                                <a href="#">Instagram</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs"
                    style={{ color: "var(--fg-subtle)" }}>
                    <p>© {new Date().getFullYear()} Fenixa Production. Tous droits réservés.</p>
                    <p>
                        Site réalisé par{" "}
                        <a href="https://vibewebagency.fr" target="_blank" rel="noopener noreferrer">
                            Vibe Web Agency
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
