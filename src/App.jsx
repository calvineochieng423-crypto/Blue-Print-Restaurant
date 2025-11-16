import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Herosection from "./Components/Herosection";
import Main from "./Components/Main";
import Navigation from "./Components/Navigation";
import "./index.css";

export default function App() {
  return(
    <>
    <Navigation />
    <Herosection />
    <Main />
    <CTA />
    <Footer />
    </>
  )
}