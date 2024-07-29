import Intro from "./Intro/Intro";
import Services from "./Services/Services";
import "../App.css";
import Experience from "./Experience/Experience";
import Works from "./Works/Works";
import Testimonial from "./Testimonials/Testimonial";
import Contact from "./Contact/Contact";
import { useContext } from "react";
import { themeContext } from "../Context";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Caro from "./Caro";
import Partner from "./Partner";
function HomePage() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Caro />
      <Testimonial />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
