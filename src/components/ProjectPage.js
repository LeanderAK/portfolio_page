import { Container, Row } from "react-bootstrap";
import FrameworkIcon from "./FrameworkIcon";
import { Parallax } from "react-scroll-parallax";
function ProjectPage(props) {  
    return (
        <div className='project-page'>
          <Container fluid className="project-page-container">
            <Parallax translateY={[20,-20]}>
              <span className="project-page-title">
                {props.title}
              </span>
            </Parallax>
            <Parallax translateY={[-30,30]}>
              <span className="project-page-subtitle">
                {props.subtitle}
              </span>
            </Parallax>
            <div className="project-page-content-container pt-5">
              <div className="ps-3 w-50 project-page-frameworks">
                  {props.content}
              </div>
              <Parallax translateY={[20,-20]} className="ps-3 w-50 project-page-frameworks">
                    {props.frameworks.map((object, index) => (
                      <FrameworkIcon src={object.src} title={object.title} width={object.width}/>
                  ))}
              </Parallax>
            </div>
            <img className="project-page-image" src={props.src}></img>
          </Container>
      </div>
      );
  }

  export default ProjectPage;