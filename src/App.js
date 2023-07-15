import React from "react";
import Route from "./pages/route";
import "./index.css";
import "./assets/css/style.css";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Route />
      </ParallaxProvider>
    </div>
  );
}

export default App;
