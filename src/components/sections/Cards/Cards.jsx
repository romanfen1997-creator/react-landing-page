import Container from "../../layout/Container";
import "./Cards.scss";

const plans = [
    { name: "Basic", price: "€9", perks: ["1 landing", "Responsive", "Email support"] },
    { name: "Pro", price: "€29", perks: ["3 landings", "FAQ + form", "Priority support"] },
    { name: "Team", price: "€59", perks: ["Unlimited", "Custom sections", "Team support"] },
];

export default function Cards() {
    return (
        <section id="cards" className="section cards">
            <Container>
                <h2 className="cards__title">Cards</h2>
                <p className="cards__subtitle">Example pricing cards rendered from data.</p>

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

                            <a className="cards__cta" href="#contact">Choose</a>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
