import {  useState } from "react";
import "./Card.scss"
import React from "react";


export default function Cards({imageUrl,title,id,price,onClickBtn, added = false}) {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite,setIsFavorite] = useState(true)

  const onClickPlus = () => {

    
    onClickBtn({ imageUrl,title,price,id})
    setIsAdded(!isAdded);
  }

 const onClickFavorite = () => {
  setIsFavorite(!isFavorite)
 }
  
  return (
    <div className="card">
      <div className="favorite" onClick={onClickFavorite}>
        <img  src={ isFavorite ? "/images/heart.png"  : "public/images/liked heart.png" } alt="heart-unliked"/>
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
