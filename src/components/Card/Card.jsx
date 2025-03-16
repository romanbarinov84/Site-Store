import {  useState } from "react";
import "./Card.scss"
import React from "react";


export default function Cards({onClickFavorite,imageUrl,title,price,onClickBtn}) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onClickBtn({imageUrl,title,price})
    setIsAdded(!isAdded);
  }

 
  
  return (
    <div className="card">
      <div className="favorite" onClick={onClickFavorite}>
        <img  src="/images/heart.png" alt="heart-unliked" />
      </div>

      <img width={250} src={imageUrl} alt="images" />
      <h4>{title}</h4>
      <div>
        <div className="card-price">
          <span>Price:</span>
          <b>{price} uah</b>
        </div>
        <button className="button" onClick={onClickPlus} style={{color:isAdded ? "red" : "orange"}}>{isAdded ? "У кошику" : "Додати у кошик"}</button>
      </div>
    </div>
  );
}
