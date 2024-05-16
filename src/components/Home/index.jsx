import React, { useState } from "react";
import home from "../../assets/img/home.svg";
import mechanik from "../../assets/img/mechanik.svg";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { Slider } from "../../Data";
const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home--text">
            <h1>
              Предлагаем только <br />
              качественные <span>запчасти </span>
              <br />
              для иномарок
            </h1>
            <div className="home--text__btn">
              <button>Посмотреть каталог</button>
              <h5>Более 50 товаров</h5>
            </div>
          </div>

          <img src={Slider[count]} alt="img"  />

          <a className="icon">
            <BiChevronLeft onClick={() => setCount(count - 1)} />
          </a>
          <a className="icon2">
            <BiChevronRight onClick={() => setCount(count + 1)} />
          </a>
        </div>
        <div className="bottons">
          <button className="bot">Высокое качество</button>
          <button className="bot">Лучшие на рынке</button>
          <button className="bot">Большой выбор</button>
        </div>
        <div className="text">
          <div className="text--p">
            <h2>О компании</h2>
            <p>
              Компания Mannex: продажа запчастей и аксессуаров высокого <br />
              качества <br /> <br />
              Компания Mannex начала свою деятельность недавно, но уже успела{" "}
              <br />
              заслужить хорошую репутацию среди покупателей. Количество <br />
              положительных отзывов в адрес нашей компании от благодарных <br />
              клиентов растет с каждым днем. В нашем интернет-магазине вы <br />
              можете купить необходимые запчасти и аксессуары для своего <br />
              автомобиля по выгодным ценам. <br /> <br />
              Большой ассортимент <br /> <br />В каталоге нашего магазина вы
              найдете автозапчасти для Lexus, <br />
              Mazda или иных автомобилей. Среди широкого ассортимента
            </p>
            <button className="read">Читать дальше</button>
          </div>
          <img src={mechanik} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
