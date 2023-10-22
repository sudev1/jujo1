import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Uta from './components/Uta/Uta';
import Iso from './components/Iso/Iso';
import Komi from './components/Komi/Komi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uta" element={<Uta />} />
        <Route path="/iso" element={<Iso />} />
        <Route path="/komi" element={<Komi />} />
      </Routes>
    </Router>
  );
}

export default App;
