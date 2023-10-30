import { Container, Row } from "react-bootstrap";
import FrameworkIcon from "./FrameworkIcon";
import { Parallax } from "react-scroll-parallax";
import { ChevronDown } from "react-bootstrap-icons";
import ScrollToFocus from "./ScrollToFocus";
function ProjectPage(props) {
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
              <div className="w-50 project-page-frameworks">
                  {props.content}
              </div>
              <Parallax translateY={[20,-20]} className="w-50 project-page-frameworks">
                    {props.frameworks.map((object, index) => (
                      <FrameworkIcon src={object.src} title={object.title} width={object.width}/>
                  ))}
              </Parallax>
            </div>
            <ScrollToFocus object_id="scrollRef" yOffset={-200}/>
          </Container>
          <Container fluid className="project-page-bottom-container">
            <div className="project-page-content-container p-3 mt-5 mb-5">
              <img className="project-page-image" src={props.src} id="scrollRef"></img>
            </div>
            <div className="p-5"/>
          </Container>
      </div>
      );
  }

  export default ProjectPage;