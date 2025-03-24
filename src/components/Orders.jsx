import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header/Header";
import "./Orders.scss";

export function Orders() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsResponse = await axios.get("https://67d67177286fdac89bc1ec9d.mockapi.io/Carts");
        setItems(itemsResponse.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []); 

  return (
    <>
  <Header />
      <div className="ordersContainer">
        <h1 className="ordersTitle">Мої замовлення</h1>
        <ul className="ordersList">
          {items.map((item) => (
            <li key={item.id} className="orderItem">
              <div className="orderItemDetails">
                <h3 className="orderTitle">{item.title}</h3>
                <span className="orderPrice">{item.price} UAH</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
