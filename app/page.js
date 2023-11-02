import Nav from "../components/Nav";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Work from "../pages/Work";
import Services from "../pages/Services";

export default function Home() {
    return (
        <>
            <Nav className='hidden md:block' />
            <HomePage />
            <AboutUs />
            <Work />
            <Services />
        </>
    );
}
