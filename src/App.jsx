import Header from "./components/header/Header";
import Drower from "./components/Drower";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Pages/Menu/Menu";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get("https://67d67177286fdac89bc1ec9d.mockapi.io/Items");
        const cartResponse = await axios.get("https://67d67177286fdac89bc1ec9d.mockapi.io/Carts");

        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post("https://67d67177286fdac89bc1ec9d.mockapi.io/Carts", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://67d67177286fdac89bc1ec9d.mockapi.io/Carts/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSearchValueChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drower items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Content onSearchValueChange={onSearchValueChange} />
      <Menu
        items={items}
        cartItems={cartItems}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onSearchValueChange={onSearchValueChange}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}

export default App;

       
       
      
     

