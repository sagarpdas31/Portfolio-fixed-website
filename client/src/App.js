import ScrollToTop from "react-scroll-to-top";
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Educaton/Education';
import Project from './pages/Projects/Project';
import Stack from './pages/Techstacks/Stack';
import WorkExp from './pages/WorkExp/WorkExp';
import { useTheme } from "./Context/ThemeContext";
import Tada from "react-reveal/Tada"
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />

        <div className="container">
          <About />
          <Education />
          <Stack />
          <Project />
          <WorkExp />
          <Contact />
        </div>
        <Tada>
          <div className="footer pb-3 ms-3 mb-12">
            <h4 className="text-center mb-10">Designed By 😍 SAGAR KUMAR DAS &copy; 2024</h4>
          </div>
        </Tada>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />

    </>
  );
}

export default App;
