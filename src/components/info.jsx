import React, { useContext } from "react";
import { AppContext } from "../App";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className="cartEmpty">
      <img width={150} src={image} alt="Empty cart logo" />
      <h2>{title}</h2>
      <p style={{ opacity: 0.5, margin: 0 }}>{description}</p>
      <button
        onClick={() => setCartOpened(false)}
        className="greenButton"
        style={{ color: "white" }}
      >
        Повернутися назад
      </button>
    </div>
  );
};

export default Info;
