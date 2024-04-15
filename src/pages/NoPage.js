import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import ScrollToTop from '../components/ScrollToTop';

export const NoPage = () => {
    return (
        <div>
            <NavbarComponent />
            <ScrollToTop />
            <h1>Oops.. Nothing found </h1>
            <FooterComponent/>
        </div>
    );
}