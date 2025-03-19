
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Drower from "./components/Drower";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Pages/HeaderPages/Menu/Menu";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://67d67177286fdac89bc1ec9d.mockapi.io/Items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://67d67177286fdac89bc1ec9d.mockapi.io/Carts")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://67d67177286fdac89bc1ec9d.mockapi.io/Carts", obj);
    setCartItems((prev) => [...prev, obj]);
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
        <Drower
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <Content onSearchValueChange={onSearchValueChange} />
      <Menu items={items} searchValue={searchValue} setSearchValue={setSearchValue} onSearchValueChange={onSearchValueChange} onAddToCart={onAddToCart}/>
      <Footer/>
    </div>
  );
}

export default App;
