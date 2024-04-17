import FooterComponent from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";
import ProjectPreview from "../../components/ProjectPreview";
import ScrollToTop from '../../components/ScrollToTop';
import { Container, Row, Col } from 'react-bootstrap';

const frameworks_list = [
    {src : './icons/django_icon.png', title : 'Django', width : '50px', key:0},
    {src : './icons/elasticsearch_icon.png', title : 'Elasticsearch', width : '50px', key:1},
    {src : './icons/bootstrap_icon.png', title : 'Bootstrap', width : '50px', key:2}
]
export const ProjectPageBA = () => {
    return (
        <div>
            <NavbarComponent />
            <ScrollToTop />
            <ProjectPreview 
                title="BACHELOR THESIS"
                src="./images/blubble_single.png"
                subtitle="Visualization, analysis and improvement of DNS- and Shodan-Datasets to assess the security of business domains."
                content="Growing digital infrastructures of business domains are leading to a loss of overview, especially of security relevant data. This Thesis implements a webapp that scans the infastructure of a business domain finding unavailable services aswell as uncovering potential security risks. "
                frameworks={frameworks_list}
            />
            <Container fluid className="project-page-bottom-container">
                <div className="project-page-content-container">
                    <p className=""> 
                    Below you can see the result of the Thesis; 
                    A report displaying information about the availabilty, security and hosting location for the infrastructure of a given business domain. 
                    The Website of the University of Applied Sciences (HTW) Berlin has been used to demonstrate the system.
                    Through the implemented approach, a large amount of potential security risks have been found on the (sub-)domains used by the university.
                    </p>
                    <img className="project-page-image" src="./images/ba_full.png" id="scrollRef"></img>
                </div>
            </Container>
            <FooterComponent/>
        </div>
    );
}