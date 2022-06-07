import React, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'
import style from '../css/style.module.css'

function Stats() {
  const [followers,setFollowers]=useState();
  const [following,setFollowing]=useState();
  const [public_repos,setPublic]=useState();
  const [created_at,setCreated]=useState();
  const [updated_at,setUpdated]=useState();
  const [age,setCurrentAge]=useState();
 
  useEffect(()=>{
   
    
  fetch("https://api.github.com/users/Shahmali7")
  .then(res=>res.json())
  .then(data =>{
    setData(data)

  })
  },[])
  const setData=({followers,following,public_repos,created_at,updated_at})=>{
  setFollowers(followers);
  setFollowing(following);
  setPublic(public_repos)
  setCreated(created_at);
  setUpdated(updated_at);
  }
  
 
  const setAge=({age})=>{
  setCurrentAge(age)

  }
 
  useEffect(()=>{
    const years= new Date().getFullYear()
    const age =years-1999
    setAge({age})
  },[age])
  return (
    <React.Fragment>
  <Helmet>
     <title>Shahmali.7| Stats</title>
     <meta name="description" content="Helmet application" />
  </Helmet>
      <h2 style={{padding:'2rem'}}><strong>S T A T S</strong></h2>
      <hr/>
      <div style={{padding:'2rem'}}>
        <h3>Some Stats About Me</h3>
        <ul className={style.unList}>
          <li>
            Current Age<p>{age}</p>
          </li>
          <li>
            Country visited<p>4</p>
          </li>
          <li>
            Current City<p>Warsaw,Poland</p>
          </li>
        </ul>
        <h4>Some Stats GitHub Profile</h4>
        <ul className={style.unList}>
          <li>
            Followers <p>{followers}</p>
          </li>
          <li>
            Following <p>{following}</p>
          </li>
          <li>
            Repositories<p>{public_repos}</p>
          </li>
          <li>
            Created <p>{created_at}</p>
          </li>
          <li>
            Last update <p>{updated_at}</p>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Stats