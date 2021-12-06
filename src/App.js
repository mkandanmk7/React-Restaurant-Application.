import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { css } from "@emotion/react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  //states
  const [loading, setLoading] = useState(false);

  //loader css
  const override = css`
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
    border-color: #ffcddf;
    /* margin-top: 20%; */
  `;

  //useEffect for loading
  useEffect(() => {
    setLoading(true);
    //after 5sec loading off;
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <PropagateLoader
          css={override}
          loading={loading}
          size={40}
          color={"#00f340"}
        />
      ) : (
        <>
          <Navbar />
          <Home />
          <Product />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
