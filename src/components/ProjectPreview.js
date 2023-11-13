import { Container, Row } from "react-bootstrap";
import FrameworkIcon from "./FrameworkIcon";
import { Parallax } from "react-scroll-parallax";
import { BoxArrowUpRight, ChevronDown, Github } from "react-bootstrap-icons";
import ScrollToFocus from "./ScrollToFocus";
function ProjectPreview(props) {
    return (
        <div className='project-page'>
          <Container fluid className="project-page-top-container">
            <Parallax translateY={[20,-20]}>
              <span className="project-page-title slide-in d-block">
                {props.title}
              </span>
            </Parallax>
            <Parallax translateY={[-30,30]} className="project-page-subtitle">
              {props.subtitle}
            </Parallax>
            <div className="project-page-overview-container pt-5">
              <div className="w-50 project-page-preview-container">
                {props.content}
                <br/>
              </div>
              <Parallax translateY={[20,-20]} className="w-50 project-page-preview-container">
                    {props.frameworks.map((object, index) => (
                      <FrameworkIcon key={object.key} src={object.src} title={object.title} width={object.width}/>
                  ))}
              </Parallax>
            </div>
            {props.link && (
              <a href={props.link} target="blank">
                <BoxArrowUpRight size={30} className="mt-4 color-2"/>
              </a>
            )}
            {props.github && (
              <a href={props.github} target="blank">
                <Github size={30} className="mt-4 ms-4 color-2"/>
              </a>
            )}
            <ScrollToFocus object_id="scrollRef" yOffset={-200}/>
          </Container>
      </div>
      );
  }

  export default ProjectPreview;