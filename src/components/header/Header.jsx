import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { AheadContext } from "../header/Ahead.jsx";

export default function Header(props) {
  const { totalPrice } = useContext(AheadContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header>
      <div className="headerLeft">
        <img
          style={{ width: 260, margin: 20 }}
          src="./logo/logo-1.png"
          alt="Logo-logo"
        />
        <div className="headerInfo">
          <ul className="menu">
            <li>
              <Link to="/HeaderPage">Головна</Link>
            </li>
            <li>
              <>
                <Link to="/Menu">Меню</Link>
                <img
                  width={15}
                  onClick={toggleMenu}
                  src="src/assets/threeugl.png"
                  alt="MenuBtn"
                />
              </>
            </li>
            {isOpen && (
              <ul className="dropDown">
                <li>
                  <a href="#">Пельмені</a>
                </li>
                <li>
                  <a href="#">Вареники</a>
                </li>
                <li>
                  <a href="#">Фрикадельки</a>
                </li>
                <li>
                  <a href="#">Котлети</a>
                </li>
                <li>
                  <a href="#">Ковбаса</a>
                </li>
                <li>
                  <a href="#">Млинці</a>
                </li>
                <li>
                  <a href="#">Сирники</a>
                </li>
                <li>
                  <a href="#">Морозиво</a>
                </li>
              </ul>
            )}
            <li>
              <Link to="/AbtUs">Про нас</Link>
            </li>
            <li>
              <Link to="/Delivery">Доставка и Оплата</Link>
            </li>
            <li>
              <Link to="/Contacts">Контакти</Link>
            </li>
            <li>
              <Link to="/Map">Мапа магазинів</Link>
            </li>
          </ul>
        </div>
      </div>

      <ul className="headerRight">
        <li>
          <img
            width={30}
            height={30}
            src="/images/heart.png"
            alt="heart-logo"
          />
        </li>

        <li onClick={props.onClickCart}>
          <img
            width={30}
            height={30}
            src="/images/basket_icon-icons.com_66289.svg"
            alt="img-case"
          />
          <span> {totalPrice} .uah</span>
        </li>

        <li>
          <Link to="/Orders">
            <img
              width={30}
              height={30}
              src="/images/user.png"
              alt="User-logo"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}
