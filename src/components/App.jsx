import React from "react";
import "../Style.css";

import Hero from "./Hero/Hero";
import Programs from "./Programs/Programs";
import Reasons from "./Reasons/Reasons";
import Plans from "./Plans/Plans";

function App() {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
