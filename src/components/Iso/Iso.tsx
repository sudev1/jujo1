import React from 'react';
import './Iso.css';

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
  );
};

export default Iso;