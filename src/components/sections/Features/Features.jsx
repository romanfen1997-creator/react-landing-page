import Container from "../../layout/Container";
import "./Features.scss";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

const items = [
    {title: "Responsive", text: "Mobile-first layout with clean breakpoints."},
    {title: "Reusable UI", text: "Sections built as components with clear structure."},
    {title: "Light JS", text: "Burger menu, smooth scroll, validation."},
];

export default function Features() {
    return (
        <section id="features" className="section features">
            <Container>
                <SectionTitle
                    title="Features"
                    subtitle="A clean landing page structure, ready for real content."
                />

                <div className="features__grid">
                    {items.map((it) => (
                        <article key={it.title} className="features__card">
                            <h3 className="features__cardTitle">{it.title}</h3>
                            <p className="features__cardText">{it.text}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
