import './index.css'
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.js";
import Projects from "./pages/Projects.jsx";
import News from "./pages/News.js";
import Events from "./pages/Events.js";
import Events1 from "./pages/EventSections/EventPage1";
import Events2 from "./pages/EventSections/EventPage2.js";
import Events3 from "./pages/EventSections/EventPage3.js";
import Footer from "./components/Footer.jsx";
import UpcomingEventsSection from './pages/UpcomingEventsSection/UpcomingEventsSection';
import SuccessPage from './pages/HomeSections/StripeSucess';
import CancelPage from './pages/HomeSections/StripeCancel';
import StudentQuarter from './pages/StudentSection/StudentQuarter';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-grow">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/events'} element={<Events/>}/>
                    <Route path={'/upcoming-events'} element={<UpcomingEventsSection/>}/>
                    <Route path={'/student-quarter'} element={<StudentQuarter/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                    <Route path={'/events/1'} element={<Events1/>}/>
                    <Route path={'/events/2'} element={<Events2/>}/>
                    <Route path={'/events/3'} element={<Events3/>}/>
                    <Route path={'/success'} element={<SuccessPage/>}/>
                    <Route path={'/cancel'} element={<CancelPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
  }
  

export default App