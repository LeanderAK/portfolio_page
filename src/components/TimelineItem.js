import React from 'react';
import { Parallax } from 'react-scroll-parallax';

function TimelineItem(props) {
    return (
      <div className={`${props.classes} timeline-item mb-3`}>
        <span className='timeline-date mb-1'>
            {props.date}
        </span>
        <span className='timeline-title p-1 mb-1'>
            {props.title}
            <span className='timeline-subtitle'>
              //{props.subtitle}
            </span>
        </span>
        <span className='timeline-description'>
            {props.description}
        </span>
      </div>
    );
  }

  export default TimelineItem;