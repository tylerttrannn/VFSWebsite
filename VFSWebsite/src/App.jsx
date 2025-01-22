import './index.css'
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import News from "./pages/News.jsx";
import Events from "./pages/Events.jsx";

function App() {
  return (
      <div>
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'/news'} element={<News/>}/>
              <Route path={'/events'} element={<Events/>}/>
              <Route path={'/projects'} element={<Projects/>}/>
          </Routes>
      </div>
  )
}

export default App
