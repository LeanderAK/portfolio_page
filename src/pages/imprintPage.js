import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import ScrollToTop from '../components/ScrollToTop';
import { Col } from "react-bootstrap";
export const ImprintPage = () => {
    return (
        <div>
            <NavbarComponent/>
            <ScrollToTop />
            <div className="imprint">
                <h1 className="color-2"> 
                    Imprint  
                </h1>
                <Col>
                    <span className="">
                        Information according to § 5 TMG
                    </span>
                    <br />
                    <div className="pt-2">
                        Leander Kammermeier<br />
                        Durlacher str. 21 B<br />
                        10715 Berlin<br />
                    </div>
                    <div className="pt-2">
                        Telephone: 01234-789456<br />
                        E-Mail: max@muster.de<br />
                    </div>
                </Col>
                <h2 className="color-2 pt-2">
                    Disclaimer of liability:
                </h2>
                <h4 className="pt-2">
                    Liability for content
                </h4>
                <p className="color-dark">
                    The contents of our pages have been created with the greatest care. However, we cannot assume any liability for the accuracy, completeness and topicality of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general legislation remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a specific infringement. As soon as we become aware of such infringements, we will remove this content immediately.
                </p>
                <h4 className="pt-2">
                    Liability for links
                </h4>
                <p className="color-dark">
                    Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of an infringement. If we become aware of any legal infringements, we will remove such links immediately.
                </p>
                <h4 className="pt-2">
                    Copyright
                </h4>
                <p className="color-dark">
                    The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
                </p>
                <h4 className="pt-2">
                    Privacy
                </h4>
                <p className="color-dark">
                    The use of our website is generally possible without providing personal data. Insofar as personal data (e.g. name, address or e-mail addresses) is collected on our pages, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent.
                    We would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) may be subject to security vulnerabilities. Complete protection of data against access by third parties is not possible.
                    We hereby expressly prohibit the use of contact data published within the scope of the imprint obligation by third parties for sending unsolicited advertising and information material. The operators of this website expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, such as spam e-mails.</p>
                <h4 className="pt-2">
                    Google Analytics
                </h4>
                <p className="color-dark">
                    This website uses Google Analytics, a web analysis service of Google Inc (''Google''). Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.
                </p>

            </div>
            <FooterComponent/>
        </div>
    );
}