
export function getStoredTheme() {
    if (typeof window === "undefined") return null;
    try {
        return localStorage.getItem("theme");
    } catch {
        return null;
    }
}

export function applyTheme(theme) {
    if (typeof document === "undefined") return;
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
}

export function setTheme(theme) {
    applyTheme(theme);
    if (typeof window !== "undefined") {
        try {
            if (theme) {
                localStorage.setItem("theme", theme);
            } else {
                localStorage.removeItem("theme");
            }
        } catch { }
    }
}

export function toggleTheme() {
    if (typeof document === "undefined") return null;
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? null : "dark";
    setTheme(next);
    return next;
}

export function initThemeFromStorage() {
    const stored = getStoredTheme();
    if (stored === null) {
        setTheme("dark");
        return "dark";
    }
    applyTheme(stored);
    return stored;
}





