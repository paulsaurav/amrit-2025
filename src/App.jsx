import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
// import CMTAcknowledgment from './pages/CMTAcknowledgment'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/cmt_acknowledgment" element={<CMTAcknowledgment />} /> */}
    </Routes>
  );
};

export default App;
