import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import FrameworkIcon from "../components/FrameworkIcon";
import ProjectPage from "../components/ProjectPage";

export const ProjectPageBA = () => {
    return (
        <div>
            <NavbarComponent />
            <ProjectPage 
                title="BACHELOR THESIS"
                src="./images/blubble_single.png"
                subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                frameworks={[<div className="project-page-frameworks w-100">
                    <FrameworkIcon src='./icons/blender_icon.png' name='Blender' width='50px'/>
                    <FrameworkIcon src='./icons/blender_icon.png' name='Blender' width='50px'/>
                    <FrameworkIcon src='./icons/blender_icon.png' name='Blender' width='50px'/>
                    <FrameworkIcon src='./icons/blender_icon.png' name='Blender' width='50px'/>
                    <FrameworkIcon src='./icons/blender_icon.png' name='Blender' width='50px'/>
                </div>
                ]}
            />
            <FooterComponent/>
        </div>
    );
}