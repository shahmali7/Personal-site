import React from 'react'
import { NavLink } from 'react-router-dom'
import Education from './res.links/Education'
import Experience from './res.links/Experience'
import Skills from './res.links/Skills'
import Style from  '../css/style.module.css'
import {Helmet} from 'react-helmet'


function Resume() {
  return (
    <React.Fragment>
    <div>
     <Helmet>
        <title>Shahmali.7| Resume</title>
        <meta name="description" content="Resume" />
     </Helmet>
    <div>
    <h2 style={{padding:'2rem'}}>Resume</h2>
    <div >
        <NavLink  to="/Resume/Education" style={{paddingLeft:"2rem"}} className={Style.links}>Education</NavLink>
        <NavLink  to="/Resume/Experience" style={{paddingLeft:'1rem'}} className={Style.links}>Experience</NavLink>
        <NavLink  to="/Resume/Skills" style={{paddingLeft:'1rem'}} className={Style.links}>Skills</NavLink>
    </div>
        <hr/>
    </div>
        <Education/>
        <hr/>
        <Experience/>
        <hr/>
        <Skills/>
    </div>
    </React.Fragment>
  )
}

export default Resume
