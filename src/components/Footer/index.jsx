import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

import logo from "../../assets/img/Лого.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--img">
            <img src={logo} alt="img" />
            <h2>2020 © Mannex Все права защищены</h2>
            <h2>Публичная оферта</h2>
          </div>
          <div className="footer--text">
            <h1>Основное</h1>
            <Link to={"/"}>Главная</Link>
            <Link>О компании </Link>
            <Link to={"/zapros"}>Pro-Запрос </Link>
            <Link to={"/garaj"}>Гараж </Link>
            <Link to={"/contact"}>Контакты </Link>
            <Link to={"/zakazy"}>Заказы</Link>
          </div>
          <div className="footer--ak">
            <h1>Аккаунт</h1>
            <Link to={"/basket"}>Корзина </Link>
            <Link>Баланс </Link>
            <Link>Мои заказы </Link>
            <Link to={"/zapros"}>Запрос продавцу </Link>
            <Link>Сравнение </Link>
          </div>
          <div className="footer--con">
            <h1>Контакты</h1>
            <div className="sms">
            <a>  <RiMessage2Fill /></a>
              <h3>Главная </h3>
            </div>
            <div className="tel">
              <BsFillTelephoneFill />
              <h3>Pro-Запрос </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
