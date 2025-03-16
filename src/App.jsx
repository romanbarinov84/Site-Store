
import Cards from "./components/Card/Card";
import Header from "./components/Header";
import Drower from "./components/Drower";
import Content from "./components/Content";
import { useEffect, useState } from "react";




function App() {
  const [items,setItems] = useState([])
  const [cartItems,setCartItems] = useState([])
 const [cartOpened, setCartOpened] = useState(false);


 useEffect(() => {
  fetch("https://67d67177286fdac89bc1ec9d.mockapi.io/Items")
  .then(response => response.json()) 
  .then(json => setItems(json));
 },[]);

const onAddToCart = (obj) =>{
 setCartItems(prev => [...prev,obj])
 
}
 
  return (
    <div className="wrapper">
       {cartOpened ? <Drower items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)}  />
      <Content />
      <div className="content-cards">
        {items.map((item) => (
          <Cards  
          key={item.id} 
          title={item.name} 
          price={item.price} 
          imageUrl={item.imageUrl} 
          onClickFavorite={() => console.log("add to to")}
          onClickBtn={(obj) => onAddToCart(obj)
          }
           />
         
           
        ))}
      </div>
    </div>
  );
}

export default App;
