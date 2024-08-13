import React from "react";
import Contact from "./Contact.jsx";
import NavBar from "./NavBar.js";
import Home from "./Home.jsx";
import Services from "./Services.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <header>
          <NavBar />   
      </header>
      <Routes>
        <Route path ="/"  element = {<Home />} />;
        <Route path = "/contact us" element = {<Contact />}/>;
        <Route path = "/services" element = {<Services />}/>
      </Routes>

      </Router>
    </div>
  );
}

export default App;
