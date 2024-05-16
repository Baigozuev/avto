import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/img/basket.svg";
const Basket = () => {
  const { basket } = useSelector((s) => s.basket);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <img src={logo} alt="img" />
          <p>Пока что здесь ничего нет, перейдите в <br />
           каталог и добавьте интересующий товар</p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
