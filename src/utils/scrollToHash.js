/**
 * Smooth-scroll to an in-page anchor while compensating for a fixed header
 * `offset` should match the header height (see $header-offset in SCSS)
 */
export function scrollToHash(hash, offset = 72) {
    if (!hash || !hash.startsWith("#")) return;
    const el = document.querySelector(hash);
    if (!el) return;

    // Subtract header height so the section title is not hidden behind the fixed header
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
}
