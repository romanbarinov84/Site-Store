import Cards from "../../components/Card/Card.jsx";
import { AppContext } from "../../App.jsx";
import React, { useContext } from "react";


export default function Menu({ items, searchValue, onAddToCart, isLoading }) {

 
    const { isItemAdded } = useContext(AppContext);
  

  
  const renderItems = () => {
    if (isLoading) {
      return [...Array(10)].map((_, index) => <Cards key={index} loading={true} />);
    }

    return items
      .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((item) => (
        <Cards
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onClickBtn={onAddToCart}
          added={isItemAdded(item.id)}
          loading={false}
        />
      ));
  };

  return <div className="content-cards">{renderItems()}</div>;
}
