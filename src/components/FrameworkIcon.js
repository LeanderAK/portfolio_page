import React from 'react';

function FrameworkIcon(props) {
    return (
      <div className={`framework-icon-container p-1 mt-2 ${props.classes}`}>
        <img className='framework-icon pb-2 ${props.classes}' style={{ "width" : props.width }} src={props.src}/>
        <br />
        <span className='framework-icon-title'> {props.title} </span>
      </div>
    );
  }

  export default FrameworkIcon;