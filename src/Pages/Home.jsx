import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import { StickyNavbar } from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import TopBanner from "../Components/TopBanner/TopBanner";

const Home = () => {
    return (
        <div className="container mx-auto mons">
            <StickyNavbar></StickyNavbar>
            <TopBanner></TopBanner>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;