import { useState } from 'react'
import Header from './component/Header'
import './App.css'
import Content from './component/Content'
import Footer from './component/Footer'
import SideMenu from './component/SideMenu'

function App() {
  const [open,setOpen] = useState(false)
  const [menuName,setMenuName] = useState('island')
  return (
    <>
      <div>
        <section className={open ? "main-structure active" : "main-structure"}>
          <Header open={open} setOpen={setOpen}/>
          <Content menuName={menuName}></Content>
          <Footer></Footer>
        </section>
        <SideMenu setMenuName={setMenuName}></SideMenu>
      </div>
    </>
  )
}

export default App
