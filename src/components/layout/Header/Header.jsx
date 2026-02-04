import { useEffect, useState } from "react";
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

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 900) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onNavClick = (e, href) => {
        e.preventDefault();
        setOpen(false);
        scrollToHash(href, 72);
    };

    return (
        <header className="header">
            <Container>
                <div className="header__inner">
                    <a
                        className="header__logo"
                        href="#top"
                        onClick={(e) => onNavClick(e, "#top")}
                    >
                        Brand
                    </a>

                    <nav className={`header__nav ${open ? "is-open" : ""}`}>
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
