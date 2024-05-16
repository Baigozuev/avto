import React from "react";

const Zapros = () => {
  return (
    <div id="zapros">
      <div className="container">
        <div className="zapros">
          <h1>Запрос продавцу.</h1>
          <div className="zapros--blocks">
            <h2>Ваши данные</h2>
            <div className="block">
              <input type="text" placeholder="Фамилия Имя Отчество" />
              <input type="text" placeholder="Ваш город" />
              <input type="text" placeholder="Ваш телефон" />
            </div>
          </div>
          <div className="zapros--blocks2">
            <h2>Об иномарке</h2>
            <div className="block">
              <input type="text" placeholder="Марка" />
              <input type="text" placeholder="Модель" />
              <input type="text" placeholder="Год выпуска" />
              <input type="text" placeholder="Объём двигателя" />
              <input type="text" placeholder="*VIN/FRAME-код**	" />
              <input type="text" placeholder="Тип КПП" />
              <input type="text" placeholder="Тип кузова/число дверей" />
              <input type="text" placeholder="Привод" />

            </div>
          </div>
          <div className="zapros--blocks3">
            <h2>Необходимые запчасти</h2>
            <div className="block">
              <input type="text" placeholder="Напишите какие детали вас инетерсуют" />
 
            </div>
          </div>
          <button className="click">Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default Zapros;
