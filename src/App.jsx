import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import Features from "./components/sections/Features/Features";
import Cards from "./components/sections/Cards/Cards";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <Cards />
            </main>
        </>
    );
}
