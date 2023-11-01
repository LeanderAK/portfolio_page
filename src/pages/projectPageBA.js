import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import FrameworkIcon from "../components/FrameworkIcon";
import ProjectPreview from "../components/ProjectPreview";
import { Container } from "react-bootstrap";

const frameworks_list = [
    {src : './icons/blender_icon.png', title : 'Blender', width : '50px'},
    {src : './icons/blender_icon.png', title : 'Blender', width : '50px'},
    {src : './icons/blender_icon.png', title : 'Blender', width : '50px'}
]
export const ProjectPageBA = () => {
    return (
        <div>
            <NavbarComponent />
            <ProjectPreview 
                title="BACHELOR THESIS"
                src="./images/blubble_single.png"
                subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                //github="https://github.com"
                //link="https://google.com"
                frameworks={frameworks_list}
            />
            <FooterComponent/>
        </div>
    );
}