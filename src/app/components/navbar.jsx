'use client';

import { useState, useRef, useEffect } from "react";
import { initThemeFromStorage, toggleTheme } from "@/app/theme/theme";
import Logo from "./logo";
import { GithubIcon, LinkedinIcon, TwitterIcon, SunIcon, MoonIcon } from "./icons";

function IconButton({ label, onClick, children }) {
    return (
        <button aria-label={label} onClick={onClick} className="relative group h-10 w-10 flex items-center justify-center text-white">
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                    background: "rgba(243, 244, 246, 0.25)",
                    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 0)",
                }}
                aria-hidden="true"
            />
            <span className="relative z-10">{children}</span>
        </button>
    );
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [themeIconAlt, setThemeIconAlt] = useState(false);
    const [barY, setBarY] = useState(null);
    const [barVisible, setBarVisible] = useState(false);
    const [barOpen, setBarOpen] = useState(false);
    const [barOrigin, setBarOrigin] = useState("left");
    const menuRef = useRef(null);

    const BAR_SIDE_MARGIN = 120;

    const onLinkEnter = (e) => {
        if (!menuRef.current) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const menuRect = menuRef.current.getBoundingClientRect();
        const relativeY = rect.top - menuRect.top + rect.height / 2;

        setBarY(relativeY);
        setBarOrigin("left");
        setBarVisible(true);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setBarOpen(true);
            });
        });
    };

    const onLinkLeave = () => {
        setBarOrigin("right");
        setBarOpen(false);

        setTimeout(() => {
            if (!barOpen) {
                setBarVisible(false);
            }
        }, 300);
    };

    useEffect(() => {
        const stored = initThemeFromStorage();
        setThemeIconAlt(stored === "dark");

        if (!open) {
            setBarVisible(false);
            setBarOpen(false);
        }
    }, [open]);

    const navLinks = [
        { href: "#contact", label: "Projects" },
        { href: "#contact", label: "Details" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 z-50">
                <Logo />
                <IconButton
                    label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="text-2xl leading-none select-none">
                        {open ? "✕" : "≡"}
                    </span>
                </IconButton>
            </div>

            <div
                ref={menuRef}
                className={["fixed inset-0 z-40 backdrop-blur-xl bg-black/50", "transform transition-transform duration-500 ease-out", open ? "translate-y-0" : "-translate-y-full",
                ].join(" ")}
                aria-hidden={!open}
            >
                <div
                    className={["w-full h-full flex items-center justify-center", "transition-all duration-500",
                        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
                    ].join(" ")}
                >
                    <nav className="flex flex-col gap-6 text-center text-md text-gray-300">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} onClick={() => setOpen(false)} onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave} className="group relative inline-block px-2 py-1">
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="absolute bottom-5 left-5 flex gap-4">
                    <a href="https://twitter.com/ebadullah" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="opacity-90 hover:opacity-100 transition-opacity"> <TwitterIcon /> </a>

                    <a href="https://github.com/ebadullah" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="opacity-90 hover:opacity-100 transition-opacity"> <GithubIcon /> </a>

                    <a href="https://www.linkedin.com/in/ebadullah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="opacity-90 hover:opacity-100 transition-opacity"> <LinkedinIcon /> </a>

                </div>

                <div className="absolute bottom-5 right-5">
                    <IconButton
                        label="Toggle theme"
                        onClick={() => {
                            const next = toggleTheme();
                            setThemeIconAlt(next === "dark");
                        }}
                    >
                        {themeIconAlt ? <MoonIcon /> : <SunIcon />}
                    </IconButton>
                </div>

                {barVisible && (
                    <span
                        className="pointer-events-none absolute h-[3px] bg-cyan-400 z-[60] transition-transform duration-300 ease-out"
                        style={{
                            top: barY ? `${barY}px` : "50%", left: `${BAR_SIDE_MARGIN}px`,
                            right: `${BAR_SIDE_MARGIN}px`,
                            transform: barOpen ? "scaleX(1)" : "scaleX(0)",
                            transformOrigin: barOrigin === "left" ? "left center" : "right center",
                        }}
                        aria-hidden="true"
                    />
                )}
            </div>
        </>
    );
};

export default Navbar;