import '../css/App.css';
import '../css/Timeline.css';
import '../css/Project.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Lightbulb } from 'react-bootstrap-icons';
import ProjectCard from './project_card';
import { Parallax } from 'react-scroll-parallax';
import TimelineItem from './TimelineItem';

function HomePageComponent() {
    const [scrolledNavbar, setScrolledNavbar] = useState(false);
    const [scrolledProficiencies, setScrolledProficiencies] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [iconSize, setIconSize] = useState(50);

    const handleScroll = () => {
        let scroll = window.scrollY;
        setScrollY(scroll);
        if (scroll > 0.2 * window.innerHeight) { 
        setScrolledNavbar(true);
        if(scroll > 0.5* window.innerHeight) {
            setScrolledProficiencies(true);
        }
        } else{
        setScrolledNavbar(false);
        }
    };
    const handleResize = () => {
        setIconSize(window.innerWidth < 768 ? 30 : 50);
        console.log(iconSize)
    } 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="App" data-target="#navbar">
        <Navbar className={`custom-navbar ${scrolledNavbar ? 'custom-navbar-bg' : ''}`} id='navbar'>
          <div className="d-flex justify-content-between w-100 p-4 pb-0 pt-0">
            <div className="d-flex">
              <span className='m-2 navbar-item'>EXPERTISE</span>
              <span className='m-2 navbar-item'>PROJECTS</span>
              <span className='m-2 navbar-item'>EXPERIENCE</span>
            </div>
            <div className='d-flex'>
              <a href="https://github.com/LeanderAK" target='blank'>
                <Github className="mt-1 ms-4 color-2" size={iconSize} />
              </a>
              <a href="https://www.linkedin.com/in/leander-kammermeier-b0b844212/" target='blank'>
                <Linkedin className="mt-1 ms-4 color-2" size={iconSize} />
              </a>
            </div>
          </div>
        </Navbar>
        {/* Top Segment */}
        <Container fluid className="top-container">
            <div className='gif-container'>
              <Parallax className='gif-container-text' translateY={[-30, 30]}>              
                <p className='color-2'>
                  International Media Informatics B.Sc @ HTW Berlin <br />
                  Working Student @ [j]karef <br/>
                  Currently working on Bachelor Thesis <br/>
                  Future software developer</p>
              </Parallax>
              <img className='gif-abstract' src='leander_abstract.gif'></img>
              <Parallax className='gif-real' translateY={[20, -20]}>
                <img src='leander.gif'></img>
              </Parallax>
            </div>
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
                    PROFICIENCIES 
                </span> 
            </div>
            <Row className='justify-content-center m-4'>
              <div className='proficiency-item-container'>
                <span className={`proficiency-item fade-in-left fade-obj-1 ${scrolledProficiencies ? 'fade-in-active' : ''}`}>WEB</span>
              </div>
              <span className='proficiency-item'>/</span>
              <div className='proficiency-item-container'>
                <span className={`proficiency-item fade-in-left fade-obj-2 ${scrolledProficiencies ? 'fade-in-active' : ''}`}>BACKEND</span>
              </div>
              <span className='proficiency-item'>/</span>
              <div className='proficiency-item-container'>
                <span className={`proficiency-item fade-in-left fade-obj-3 ${scrolledProficiencies ? 'fade-in-active' : ''}`}>DATASCIENCE</span>
              </div>
              {/* <Parallax
                translateX={['-1000px', '600px']}
                easing="easeOutQuad"
              >
                <span className='content-subtitle'> 
                  WEB / BACKEND / DATASCIENCE
                </span>
              </Parallax> */}
            </Row>
            <p className='expertise-text m-auto pt-4 pb-4 mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
          </Parallax>
          <Parallax translateY={[30, -60]}>
            <Row className='justify-content-center m-4'>
              <div className='project-header-container '>
                <span className='content-header'> PROJECTS</span>
                <p className=' mt-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
              </div>
              <ProjectCard
                  src="./images/blubble_single.png"
                  title="BACHELOR-THESIS"
                  subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
              />
              <ProjectCard
                  src="./images/blubble_single.png"
                  title="BLUBBLE"
                  subtitle="A native Android & iOS App to find, create and organize book club meetups and discussions"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
              />
              <ProjectCard
                  src=""
                  title="CREAPE"
                  subtitle="A Webapp for uploading, shareing and finding new DIY instructions"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
              />
              <ProjectCard
                  src=""
                  title="BACHELOR-THESIS"
                  subtitle="Visualization and analysis of DNS-, Shodan-, and Lighthouse-Datasets to assess the security of business's domains."
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
              />
            </Row>
          </Parallax>
          {/* Education & Experience */}
          <div className='text-center timeline-container'>
            <span className='content-header text-center'> EDUCATION & EXPERIENCE </span>
            <Parallax translateY={[40,-30]}>
              <Row className='timeline-row'>
                <Col className='timeline-col'>
                  <TimelineItem classes="text-end" date='Oktober 2020 - Present' title='HTW BERLIN' subtitle='B.Sc' description='B.Sc in International Media Informatics with Focus on media applications of computer science, including Web,3D, image processing, computer graphics and software engineering'/>
                  <TimelineItem classes="text-end" date='June 2011 to June 2019' title='FSAS Berlin' subtitle='Bilingual Highschool' description='Abitur (University entrance diploma) with an average grade of 1.9 with Art and English as main courses'/>
                </Col>
                <Col className='timeline-col'>
                  <TimelineItem classes="text-start" date='April 2022 - Present' title='[j]karef Gmbh' subtitle='Internship & Working student' description='Full Stack development building Webapps for customers including web scrapers and historic datamodelation'/>
                  <TimelineItem classes="text-start" date='March 2021 - March 2022' title='Designation' subtitle='Freelance work' description='Part-time work for Kjubex Project House Boat including 3D Modelling and rendering, Setting up VR applications for visualisation in Unity and Product research for interior products and solutions'/>
                  <TimelineItem classes="text-start" date='January 2015' title='Mobile Learning Labs GmbH' subtitle='Internship' description='Student internship including translating app content from german to english, testing of learning application prototype and gaining insight into development of mobile application'/>
                </Col>
              </Row>
            </Parallax>
          </div>
        </Container>
        <footer className='text-center'>
          <span className='timeline-title p-1 footer-item m-3'>
            Imprint
          </span>
          <span className='timeline-title p-1 footer-item m-3'>
            Privacy Policy
          </span>
        </footer>
      </div>
    );
}

export default HomePageComponent ;