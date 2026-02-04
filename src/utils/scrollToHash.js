export function scrollToHash(hash, offset = 72) {
    if (!hash || !hash.startsWith("#")) return;
    const el = document.querySelector(hash);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
}
