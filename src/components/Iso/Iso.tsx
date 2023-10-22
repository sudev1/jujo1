import React from 'react';
import './iso.css';

const Iso: React.FC = () => {
  return (
    <div className="video-container">
      <p className="page-title">iso page</p>
      <div className="video-wrapper">
        <div className="video">
          <iframe title="v1" src="https://www.youtube.com/embed/TQL8w8bLAxQ"></iframe>
        </div>
        <div className="video">
          <iframe title="v2" src="https://www.youtube.com/embed/0Lo7X1WIrz8"></iframe>
        </div>
        <div className="video">
          <iframe title="v3" src="https://www.youtube.com/embed/2IzR_ClTE8Y"></iframe>
        </div>
        <div className="video">
          <iframe title="v4" src="https://www.youtube.com/embed/DmQWGH8r3oE"></iframe>
        </div>
      </div>
    </div>
    // <div>
    //   <p>iso page</p>
    //   <iframe width="500" height="315" title="v1" src="https://www.youtube.com/embed/TQL8w8bLAxQ"></iframe>
    //   <iframe width="500" height="315" title="v2" src="https://www.youtube.com/embed/0Lo7X1WIrz8"></iframe>
    //   <iframe width="500" height="315" title="v3" src="https://www.youtube.com/embed/2IzR_ClTE8Y"></iframe>
    //   <iframe width="500" height="315" title="v4" src="https://www.youtube.com/embed/DmQWGH8r3oE"></iframe>
    // </div>
  );
};

export default Iso;