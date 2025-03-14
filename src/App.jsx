import React from "react";
import Cards from "./components/Card/Card";
import Header from "./components/Header";
import Drower from "./components/Drower";
import Content from "./components/Content";

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
  return (
    <div className="wrapper">
      <Drower />
      <Header />
      <Content />
      <div className="content-cards">
        {Products.map((obj) => (
          <Cards  key={obj.name} title={obj.name} price={obj.price} imageUrl={obj.imageUrl} onClick={() =>console.log(obj) } />
         
           
        ))}
      </div>
    </div>
  );
}

export default App;
