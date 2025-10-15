'use client'

import { useEffect, useRef } from "react";

export function useScrollReveal(options = { root: null, rootMargin: "0px", threshold: 0.12 }) {
    const elementRef = useRef(null);

    useEffect(() => {
        const target = elementRef.current;
        if (!target) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-show');
                    obs.unobserve(entry.target);
                }
            });
        }, options);

        observer.observe(target);

        return () => observer.disconnect();
    }, [options]);

    return elementRef;
}




