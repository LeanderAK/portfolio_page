import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import ScrollToTop from '../components/ScrollToTop';

export const ImprintPage = () => {
    return (
        <div>
            <NavbarComponent/>
            <ScrollToTop />
            <h1>Imprint </h1>
            <FooterComponent/>
        </div>
    );
}