import './css/App.css';
import { Navbar, Container, Row } from 'react-bootstrap';
import { Github, Linkedin, Lightbulb } from 'react-bootstrap-icons';
import ProjectCard from './components/project_card';
import FrameworkIcon from './components/FrameworkIcon';
function App() {
  return (
    <div className="App" data-target="#navbar">
      <Navbar className='custom-navbar' id='navbar'>
        <div className="d-flex justify-content-between w-100 p-2 pt-0">
          <div className="">
            <a className='m-2 navbar-item'>EXPERTISE</a>
            <a className='m-2 navbar-item'>PROJECTS</a>
            <a className='m-2 navbar-item'>EXPERIENCE</a>
          </div>
          <div className=''>
            <a href="https://github.com/LeanderAK" target='blank'>
              <Github className="mt-1 ms-4 navbar-color" size={50} />
            </a>
            <a href="https://www.linkedin.com/in/leander-kammermeier-b0b844212/" target='blank'>
              <Linkedin className="mt-1 ms-4 navbar-color" size={50} />
            </a>
          </div>
        </div>
      </Navbar>
      {/* Top Segment */}
      <Container fluid className="top-container">
        <span className='title-header'> LEANDER KAMMERMEIER</span>
      </Container>
      {/* Content Container */}
      <Container fluid className="content-container pt-4">
        {/* Skills */}
        <div className='text-center mt-4'>
          <span className='content-header m-4 text-center'> MY EXPERTISE </span> 
        </div>
        <Row className='justify-content-center'>
          <Lightbulb className="" style={{'color' : '#ffffff', 'width' : 'fit-content'}} size={120}/>
          <Lightbulb className="" style={{'color' : '#ffffff', 'width' : 'fit-content'}} size={120} />
          <Lightbulb className="" style={{'color' : '#ffffff', 'width' : 'fit-content'}} size={120} />
        </Row>
        <p className='expertise-text m-auto pt-4 pb-4 mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
        {/* <Row className='justify-content-center'>
          <FrameworkIcon name="Django" src="./icons/django_icon.png" classes="m-2"/>
          <FrameworkIcon name="Elasticsearch" src="./icons/elasticsearch_icon.png" classes="m-2"/>
          <FrameworkIcon name="React" src="./icons/react_icon.png" classes="m-2"/>
        </Row> */}
        {/* Projects */}
        <Row className='justify-content-center'>
          <div className='project-header-container'>
            <span className='content-header m-4'> PROJECTS</span>
            <p className='m-4 mt-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
          </div>
          <ProjectCard
              src="./images/test_white.jpeg"
              title="BACHELOR-THESIS"
              subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
          />
          <ProjectCard
              src="./images/test_white.jpeg"
              title="BACHELOR-THESIS"
              subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
          />
          <ProjectCard
              src="./images/test_white.jpeg"
              title="BACHELOR-THESIS"
              subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
          />
          <ProjectCard
              src="./images/test_white.jpeg"
              title="BACHELOR-THESIS"
              subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
          />
          <ProjectCard
              src="./images/test_white.jpeg"
              title="BACHELOR-THESIS"
              subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
          />
          <ProjectCard
              src="./images/test_white.jpeg"
              title="BACHELOR-THESIS"
              subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
          />
          <ProjectCard
              src="./images/test_white.jpeg"
              title="BACHELOR-THESIS"
              subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
