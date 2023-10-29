import { Container } from "react-bootstrap";
import FrameworkIcon from "./FrameworkIcon";
function ProjectPage(props) {  
    return (
        <div className='project-page'>
          <Container fluid className="project-page-container">
            <span className="project-page-title">
              {props.title}
            </span>
            <br/>
            <span className="project-page-subtitle">
              {props.subtitle}
            </span>
            <br/>
            <div className="project-page-content-container pt-5">
              <span className="pe-3 project-page-content">
                {props.content}
              </span>
              <span className="ps-3 w-50">
                  {props.frameworks}
              </span>
            </div>
            <br/>
            <img className="project-page-image" src={props.src}></img>
          </Container>
      </div>
      );
  }

  export default ProjectPage;