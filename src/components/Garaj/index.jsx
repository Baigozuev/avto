import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/img/mersedes.png";
import { useDispatch, useSelector } from "react-redux";
import { addGaraj } from "../../redux/GarajCardSlice";
const Garaj = () => {
  const dispatch = useDispatch();
  const [modal2, setModal2] = useState(false);
  const [product, setProduct] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productData, setProductData] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productCountry, setProductCountry] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductImg(reader.result);
    reader.readAsDataURL(file);
  };

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

  const addGarajProduct = () => {
    if (
      productImg.trim() === "" ||
      product.trim() === "" ||
      productPrice.trim() === "" ||
      productData.trim() === "" ||
      productColor.trim() === "" ||
      productCountry.trim() === "" ||
      productCategory.trim() === ""
    ) {
      errorDark();
    } else {
      let newProduct = {
        id: 1,
        url: productImg,
        name: product,
        price: productPrice,
        data: productData,
        color: productColor,
        country: productCountry,
        category: productCategory,
      };
      setProduct("");
      setProductPrice("");
      setProductData("");
      setProductColor("");
      setProductCountry("");
      setProductCategory("");
      return dispatch(addGaraj(newProduct));
    }
  };

  return (
    <div id="garaj">
      <div className="container">
        <div className="garaj">
          <img src={logo} alt="img" />
          <button onClick={() => setModal2(!modal2)} className="car">
            Добавить новый автомобиль
          </button>
        </div>
        <div
          className="modal2"
          style={{
            display: modal2 ? "flex" : null,
          }}
        >
          <div className="text">
            <h1>Гараж</h1>
            <h3>Добавление автомобиля</h3>
          </div>
          <div className="modal2--nav">
            <input
              onChange={(e) => setProduct(e.target.value)}
              value={product}
              type="text"
              placeholder="Марка автомобиля"
            />
            <input
              onChange={(e) => setProductData(e.target.value)}
              value={productData}
              type="text"
              placeholder="Год выпуска. Пример: 2010 год"
            />
            <input
              onChange={(e) => setProductColor(e.target.value)}
              value={productColor}
              type="text"
              placeholder="Цвет. Пример: синий"
            />
            <input
              onChange={(e) => setProductCountry(e.target.value)}
              value={productCountry}
              type="text"
              placeholder="Страна сборки. Пример: Чехия"
            />
            <input
              className="input2"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
              type="text"
              placeholder="цена автомобиля"
            />

            <input
              className="input"
              onChange={(e) => setProductCategory(e.target.value)}
              value={productCategory}
              type="text"
              placeholder="категори"
            />
            <select onChange={(e) => setProductCategory(e.target.value)}>
              <option value="bmw">BMW</option>
              <option value="mers">MERS</option>
              <option value="camry">CAMRY</option>
              <option value="audi">AUDI</option>
              <option value="lexus">LEXUS</option>
              <option value="honda">HONDA</option>
            </select>
          </div>

          <div className="bottom">
            <input onChange={onChange} className="input2" type="file" />
            <button onClick={() => addGarajProduct()} className="bot">
              Добавить
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garaj;
