import './index.css'
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import News from "./pages/News.jsx";
import Events from "./pages/Events.jsx";
import Events1 from "./pages/EventSections/EventPage1.jsx";
import Events2 from "./pages/EventSections/EventPage2.jsx";
import Events3 from "./pages/EventSections/EventPage3.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
      <div>
          <Toaster toastOptions={{
              unstyled: false,
              classNames: {
                  error: 'text-red-400 bg-white border-white p-2',
                  success: 'text-green-400 bg-white border-white p-2',
                  warning: 'text-yellow-400 bg-white border-white p-2',
                  info: 'text-blue-400 bg-white border-white p-2',
              },
          }}
          />
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'/news'} element={<News/>}/>
              <Route path={'/events'} element={<Events/>}/>
              <Route path={'/projects'} element={<Projects/>}/>
              <Route path={'/events/1'} element={<Events1/>}/>
              <Route path={'/events/2'} element={<Events2/>}/>
              <Route path={'/events/3'} element={<Events3/>}/>
          </Routes>
          <Footer/>
      </div>
  )
}

export default App
