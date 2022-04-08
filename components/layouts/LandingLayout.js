import Hero from "../sections/Hero";
import Nav from "../sections/Nav";
import Features from "../sections/Features";
import Statistics from "../sections/Statistics";
import Footer from "../sections/Footer";

export default function LandingLayout(){
    return(
        <>
        <Nav />
        <Hero />
        <Features />
        <Statistics />
        <Footer />
        </>
    )
}