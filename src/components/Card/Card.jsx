import {  useState } from "react";
import "./Card.scss"
import React from "react";
import ContentLoader from "react-content-loader"

export default function Cards({imageUrl,title,id,price,onClickBtn, added = false,loading = false}) {
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
    {loading ?   <ContentLoader 
      speed={2}
      width={150}
      height={265}
      viewBox="0 0 180 265"
      backgroundColor="rgb(243, 243, 243)"
      foregroundColor="rgb(255, 255, 255)"
      
    >
      <rect x="5" y="12" rx="7" ry="7" width="170" height="150" /> 
      <rect x="71" y="183" rx="0" ry="0" width="1" height="0" /> 
      <rect x="20" y="247" rx="7" ry="7" width="119" height="16" /> 
      <rect x="10" y="209" rx="7" ry="7" width="137" height="19" /> 
      <rect x="21" y="177" rx="12" ry="12" width="113" height="19" />
    </ContentLoader> : <> <div className="favorite" onClick={onClickFavorite}>
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
  </div></> }
     
    </div>
  );
}
