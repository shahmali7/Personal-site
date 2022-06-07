import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Header from "./components/mainLinks/Header";
import About from "./components/links/about";
import Resume from "./components/links/resume";
import Contact from "./components/links/contact";
import Home from "./components/links/home";
import Project from "./components/links/Project";
import Stats from "./components/links/stats";

import Education from "./components/links/res.links/Education";
import Experience from "./components/links/res.links/Experience";
import Skills from "./components/links/res.links/Skills";






function App() {
  return (
    <React.Fragment>
  <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Header/>} >
      <Route  path="/Home" element={<Home/>} />
      <Route path="About" element={<About/>} />
      <Route path="Resume" element={<Resume/>}>
        <Route path="education" element={<Education/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Skills" element={<Skills/>}/>
      </Route>
      <Route path="Project" element={<Project/>} />
      <Route path="Stats" element={<Stats/>} />
      <Route path="Contact" element={<Contact/>} />
    </Route>
      <Route path="*" element={<div>This Site is not exist</div>}/>
    </Routes>
 </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
