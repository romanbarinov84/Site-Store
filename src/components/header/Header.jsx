import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header(props) {
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
              <Link to="/Menu">
              <a href="#" onClick={toggleMenu}>
                Меню
              </a></Link>
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
              <a href="#">Про нас</a>
            </li>
            <li>
              <a href="#">Доставка и Оплата</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
            <li>
              <a href="#">Мапа магазинів</a>
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
          <span> uah.</span>
        </li>
        <li>
          <img width={30} height={30} src="/images/user.png" alt="User-logo" />
        </li>
      </ul>
    </header>
  );
}
