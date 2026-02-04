import { useEffect, useId, useState } from "react";
import Container from "../Container";
import "./Header.scss";
import { scrollToHash } from "../../../utils/scrollToHash";

const links = [
    { href: "#features", label: "Features" },
    { href: "#cards", label: "Cards" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const navId = useId();

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 900) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Close on ESC
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    // Lock body scroll when menu open (mobile)
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    const onNavClick = (e, href) => {
        e.preventDefault();
        setOpen(false);
        scrollToHash(href, 72);
    };

    return (
        <header className="header">
            <Container>
                <div className="header__inner">
                    <a className="header__logo" href="#top" onClick={(e) => onNavClick(e, "#top")}>
                        Brand
                    </a>

                    <nav id={navId} className={`header__nav ${open ? "is-open" : ""}`}>
                        {links.map((l) => (
                            <a
                                key={l.href}
                                className="header__link"
                                href={l.href}
                                onClick={(e) => onNavClick(e, l.href)}
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="header__burger"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        aria-controls={navId}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    {open && <div className="header__backdrop" onClick={() => setOpen(false)} />}
                </div>
            </Container>
        </header>
    );
}
