"use client";

import { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode;
    delay?: 0 | 1 | 2 | 3 | 4 | 5;
    className?: string;
}

export default function Anim({ children, delay = 0, className = "" }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={ref} className={`anim${delay ? ` d${delay}` : ""}${className ? ` ${className}` : ""}`}>
            {children}
        </div>
    );
}
