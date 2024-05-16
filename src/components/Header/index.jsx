import React from "react";
import logo from "../../assets/img/Лого.svg";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" width={120} />
          <div className="header--nav">
            <Link to={"/"}>Главная</Link>
            <Link to={"/zapros"}>Pro-Запрос</Link>
            <Link to={"/garaj"}>добавить </Link>
            <Link to={"/buyGaraj"}>Гараж </Link>
            <Link to={"/contact"}>Контакты </Link>
            <Link to={"/zakazy"}>Заказы</Link>
          </div>
          <a className="basket" onClick={() => nav("/basket")}>
            <FaCartShopping />
          </a>
          <a onClick={() => nav("/user")} className="user">
            <FaUser />
          </a>
        </div>
        <div className="input">
          <input type="text" placeholder="search" />
          <button className="search">search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
