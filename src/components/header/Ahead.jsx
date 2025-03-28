import Header from "../header/Header";
import Drawer from "../Drawer/Drower";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AheadContext = createContext({});

function Head() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get(
          "https://67d67177286fdac89bc1ec9d.mockapi.io/Carts"
        );

        setCartItems(cartResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const onRemoveItem = (id) => {
    axios.delete(`https://67d67177286fdac89bc1ec9d.mockapi.io/Carts/${id}`);
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <AheadContext.Provider
      value={{ cartItems, setCartItems, onRemoveItem, totalPrice }}
    >
      <Drawer
        items={cartItems}
        onClose={() => setCartOpened(false)}
        onRemove={onRemoveItem}
        opened={cartOpened}
      />

      <Header onClickCart={() => setCartOpened(true)} />
    </AheadContext.Provider>
  );
}

export default Head;
