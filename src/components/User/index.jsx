import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const [admin, setAdmin] = useState("");
  const [pas, setPas] = useState("");

  const errorDark = () => {
    toast.error("заполните пустые ячейки !!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const addAdmin = () => {
    if (admin.trim() === "" || pas.trim() === "") {
      errorDark();
    } else if (admin === "emiravto@gmail.com" && pas === "12345") {
      setAdmin("");
      setPas("");
      nav("/");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [surName, setSurName] = useState("");
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");

  const addNext = () => {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      repeat.trim() === "" ||
      surName.trim() === "" ||
      name.trim() === "" ||
      middleName.trim() === ""
    ) {
      errorDark()
    } else if (
      email === "emiravto@gmail.com" &&
      password === "12345" &&
      repeat === "12345" &&
      surName === "Baigozuev" &&
      name === "emir" &&
      middleName === "Abdirashitovich"
    ) {
      setEmail("");
      setPassword("");
      setRepeat("");
      setSurName("");
      setName("");
      setMiddleName("");
      nav("/");
    }
  };
  return (
    <div id="user">
      <div className="container">
        <div className="user">
          <h1>Страница авторизации в личный кабинет</h1>
          <br />

          <h5>
            Доступ на страницу гаража доступен только для зарегистрированных
            пользователей
          </h5>
          <div className="user--nav">
            <input
              value={admin}
              onChange={(e) => setAdmin(e.target.value)}
              type="text"
              placeholder="E-mail"
            />
            <input
              value={pas}
              onChange={(e) => setPas(e.target.value)}
              type="password"
              placeholder="..."
            />

            <button onClick={() => addAdmin()} className="bot">
              Войти
            </button>
            <h2>Ещё не зарегистрированы?</h2>
            <h3 onClick={() => setModal(!modal)} className="regis">
              Зарегистрироваться
            </h3>
            <ToastContainer />
          </div>
          <div
            className="modal"
            style={{
              display: modal ? "flex" : null,
            }}
          >
            <h1 className="modal-text">
              Страница регистрации личного кабинета
            </h1>
            <div className="modal--inputs">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="E-mail"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Пароль"
              />
              <input
                onChange={(e) => setRepeat(e.target.value)}
                type="password"
                placeholder="Повтор пароля"
              />
              <input
                onChange={(e) => setSurName(e.target.value)}
                type="text"
                placeholder="Фамилия"
              />
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Имя"
              />
              <input
                onChange={(e) => setMiddleName(e.target.value)}
                type="text"
                placeholder="Отчество"
              />
            </div>
            <button onClick={() => addNext()} className="modal-button">
              Зарегистрироваться
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
