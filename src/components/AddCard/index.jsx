import React from "react";
import { useSelector } from "react-redux";
import BuyGaraj from "./BuyGaraj";

const AddToGaraj = () => {
  const { products } = useSelector((s) => s.addGaraj);
  return (
    <div id="add">
      <div className="container">
        <div className="add">
          {products.map((el) => (
            <BuyGaraj el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddToGaraj;
