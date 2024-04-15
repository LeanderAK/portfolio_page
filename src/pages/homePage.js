import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { Parallax } from 'react-scroll-parallax';
import TimelineItem from '../components/TimelineItem';
import { Link } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import { ChevronDown } from 'react-bootstrap-icons';
import ScrollToFocus from '../components/ScrollToFocus';
import ScrollToTop from '../components/ScrollToTop';
import ProficeincyText from '../components/text/ProficiencyText'
import ProjectsText from '../components/text/ProjectsText';

export const HomePage = () => {
    const [scrolledProficiencies, setScrolledProficiencies] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [iconSize, setIconSize] = useState(50);

    const handleScroll = () => {
        let scroll = window.scrollY;
        setScrollY(scroll);
        if (scroll > 0.5 * window.innerHeight) { 
            setScrolledProficiencies(true);
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
        {/* Top Segment */}
        <NavbarComponent scroll_visibility={true} />
        <ScrollToTop />
        <Container fluid className="top-container">
            <div className='gif-container'>
              <Parallax className='gif-container-text' translateY={[-30, 30]}>              
                <p className='color-2'>
                  Media Informatics M.Sc @ TU Berlin <br />
                  Working Student @ [j]karef <br/>
                </p>
              </Parallax>
              <img className='gif-abstract' src='leander_abstract.gif'></img>
              <Parallax className='gif-real' translateY={[20, -20]}>
                <img src='leander.gif'></img>
              </Parallax>
            </div>
            <ScrollToFocus object_id="ProjectRef" yOffset={-450}/>
            <span className='title-header p-4 mb-4'> 
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
                <span className='content-header m-4 text-center' id="ProficienciesRef"> 
                    PROFICIENCIES 
                </span> 
            </div>
            <Row className='justify-content-center m-4'>
              <div className='proficiency-item-container'>
                <span className={`proficiency-item fade-in-left fade-obj-1 ${scrolledProficiencies ? 'fade-in-active' : ''}`}>WEB FULLSTACK</span>
              </div>
              <span className='proficiency-item'>/</span>
              <div className='proficiency-item-container'>
                <span className={`proficiency-item fade-in-left fade-obj-2 ${scrolledProficiencies ? 'fade-in-active' : ''}`}>DATASCIENCE</span>
              </div>
            </Row>
            <ProficeincyText></ProficeincyText>
          </Parallax>
          <Parallax translateY={[30, -60]}>
            <Row className='justify-content-center m-4'>
              <div className='project-header-container'>
                <span className='content-header' id="ProjectRef"> PROJECTS</span>
                <ProjectsText></ProjectsText>
              </div>
              <ProjectCard
                  src="./images/blubble_dual.png"
                  date="2023"
                  title="BACHELOR-THESIS"
                  subtitle="Visualization, analysis and improvement of DNS- and Shodan-Datasets to assess the security of business domains."
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                  link="bachelor_thesis"
              />
              <ProjectCard
                  src="./images/blubble_dual.png"
                  date="2023"
                  title="BLUBBLE"
                  subtitle="A native Android & iOS App to find, create and organize book club meetups and discussions"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                  link="blubble"
              />
              <ProjectCard
                  src=""
                  date="2023"
                  title="CREAPE"
                  subtitle="A Webapp for uploading, shareing and finding new DIY instructions"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                  link="creape"
              />
              <ProjectCard
                  src="./images/simple_shrine_thumbnail.png"
                  date="2020"
                  title="SIMPLE SHRINE PACK"
                  subtitle="Low Poly 3D Assetpack available on the unity asset store"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                  link="simple_shrine_pack"
              />
              <ProjectCard
                  src="./images/simple_shrine_thumbnail.png"
                  date="2020"
                  title="VR DEMO GAME"
                  subtitle="University entrance test"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                  link="vr_demo_game"
              />
              <ProjectCard
                  src="./images/simple_shrine_thumbnail.png"
                  date="2020"
                  title="FIVERR 3D MODELLING"
                  subtitle="Freelance 3d modelling"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
                  link="fiverr"
              />
            </Row>
          </Parallax>
          {/* Education & Experience */}
          <div className='text-center timeline-container'>
            <span className='content-header text-center' id="ExperienceRef"> EDUCATION & WORK EXPERIENCE </span>
            <Parallax translateY={[40,-30]}>
              <Row className='timeline-row'>
                <Col className='timeline-col'>
                  <TimelineItem classes="text-end" date='April 2024 - Present' title='TU, FU & HU BERLIN' subtitle='M.Sc' description='M.Sc in Digital Media and Technology with focus on media economics, datascience and media- systems and networks'/>
                  <TimelineItem classes="text-end" date='Oktober 2020 - March 2024' title='HTW BERLIN' subtitle='B.Sc' description='B.Sc in International Media Informatics with a final grade of 1.76 and a self elected focus on web development'/>
                  <TimelineItem classes="text-end" date='June 2011 to June 2019' title='FSAS Berlin' subtitle='Bilingual Highschool' description='Abitur (University entrance diploma) with an average grade of 1.9 with Art and English as main courses'/>
                </Col>
                <Col className='timeline-col'>
                  <TimelineItem classes="text-start" date='April 2022 - Present' title='[j]karef Gmbh' subtitle='Internship & Working student' description='Full Stack development building webapps for customers including web scrapers and data visualization'/>
                  <TimelineItem classes="text-start" date='March 2021 - March 2022' title='Designation' subtitle='Freelance work' description='Part-time working on a project building a houseboat including 3D Modelling and rendering, Setting up VR applications for visualisation in Unity and Product research for interior products and solutions'/>
                  <TimelineItem classes="text-start" date='January 2015' title='Mobile Learning Labs GmbH' subtitle='Internship' description='Student internship including translating app content from german to english, testing of learning application prototype and gaining insight into development of mobile application'/>
                </Col>
              </Row>
            </Parallax>
          </div>
        </Container>
        <FooterComponent/>
      </div>
    );
}