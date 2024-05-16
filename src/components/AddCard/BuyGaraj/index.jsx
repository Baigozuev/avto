import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  productDeatils } from "../../../redux/GarajCardSlice";

const BuyGaraj = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s.garaj);
  return (
    <div className="buy">
      {products.map((el) => (
        <div className="buy--card">
          <img
            src={el.url}
            alt="img"
            onClick={() => {
              dispatch(productDeatils(el));
              nav("/productDetails");
            }}
          />
          <h5 className="category">
            {el.category}
          </h5>

          {/* <div className="buy--card__text">
            <h1>
              <span> марка</span> : {el.name}
            </h1>
            <h2>
              <span> год</span> :{el.data}{" "}
            </h2>
            <h3>
              {" "}
              <span>свет</span> :{el.color}
            </h3>
            <h4>
              {" "}
              <span>страна</span>: {el.country}
            </h4>
            <h5>
              {" "}
              <span>цена</span> $ {el.price}
            </h5>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default BuyGaraj;
