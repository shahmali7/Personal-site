import React from 'react'

import {FaInstagram,FaGithub,FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsTelephone } from 'react-icons/bs'
import {Helmet} from 'react-helmet'

function Contact() {
  return (
    <React.Fragment>
     <Helmet>
        <title>Shahmali.7 | Contact</title>
        <meta name="description" content="Contact" />
     </Helmet>

      <h2 style={{padding:"2rem"}}><strong>Contact</strong></h2>
      <hr/>
      <p style={{padding:"1.5rem"}}>Feel free to get in touch.<br/>
      <BsTelephone/> +48 576 123 040</p>
      <div style={{display:"flex",flexDirection:'row',paddingLeft:'2rem'}}>
        <a style={{color:'black',margin:'5px'}} href='https://www.instagram.com/shahmali.7/'><FaInstagram/></a>
        <a style={{color:'black',margin:'5px'}}  href='https://github.com/shahmali7'><FaGithub/></a>
        <a style={{color:'black',margin:'5px'}}  href='https://www.linkedin.com/in/shahmali-mustafayev-905698230/'><FaLinkedinIn/></a>
        <a style={{color:'black',margin:'5px'}}  href='https://www.facebook.com/sahmali.mustafayev.1'><FaFacebookF/></a>
        <a style={{color:'black',margin:'5px'}}  href='https://www.instagram.com/shahmali.7/'><SiGmail/></a>
      </div>
    </React.Fragment>
  )
}

export default Contact