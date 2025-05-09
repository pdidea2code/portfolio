import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./routes/AppRoutes";
import SmoothFollower from "./components/SmoothFollower";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAbove768, setIsAbove768] = useState(window.innerWidth > 768);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleResize = () => {
      setIsAbove768(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading ? (
          <div className="loading">
            <div className="loadingspinner">
              <div id="square1"></div>
              <div id="square2"></div>
              <div id="square3"></div>
              <div id="square4"></div>
              <div id="square5"></div>
            </div>
          </div>
        ) : (
          <>
            <Approutes />
            {isAbove768 && <SmoothFollower />}
          </>
        )}
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
