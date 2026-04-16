import Link from "next/link";
import Anim from "./components/AnimateOnScroll";

const projects = [
    { title: "Gala de l'Excellence", type: "Gala", year: "2024", desc: "600 invités — Grand Palais Éphémère" },
    { title: "Festival Lumières", type: "Festival", year: "2024", desc: "4 000 festivaliers — Paris" },
    { title: "Concert Symphonique", type: "Concert", year: "2023", desc: "Salle Pleyel — 80 musiciens" },
];

const services = [
    { n: "01", title: "Conception & Direction Artistique" },
    { n: "02", title: "Production Technique" },
    { n: "03", title: "Gestion de Projet" },
    { n: "04", title: "Événements Corporate" },
    { n: "05", title: "Galas & Cérémonies" },
    { n: "06", title: "Communication & Presse" },
];

export default function HomePage() {
    return (
        <>
            {/* ─── HERO ─── */}
            <section className="relative min-h-screen flex flex-col justify-end pb-16 px-8 md:px-16 pt-28 overflow-hidden"
                style={{ background: "var(--bg)" }}>

                {/* Background number */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(200px, 30vw, 420px)", fontWeight: 300, color: "rgba(201,165,90,0.04)", lineHeight: 1, letterSpacing: "-0.05em" }}>
                    FP
                </div>

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    {/* Top label */}
                    <p className="h-anim-1 label mb-10">Production Événementielle — Paris</p>

                    {/* Split layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                            <h1
                                className="h-anim-2 text-fg"
                                style={{
                                    fontSize: "clamp(3.5rem, 9vw, 9rem)",
                                    fontWeight: 300,
                                    lineHeight: 0.95,
                                    letterSpacing: "-0.02em",
                                    color: "var(--fg)",
                                }}
                            >
                                Des événements
                                <br />
                                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>qui marquent</em>
                                <br />
                                les esprits.
                            </h1>
                        </div>

                        <div className="lg:col-span-4 lg:pb-3">
                            <p className="h-anim-4 text-sm leading-relaxed mb-8"
                                style={{ color: "var(--fg-muted)", maxWidth: "320px" }}>
                                Fenixa Production conçoit et réalise des événements d&apos;exception —
                                concerts, galas, spectacles, corporate — depuis 2012.
                            </p>
                            <div className="h-anim-5 flex gap-4">
                                <Link href="/projets" className="btn-gold">Nos projets</Link>
                                <Link href="/contact" className="btn-ghost">Contact</Link>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal rule + stats */}
                    <div className="h-anim-3 mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
                        style={{ borderTop: "1px solid var(--border)" }}>
                        {[
                            { n: "150+", l: "Événements" },
                            { n: "12", l: "Années" },
                            { n: "40+", l: "Partenaires" },
                            { n: "15", l: "Villes" },
                        ].map(s => (
                            <div key={s.l}>
                                <p className="font-serif text-3xl md:text-4xl" style={{ color: "var(--gold)", fontWeight: 300 }}>{s.n}</p>
                                <p className="text-xs tracking-[0.18em] uppercase mt-1" style={{ color: "var(--fg-muted)" }}>{s.l}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PROJECTS ─── */}
            <section className="py-24 md:py-32 px-8 md:px-16" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-end justify-between mb-16">
                        <Anim>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl" style={{ color: "var(--fg)" }}>
                                Dernières
                                <br />
                                productions
                            </h2>
                        </Anim>
                        <Anim delay={1}>
                            <Link href="/projets"
                                className="text-xs tracking-[0.15em] uppercase pb-1"
                                style={{ color: "var(--fg-muted)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
                                Tous les projets →
                            </Link>
                        </Anim>
                    </div>

                    {/* Asymmetric grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Large card */}
                        <Anim delay={1} className="md:col-span-7">
                            <Link href="/projets" className="pcard group block">
                                <div className="pcard-img mb-4" style={{ aspectRatio: "16/10" }}>
                                    <div className="ph ph-dark w-full h-full">
                                        <span className="font-serif text-8xl">{projects[0].title[0]}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="label">{projects[0].type}</span>
                                    <span style={{ color: "var(--border-strong)" }}>·</span>
                                    <span className="text-xs tracking-widest" style={{ color: "var(--fg-muted)" }}>{projects[0].year}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl group-hover:opacity-50 transition-opacity" style={{ fontWeight: 300 }}>
                                    {projects[0].title}
                                </h3>
                                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>{projects[0].desc}</p>
                            </Link>
                        </Anim>

                        {/* Small cards stacked */}
                        <div className="md:col-span-5 flex flex-col gap-6">
                            {projects.slice(1).map((p, i) => (
                                <Anim key={p.title} delay={(i + 2) as 2 | 3}>
                                    <Link href="/projets" className="pcard group flex gap-5 items-start">
                                        <div className="pcard-img shrink-0" style={{ width: "120px", height: "80px" }}>
                                            <div className="ph ph-dark w-full h-full">
                                                <span className="font-serif text-3xl">{p.title[0]}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="label text-xs">{p.type}</span>
                                                <span style={{ color: "var(--border-strong)" }}>·</span>
                                                <span className="text-xs tracking-widest" style={{ color: "var(--fg-muted)" }}>{p.year}</span>
                                            </div>
                                            <h3 className="text-lg group-hover:opacity-50 transition-opacity" style={{ fontWeight: 300 }}>
                                                {p.title}
                                            </h3>
                                            <p className="text-xs mt-1" style={{ color: "var(--fg-muted)" }}>{p.desc}</p>
                                        </div>
                                    </Link>
                                </Anim>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section className="py-24 md:py-32 px-8 md:px-16" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4">
                        <Anim>
                            <p className="label mb-4">Ce que nous faisons</p>
                            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 300 }}>
                                Six pôles
                                <br />
                                d&apos;expertise
                            </h2>
                            <div className="g-line mb-6" />
                            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
                                De la première idée jusqu&apos;au dernier applaudissement,
                                nous prenons en charge chaque dimension de votre événement.
                            </p>
                            <Link href="/services" className="btn-ghost">Voir les services</Link>
                        </Anim>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                            {services.map((s, i) => (
                                <Anim key={s.n} delay={((i % 2) + 1) as 1 | 2}>
                                    <div
                                        className="flex gap-5 items-start py-7 px-6"
                                        style={{ borderBottom: "1px solid var(--border)", borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none" }}
                                    >
                                        <span className="font-serif text-2xl shrink-0" style={{ color: "var(--gold)", opacity: 0.5, fontWeight: 300 }}>{s.n}</span>
                                        <div>
                                            <p className="text-sm font-medium leading-snug" style={{ color: "var(--fg)" }}>{s.title}</p>
                                        </div>
                                    </div>
                                </Anim>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── ABOUT STRIP ─── */}
            <section className="py-24 md:py-32 px-8 md:px-16" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <Anim>
                            <div className="ph-dark aspect-[3/2] w-full" style={{ background: "var(--bg-3)" }}>
                                <span className="font-serif text-9xl" style={{ color: "rgba(201,165,90,0.06)" }}>FP</span>
                            </div>
                        </Anim>
                        <div>
                            <Anim delay={1}><p className="label mb-4">Notre histoire</p></Anim>
                            <Anim delay={2}>
                                <h2 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 300 }}>
                                    12 ans de passion
                                    <br />
                                    pour l&apos;événement
                                </h2>
                            </Anim>
                            <Anim delay={3}>
                                <div className="g-line mb-6" />
                                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
                                    Fondée à Paris en 2012, Fenixa Production est née d&apos;une conviction :
                                    chaque événement mérite d&apos;être une expérience mémorable.
                                    Notre équipe de 15 permanents et 80 prestataires partenaires
                                    produit plus de 30 événements par an.
                                </p>
                                <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
                                    De Paris à Lyon, de Bordeaux à Nice, nous intervenons partout en France
                                    avec la même rigueur et la même passion du détail.
                                </p>
                                <Link href="/a-propos" className="btn-ghost">Découvrir l&apos;agence</Link>
                            </Anim>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="px-8 md:px-16 py-24 md:py-32"
                style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <Anim className="lg:col-span-8">
                            <p className="label mb-4">Travaillons ensemble</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 300 }}>
                                Votre prochain événement<br />
                                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>commence ici.</em>
                            </h2>
                        </Anim>
                        <Anim delay={2} className="lg:col-span-4 lg:text-right">
                            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
                                Partagez votre vision.
                                <br />
                                Notre équipe vous répond sous 48h.
                            </p>
                            <Link href="/contact" className="btn-gold">Démarrer un projet</Link>
                        </Anim>
                    </div>
                </div>
            </section>
        </>
    );
}
