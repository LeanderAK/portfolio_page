import { Card, Button, Modal, Row, Col, Container,  } from 'react-bootstrap';

import { React, useState } from 'react';
import { ArrowUpRightSquare, Link } from 'react-bootstrap-icons';

function ProjectCard(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    
    return (
      <div className='project-card m-4 p-0'>
        <Card className=''>
            <Card.Body className='p-0'>  
              <a className='project-card-hitbox'>
                  <img className='project-card-image' onClick={handleShow} src={props.src} alt="Image"/> 
                  <span className='project-card-title p-3'>
                    {props.title}
                  </span>
                  <span className='project-card-subtitle p-3'>
                    {props.subtitle}
                  </span>
              </a>
            </Card.Body>
        </Card>
        
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <Container>
              <Row>
                <div style={{height:'200px;'}}>
                  <Card.Img className=' rounded mb-2' variant="top" src={props.src}/>
                </div>
              </Row>
              <Row>
                <h5 className='h5'>{props.subtitle}</h5>
              </Row>
              <Row>
                <h2>{props.title}</h2>
                
                <a href={props.contentLink} className='ms-3' target='_blank'><ArrowUpRightSquare color="white" size={32}/></a>
              </Row>
              <Row>
                <p>
                  {props.content}
                </p>
              </Row>
            </Container>
           
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Body>
        </Modal>
      </div>
      );
  }

  export default ProjectCard;