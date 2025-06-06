import { useState } from 'react'
import './App.css'

function App() {
  const [open,setOpen] = useState(false)
  const [menuName,setMenuName] = useState('island')
  return (
    <>
      <div>
        <section className={open ? "main-structure active" : "main-structure"}>
        <header>
            <a href="#">
                <div className="logo">Travel</div>
            </a>
            <div className="menu-logo" onClick={()=>{
              setOpen(!open)
            }}></div>
        </header>
        <div className="content">
          <video className='active' src="/assets/videos/island.mp4" autoPlay muted loop></video>
          <video src="/assets/videos/spring.mp4" autoPlay muted loop></video>
          <video src="/assets/videos/summer.mp4" autoPlay muted loop></video>
          <video src="/assets/videos/autumn.mp4" autoPlay muted loop></video>
          <video src="/assets/videos/winter.mp4" autoPlay muted loop></video>
          <div className="video-overlay"></div>
          <section className="text-description">
             <h1></h1>
             <h2></h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus dolores sunt minima id dolorum placeat nemo atque, porro accusamus tempora praesentium! In modi voluptate magni laboriosam est, eveniet molestiae!</p>
             <a href="#"></a>
          </section>
        </div>
        <footer>
            <a href="#"><img src="/assets/icons/facebook.svg" alt="facebook"/></a>
            <a href="#"><img src="/assets/icons/instagram.svg" alt="instagram"/></a>
            <a href="#"><img src="/assets/icons/twitter.svg" alt="twitter"/></a>
        </footer>
    </section>
    <section className="aside-menu">
       <button onClick={()=>{
        setMenuName('island')
       }}>Island</button>
       <button onClick={()=>{
        setMenuName('spring')
       }}>Spring</button>
       <button onClick={()=>{
        setMenuName('summer')
       }}>Summer</button>
       <button onClick={()=>{
        setMenuName('autumn')
       }}>Autumn</button>
       <button onClick={()=>{
        setMenuName('winter')
       }}>Winter</button>
    </section>
      </div>
    </>
  )
}

export default App
