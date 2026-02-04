import { useState } from "react";
import Container from "../../layout/Container";
import "./FAQ.scss";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

const items = [
    { q: "Is this landing responsive?", a: "Yes. Layout switches to single-column on smaller screens." },
    { q: "What does the project demonstrate?", a: "Components, state, events, and small UI interactions." },
    { q: "Is there real backend form submit?", a: "No. Validation is implemented client-side for demo purposes." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="section faq">
            <Container>
                <SectionTitle
                    title="FAQ"
                />
                <div className="faq__list">
                    {items.map((it, idx) => {
                        const open = idx === openIndex;
                        return (
                            <div key={it.q} className={`faq__item ${open ? "is-open" : ""}`}>
                                <button
                                    className="faq__question"
                                    onClick={() => setOpenIndex(open ? -1 : idx)}
                                    aria-expanded={open}
                                >
                                    {it.q}
                                    <span className="faq__icon">{open ? "−" : "+"}</span>
                                </button>
                                {open && <div className="faq__answer">{it.a}</div>}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
