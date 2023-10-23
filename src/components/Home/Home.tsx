import React, { useState, useEffect } from 'react';
import top1Image from '../../materials/top1.jpg';
import top2Image from '../../materials/top2.jpg';
import './Home.css';

const Home: React.FC = () => {
  const imagePaths = [top1Image, top2Image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 5000);

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされたときにインターバルをクリア
    };
  }, []);

  const currentImagePath = imagePaths[currentImageIndex];

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/uta">uta</a></li>
            <li><a href="/iso">iso</a></li>
            <li><a href="/komi">komi</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <img src={currentImagePath} alt="Slideshow Image" style={{ width: '100%', height: '350px' }} />
      </main>
      <footer>
        <p>&copy; 2023 jujo</p>
      </footer>
    </div>
  );
};

export default Home;