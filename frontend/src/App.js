import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SIGN_IN_UP/SignInPage";
import SignUpPage from "./components/SIGN_IN_UP/Signuppage";
import Layout from "./components/MAIN_WEBSITE/Layout";
import Home from "./components/MAIN_WEBSITE/Home";

function App() {
  return (
    // <Home />
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="Layout" element={((<Layout />), (<Home />))} />
          {/* <Route path="Layout" element={<Home />} /> */}
          <Route path="Home" element={<Home />} />
          {/* <Route path={["Home", "Layout"]} Component={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
