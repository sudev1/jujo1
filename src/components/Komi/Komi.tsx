import React from 'react';
import './Komi.css';

const Komi: React.FC = () => {
  return (
    <div className="video-container">
      <p className="page-title">komi page</p>
      <div className="video-wrapper">
        <div className="video">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/z16OOKBb240"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Komi;