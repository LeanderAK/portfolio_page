import { Container } from "react-bootstrap";
function ProjectPage(props) {  
    return (
        <div className='project-page'>
          <Container fluid className="project-page-container">
            <span className="project-page-title">
              {props.title}
            </span>
            <span className="project-page-subtitle">
              {props.subtitle}
            </span>
            <span className="project-page-content">
              {props.content}
            </span>
          </Container>
      </div>
      );
  }

  export default ProjectPage;