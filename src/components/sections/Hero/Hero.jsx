import Container from "../../layout/Container";
import "./Hero.scss";

export default function Hero() {
    return (
        <section id="top" className="section hero">
            <Container>
                <div className="hero__grid">
                    <div className="hero__content">
                        <p className="hero__eyebrow">React + SCSS landing</p>
                        <h1 className="hero__title">Responsive landing page for modern microsites</h1>
                        <p className="hero__text">
                            Built with reusable components, smooth navigation, FAQ accordion and form validation.
                        </p>

                        <div className="hero__actions">
                            <a className="btn btn--primary" href="#contact">Get in touch</a>
                            <a className="btn btn--ghost" href="#features">View features</a>
                        </div>

                        <div className="hero__meta">
                            <span>✓ Responsive</span>
                            <span>✓ Small JS</span>
                            <span>✓ Clean structure</span>
                        </div>
                    </div>

                    <div className="hero__visual" aria-hidden="true">
                        <div className="hero__mock">
                            <div className="hero__mockBar" />
                            <div className="hero__mockBlock" />
                            <div className="hero__mockBlock hero__mockBlock--small" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
