import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import ConferenceTracks from './pages/ConferenceTracks';
// import CMTAcknowledgment from './pages/CMTAcknowledgment'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/call-for-paper' element={<ConferenceTracks />} />
      {/* <Route path="/cmt_acknowledgment" element={<CMTAcknowledgment />} /> */}
    </Routes>
  );
};

export default App;
