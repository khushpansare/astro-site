import React from "react";

// React-Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home";
import About from "./Components/About";
import Course from "./Components/Course";
import Service from "./Components/Service";
import Products from "./Components/Products";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Astrological_Survey_Form from "./Common/Astrological_Survey_Form";

function App() {
  return (
    <BrowserRouter>
      <Routes basename={"/astro-site"}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/astrological-session"
          element={<Astrological_Survey_Form />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
