import React from "react";

const Home = () => {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's Great Time for A Good Taste of Burger</h3>
        <h1>
          <span>BURGER</span> FOR
          <br />
          WEEK
        </h1>
        <p className="details">
          A hamburger (or burger for short) is a food, typically considered a
          sandwich, consisting of one or more cooked patties—usually ground
          meat, typically beef—placed inside a sliced bread roll or bun.
        </p>
        <div className="header-btns">
          <a href="#!" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
