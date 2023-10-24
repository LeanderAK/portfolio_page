import React from 'react';

function FrameworkIcon(props) {
    return (
      <div className={`framework-icon-container p-0 ${props.classes}`}>
        <img className='framework-icon ${props.classes}' style={{ "width" : props.width }} src={props.src}/>
        <br />
        <span className='framework-icon-title'> {props.name} </span>
      </div>
    );
  }

  export default FrameworkIcon;