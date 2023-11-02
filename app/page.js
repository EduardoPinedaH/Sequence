import Nav from "../components/Nav";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Work from "../pages/Work";
import Services from "../pages/Services";

export default function Home() {
    return (
        <>
            <Nav />
            <HomePage />
            <AboutUs />
            <Work />
            <Services />
        </>
    );
}
