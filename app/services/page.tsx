import type { Metadata } from "next";
import Link from "next/link";
import Anim from "../components/AnimateOnScroll";

export const metadata: Metadata = {
    title: "Services",
    description: "Fenixa Production vous accompagne dans la conception, la production technique et la coordination de vos événements.",
};

const services = [
    {
        n: "01",
        title: "Conception & Direction Artistique",
        desc: "Chaque événement naît d'une idée forte. Nous travaillons avec vous pour définir une vision, un thème, une identité. Notre direction artistique garantit la cohérence de chaque instant, du carton d'invitation au dernier rappel.",
        items: ["Conception du concept", "Direction artistique", "Scénographie & décors", "Identité visuelle", "Programmation artistique"],
    },
    {
        n: "02",
        title: "Production Technique",
        desc: "Son, lumière, vidéo, scène — notre équipe technique maîtrise tous les aspects de la production. Nous travaillons avec les meilleurs prestataires pour une exécution sans faille, quelle que soit l'échelle du projet.",
        items: ["Son & acoustique", "Éclairage scénique", "Projection vidéo & LED", "Construction scénique", "Effets spéciaux"],
    },
    {
        n: "03",
        title: "Gestion de Projet",
        desc: "La réussite d'un événement repose sur une organisation minutieuse. Nous gérons chaque étape : planification, budget, coordination des équipes et des prestataires, gestion des imprévus.",
        items: ["Planning & rétroplanning", "Gestion budgétaire", "Coordination équipes", "Relations prestataires", "Gestion logistique"],
    },
    {
        n: "04",
        title: "Événements Corporate",
        desc: "Conférences, séminaires, soirées d'entreprise, lancements de produits — nous créons des expériences sur mesure qui reflètent vos valeurs et renforcent vos messages auprès de vos collaborateurs et partenaires.",
        items: ["Conférences & séminaires", "Soirées d'entreprise", "Lancements de produits", "Team buildings", "Voyages incentive"],
    },
    {
        n: "05",
        title: "Galas & Cérémonies",
        desc: "Remises de prix, galas caritatifs, cérémonies officielles — nous créons des soirées d'exception. Un soin particulier est apporté au protocole, à la mise en scène et au moindre détail de l'expérience.",
        items: ["Galas & dîners de prestige", "Remises de prix", "Galas caritatifs", "Cérémonies officielles", "Soirées de gala"],
    },
    {
        n: "06",
        title: "Communication & Presse",
        desc: "Nous maximisons la visibilité de votre événement avec une stratégie de communication adaptée : relations presse, réseaux sociaux, captation et diffusion.",
        items: ["Relations presse & médias", "Contenus digitaux", "Réseaux sociaux", "Captation photo & vidéo", "Streaming live"],
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-36 pb-16 px-8 md:px-16" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <Anim><p className="label mb-4">Ce que nous faisons</p></Anim>
                        <Anim delay={1}>
                            <h1 className="text-5xl md:text-7xl" style={{ fontWeight: 300, color: "var(--fg)" }}>
                                Nos Services
                            </h1>
                        </Anim>
                    </div>
                    <Anim delay={2}>
                        <div className="g-line mb-4" />
                        <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            Six pôles d&apos;expertise pour une prise en charge complète de votre événement,
                            de la première idée au dernier applaudissement.
                        </p>
                    </Anim>
                </div>
            </section>

            {/* Services */}
            <section className="px-8 md:px-16">
                <div className="max-w-[1400px] mx-auto">
                    {services.map((s, i) => (
                        <Anim key={s.n} delay={1}>
                            <div
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16"
                                style={{ borderBottom: "1px solid var(--border)" }}
                            >
                                <div className="lg:col-span-1">
                                    <span className="font-serif text-4xl" style={{ color: "var(--gold)", opacity: 0.35, fontWeight: 300 }}>
                                        {s.n}
                                    </span>
                                </div>
                                <div className="lg:col-span-3">
                                    <h2 className="text-xl md:text-2xl" style={{ fontWeight: 300, color: "var(--fg)" }}>
                                        {s.title}
                                    </h2>
                                    {i % 2 === 0 && <div className="g-line mt-4" />}
                                </div>
                                <div className="lg:col-span-5">
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
                                </div>
                                <div className="lg:col-span-3">
                                    <ul className="flex flex-col gap-2">
                                        {s.items.map(item => (
                                            <li key={item} className="flex items-start gap-3 text-xs" style={{ color: "var(--fg-muted)" }}>
                                                <span style={{ color: "var(--gold)", marginTop: "1px" }}>—</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Anim>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="px-8 md:px-16 py-24" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <Anim>
                        <h2 className="text-3xl md:text-4xl" style={{ fontWeight: 300 }}>
                            Un projet en tête ?
                        </h2>
                    </Anim>
                    <Anim delay={1}>
                        <Link href="/contact" className="btn-gold">Nous contacter</Link>
                    </Anim>
                </div>
            </section>
        </>
    );
}
