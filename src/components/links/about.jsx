import React from 'react'
import {Helmet} from 'react-helmet'

function About() {
  return (
    <React.Fragment>
     <Helmet>
        <title>Shahmali.7| About</title>
        <meta name="description" content="About" />
     </Helmet>
    <h2 style={{padding:'2rem'}}>About Me</h2>
    <hr/>
    <div style={{paddingLeft:'1rem',paddingBottom:'1rem'}}>
    <h4>Introduction</h4>
    <p>I am Front end developer.I build some projects for companies and people who like which affect their lifestyle. I am particularly interested in projects that touch health and safety, imaging, social impact, and aerospace.If you think I can be helpful to you or would like to meet me, please feel free to get in touch.</p>
    <br/>
    <h4>Some History</h4>
    <ul>
      <li>
      I loved playing football when i was a kid.
      </li>
      <li>
      While studying at school, I showed high results in competitions in mathematics, geography and, computers. I even won the country in mathematics in 2016.
      </li>
      <li>
      In 2018, I became the chairman of the telebe youth of the Faculty of Economics in the new Azerbaijan Party.
      </li>
      <li>
      In 2019, I became a member of the telebe youth organization and started volunteering
      </li>
      <li>
      After graduating from university, I decided to study abroad for a master's degree in computer science as a child, and I accepted Poland.
      </li>
    </ul>
    <br/>
    <h4>I like</h4>
    <ul>
      <li>
        Playing football
      </li>
      <li>
        Travelling
      </li>
      <li>
        Books
      </li>
      <li>
        Skiing
      </li>
      <li>
        Photography
      </li>
      <li>
        Running
      </li>
      <li>
        Watching movie
      </li>
    </ul>
    </div>
    </React.Fragment>
  )
}

export default About