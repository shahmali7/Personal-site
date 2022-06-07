import React from 'react'
import{Link}from 'react-router-dom'
import styles from '../css/style.module.css'
import {Helmet} from 'react-helmet'

function Home() {
  
  return (
    <React.Fragment>
    <Helmet>
        <title>Shahmali.7 | Home</title>
        <meta name="description" content="Contact" />
     </Helmet>
    <h2 style={{textAlign:'center',padding:"2rem"}}><strong>About This Site</strong></h2>
    <p style={{paddingLeft:'2rem',paddingBottom:'2rem'}}>A BEAUTIFUL, RESPONSIVE, STATICALLY-GENERATED, REACT APPLICATION WRITTEN WITH MODERN JAVASCRIPT.</p>
    <hr/>
    <div>
    <p style={{padding:'2rem'}}>Welcome to my personal website.Please feel free to read more 
    <Link  to="/About" className={styles.links}>About me</Link>, or you can check out my <Link to="/Resume" className={styles.links}>Resume</Link>, <Link to="/Project" className={styles.links}>Projects</Link>, view site <Link to="/Stats" className={styles.links}>Statistics</Link>, or <Link to="/Contact" className={styles.links}>Contact</Link> me.
    </p>
    <h5 style={{padding:'2rem'}}>Source Available This Link: <a style={{color:'black',margin:'5px'}} href='https://github.com/shahmali7/Personal-site-with-react'>Personal-site</a></h5>
    </div>
    </React.Fragment>
  )
}

export default Home