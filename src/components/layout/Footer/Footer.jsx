import Container from "../Container";
import "./Footer.scss";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <div className="footer__inner">
                    <div className="footer__brand">Brand</div>
                    <div className="footer__meta">© {year} · React Landing Page</div>
                </div>
            </Container>
        </footer>
    );
}
