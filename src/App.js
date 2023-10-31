import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
