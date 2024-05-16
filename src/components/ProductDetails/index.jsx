import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addBasket } from "../../redux/AddBasketSlice";


const ProductDetails = () => {
  const nav = useNavigate()
  const { details } = useSelector((s) => s.garaj);
  return (
    <div id="details">
      <div className="container">
        <div className="details">
          
       <Zoom>
         <img src={details.url} alt="img" />
       </Zoom>
          <div className="details--card">
            <h1><span> марка</span>: {details.name}</h1>
            <h2><span> год</span>: {details.data}</h2>
            <h3> <span>свет</span>: {details.color}</h3>
            <h4><span>страна</span>: {details.country}</h4>
            <h5> <span>цена</span>: $ {details.price}</h5>
          <a onClick={() => {
             nav("/basket")
          }}><FaOpencart/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
