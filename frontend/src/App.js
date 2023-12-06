import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './SignInPage';
import SignUpPage from './Signuppage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
