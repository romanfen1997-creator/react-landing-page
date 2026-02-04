import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import Features from "./components/sections/Features/Features";
import Cards from "./components/sections/Cards/Cards";
import FAQ from "./components/sections/FAQ/FAQ";
import ContactForm from "./components/sections/ContactForm/ContactForm";
import Footer from "./components/layout/Footer/Footer";

export default function App() {
    return (
        <>
            <Header />
            <main className="page">
                <Hero />
                <Features />
                <Cards />
                <FAQ />
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}
