import { BrowserRouter, Routes, Route, Link } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import Destinations from "./components/Destinations"
import Offers from "./components/Offers"
import Dining from "./components/Dining"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element = {<Home />} />
          <Route path="/rooms" element = {<Rooms />} />
          <Route path="/destinations" element = {<Destinations />} />
          <Route path="/offers" element = {<Offers />} />
          <Route path="/dining" element = {<Dining />} />
          <Route path="/aboutUs" element = {<AboutUs />} />
          <Route path="/contact" element = {<Contact />} />

        </Routes>


      </BrowserRouter>




    </>
  )
}

export default App