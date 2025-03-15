import {  useState } from "react";
import "./Card.scss"
import React from "react";


export default function Cards(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

 
  
  return (
    <div className="card">
      <div className="favorite" onClick={props.onClickFavorite}>
        <img width={20} src="/images/heart.png" alt="heart-unliked" />
      </div>

      <img width={250} src={props.imageUrl} alt="images" />
      <h4>{props.title}</h4>
      <div>
        <div className="card-price">
          <span>Price:</span>
          <b>{props.price} uah</b>
        </div>
        <button className="button" onClick={onClickPlus} style={{color:isAdded ? "red" : "orange"}}>{isAdded ? "У кошику" : "Додати у кошик"}</button>
      </div>
    </div>
  );
}
