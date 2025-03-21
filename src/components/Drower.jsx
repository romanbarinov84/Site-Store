import { useState, useContext } from "react";
import Info from "./info";
import { AppContext } from "../App";

export default function Drower({ onClose, onRemove, items = [] }) {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const { setCartItems } = useContext(AppContext);

  const totalPrice = items.reduce((sum, obj) => sum + obj.price, 0);
  const tax = (totalPrice * 0.01).toFixed(2); 

  const onClickOrder = () => {
    setIsOrderComplete(true);
    setCartItems([]);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Кошик
          <img
            onClick={onClose}
            className="remove-btn"
            width={20}
            src="/images/btn-remove.png"
            alt="Закрити"
          />
        </h2>

        {isOrderComplete ? (
          <Info
            title="Замовлення оформлено!"
            description="Ваше замовлення буде доставлено найближчим часом."
            image="src/assets/aproved.png"
          />
        ) : items.length > 0 ? (
          <>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cart-item">
                  <img width={150} src={obj.imageUrl} alt={obj.name} />
                  <div>
                    <p>{obj.name}</p>
                    <b> Price : {obj.price} uah </b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="remove-btn"
                    width={10}
                    src="/images/btn-remove.png"
                    alt="Видалити"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotal-block">
              <ul>
                <li className="cartTotal-block-li">
                  <span className="cartTotal-block-span">Сумма :</span>
                  <b>{totalPrice.toFixed(2)} uah</b>
                </li>
                <li className="cartTotal-block-li">
                  <span className="cartTotal-block-span">Податок :</span>
                  <b>{tax} uah</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформити замовлення
              </button>
            </div>
          </>
        ) : (
          <Info
            title="Кошик порожній"
            description="Зробіть вибір для замовлення"
            image="/images/empty cart.jpg"
          />
        )}
      </div>
    </div>
  );
}
