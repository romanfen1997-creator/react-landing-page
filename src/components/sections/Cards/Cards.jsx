import Container from "../../layout/Container";
import "./Cards.scss";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Button from "../../ui/Button/Button";

const plans = [
    {name: "Basic", price: "€9", perks: ["1 landing", "Responsive", "Email support"]},
    {name: "Pro", price: "€29", perks: ["3 landings", "FAQ + form", "Priority support"]},
    {name: "Team", price: "€59", perks: ["Unlimited", "Custom sections", "Team support"]},
];

export default function Cards() {
    return (
        <section id="cards" className="section cards">
            <Container>
                <SectionTitle
                    title="Cards"
                    subtitle="Example pricing cards rendered from data."
                />

                <div className="cards__grid">
                    {plans.map((p) => (
                        <article key={p.name} className="cards__card">
                            <div className="cards__head">
                                <h3 className="cards__name">{p.name}</h3>
                                <div className="cards__price">{p.price}</div>
                            </div>

                            <ul className="cards__list">
                                {p.perks.map((perk) => (
                                    <li key={perk}>{perk}</li>
                                ))}
                            </ul>
                            <Button href="#contact" variant="primary">Choose</Button>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
