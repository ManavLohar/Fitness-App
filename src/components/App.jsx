import React from "react";
import "../Style.css";

import Hero from "./Hero/Hero";
import Programs from "./Programs/Programs";
import Reasons from "./Reasons/Reasons";
import Plans from "./Plans/Plans";
import Testimonials from "./Testimonials/Testimonials";
import Join from "./Join/Join";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
