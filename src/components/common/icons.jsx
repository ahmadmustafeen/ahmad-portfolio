import { Github, Linkedin, Twitter, Sun, Moon, Menu, X } from "lucide-react";

const base = "text-theme-primary";
const size = "h-7 w-7 sm:h-9 sm:w-9";

export const GithubIcon = () => (
    <Github aria-hidden="true" className={[base, size].join(" ")} />
);

export const LinkedinIcon = () => (
    <Linkedin aria-hidden="true" className={[base, size].join(" ")} />
);

export const TwitterIcon = () => (
    <Twitter aria-hidden="true" className={[base, size].join(" ")} />
);

export const SunIcon = () => (
    <Sun aria-hidden="true" className={[base, size].join(" ")} />
);

export const MoonIcon = () => (
    <Moon aria-hidden="true" className={[base, size].join(" ")} />
);

export const MenuIcon = () => (
    <Menu aria-hidden="true" className={[base, size].join(" ")} />
);

export const CloseIcon = () => (
    <X aria-hidden="true" className={[base, size].join(" ")} />
);



