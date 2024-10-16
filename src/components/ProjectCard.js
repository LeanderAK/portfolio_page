import { Card, Button, Modal, Row, Col, Container,  } from 'react-bootstrap';

import { React, useState } from 'react';
import { ArrowUpRightSquare, Link } from 'react-bootstrap-icons';

function ProjectCard(props) {  
    return (
      <div>
        <Card className='w-100 h-100'>
            <Card.Body className='p-0 project-card-body text-center'>  
              <a className='project-card-hitbox'>
                  <span className='project-card-title p-3'>
                    {props.title}
                    <span className='timeline-subtitle'>
                      //{props.date}
                    </span>
                  </span>
                  <span className='project-card-subtitle p-3'>
                    {props.subtitle}
                  </span>
                  <div className='project-card-image-container'>                   
                    <img className='project-card-image' src={props.src}></img>
                  </div>
              </a>
            </Card.Body>
        </Card>
      </div>
      );
  }

  export default ProjectCard;