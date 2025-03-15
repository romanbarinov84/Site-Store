
import Cards from "./components/Card/Card";
import Header from "./components/Header";
import Drower from "./components/Drower";
import Content from "./components/Content";
import { useState } from "react";


const Products = [
  {
    name: "Вареники з вишнею",
    price: 235.0,
    imageUrl:
      "src/assets/images/вареники/вареники з вишнею/vareniki-cherries-2-600x400.jpg",
  },
  {
    name: "Вареники з капустою",
    price: 195.0,
    imageUrl:
      "src/assets/images/вареники/вареники з капустою/vareniki-cabbage.jpg",
  },
  {
    name: "Вареники з лівером",
    price: 210.0,
    imageUrl:
      "src/assets/images/вареники/Вареники с ливером/vareniki-liver.jpg",
  },
  {
    name: "Вареники з мясом",
    price: 255.0,
    imageUrl: "src/assets/images/вареники/Вареники с мясом/vareniki-meat.jpg",
  },
];

function App() {
 const [cartOpened, setCartOpened] = useState(false);
  return (
    <div className="wrapper">
       {cartOpened ? <Drower onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)}  />
      <Content />
      <div className="content-cards">
        {Products.map((obj) => (
          <Cards  
          key={obj.name} 
          title={obj.name} 
          price={obj.price} 
          imageUrl={obj.imageUrl} 
          onClickFavorite={() => console.log("add to to")}
          onClickBtn={() =>console.log(obj) }
           />
         
           
        ))}
      </div>
    </div>
  );
}

export default App;
