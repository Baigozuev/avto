import React from "react";
import { useSelector } from "react-redux";

const Mers = () => {
  const { category } = useSelector((s) => s.garaj);
  return (
    <div id="category">
      <div className="container">
        <div className="category">
          {category.map((el) => (
            <div className="category--card">
              <img src={el.url} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mers;
