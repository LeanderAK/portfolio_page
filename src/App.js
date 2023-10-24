import './css/App.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row } from 'react-bootstrap';
import { Github, Linkedin, Lightbulb } from 'react-bootstrap-icons';
import ProjectCard from './components/project_card';
import FrameworkIcon from './components/FrameworkIcon';
import { Parallax } from 'react-scroll-parallax';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    let scroll = window.scrollY;
    setScrollY(scroll);
    if (scroll > 0.2 * window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App" data-target="#navbar">
      <Navbar className={`custom-navbar ${scrolled ? 'custom-navbar-bg' : ''}`} id='navbar'>
        <div className="d-flex justify-content-between w-100 p-4 pb-0 pt-0">
          <div className="d-flex">
            <span className='m-2 navbar-item'>EXPERTISE</span>
            <span className='m-2 navbar-item'>PROJECTS</span>
            <span className='m-2 navbar-item'>EXPERIENCE</span>
          </div>
          <div className='d-flex'>
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
          <span className='title-header p-4'> 
          <Parallax translateY={[0, 40]}>
            LEANDER KAMMERMEIER

          </Parallax>
        </span>
      </Container>
      {/* Content Container */}
      <Container fluid className="content-container pt-4">
        {/* Skills */}
        <Parallax translateY={[50, -20]}>
          <div className='text-center mt-4'>
              <span className='content-header m-4 text-center'> 
                  MY EXPERTISE 
              </span> 
          </div>
          <Row className='justify-content-center m-4'>
            <Lightbulb className="" style={{'color' : '#ffffff', 'width' : 'fit-content'}} size={120}/>
            <Lightbulb className="" style={{'color' : '#ffffff', 'width' : 'fit-content'}} size={120} />
            <Lightbulb className="" style={{'color' : '#ffffff', 'width' : 'fit-content'}} size={120} />
          </Row>
          <p className='expertise-text m-auto pt-4 pb-4 mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
        </Parallax>
        {/* <Row className='justify-content-center'>
          <FrameworkIcon name="Django" src="./icons/django_icon.png" classes="m-2"/>
          <FrameworkIcon name="Elasticsearch" src="./icons/elasticsearch_icon.png" classes="m-2"/>
          <FrameworkIcon name="React" src="./icons/react_icon.png" classes="m-2"/>
        </Row> */}
        {/* Projects */}
        <Parallax translateY={[30, -60]}>
          <Row className='justify-content-center m-4'>
            <div className='project-header-container '>
              <span className='content-header'> PROJECTS</span>
              <p className=' mt-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
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
            {/* Education & Experience */}
            <div className='text-center mt-4'>
              <span className='content-header m-4 text-center'> EDUCATION & EXPERIENCE </span> 
            </div>
          </Row>
        </Parallax>
      </Container>
    </div>
  );
}

export default App;
