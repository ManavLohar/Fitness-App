import React from "react";
import "../Style.css";

import Hero from "./Hero/Hero";
import Programs from "./Programs/Programs";
import Reasons from "./Reasons/Reasons";

function App() {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}

export default App;
