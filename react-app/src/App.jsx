
import './App.css'
import './Course'
import Course from './Course'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <Navbar />
      
      <div id = "course_cards">
      <Course course = "HTML - Beginner Course..." explanation = " Covered the fundamental concepts like different type of Tags, forms, patterns etc.." prize = "Prize - $18" show = "True" />
      <Course course = "css - Beginner Course..." explanation = " Covered the fundamental concepts like typography, colors, transition and animation etc.." prize = "Prize - $20" show = "True" />
      <Course course = "JavaScript - Beginner Course..." explanation = " Covered the fundamental concepts like core concepts, DOM, Event Handling etc.." prize = "Prize - $30" show = "True"  />

      </div>
      
    </>
  )
}

export default App
