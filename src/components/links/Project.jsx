import React from 'react'
import {Card} from 'react-bootstrap'
import WeatherApp from '../photos/Weather.app.jpeg'
import style from '../css/style.module.css'
import CountDown from '../photos/CountDown.jpeg'
import ReactTodo from '../photos/React.Todo.jpeg'
import {Helmet} from 'react-helmet'

function Project() {
  return (
    <React.Fragment>
  <Helmet>
  <title>Shahmali.7| Project</title>
  <meta name="description" content="Project" />
  </Helmet>
    <h2 style={{padding:'2rem'}}>Projects</h2>
    <hr/>
    <div className={style.cards} >
      <Card style={{ width: '18rem',textAlign: 'center',}} >
        <Card.Img variant="top" src={WeatherApp} height/>
         <Card.Body>
           <Card.Title className={style.title}>Weather App</Card.Title>
            <Card.Text>
            This is my first application which I created this with api which I put this GitHub.More information at this link:
            </Card.Text>
            <a className={style.links} href='https://github.com/shahmali7/weather-app'>Source Code</a>
        </Card.Body>
      </Card>
    </div>
    <hr/>
    <div className={style.cards}>
      <Card style={{ width: '18rem',textAlign: 'center',}} >
        <Card.Img variant="top" src={CountDown} height/>
         <Card.Body>
           <Card.Title className={style.title}>CountDown Timer until 01/01/2023</Card.Title>
            <Card.Text >
            Time is important is for everyone therefore I decided to create something about time.More information at this link:
            </Card.Text>
            <a className={style.links} href='https://github.com/shahmali7/countdown_timer-until01.01.2023-'>Source Code</a>
        </Card.Body>
      </Card>
    </div>
    <hr/>
    <div className={style.cards}>
      <Card style={{ width: '18rem',textAlign: 'center',}} >
        <Card.Img variant="top" src={ReactTodo} height/>
         <Card.Body>
           <Card.Title className={style.title}> React Todo-List</Card.Title>
            <Card.Text>
            Creating Todo-List with React is more attractive to me as other Front End developers..More information at this link:
            </Card.Text>
            <a className={style.links} href='https://github.com/shahmali7/Todo-React'>Source Code</a>
        </Card.Body>
      </Card>
    </div>
    </React.Fragment>
  )
}

export default Project