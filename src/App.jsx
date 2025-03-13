import React from "react";
import Cards from "./components/Card";
import Header from "./components/Header";
import Drower from "./components/Drower";
import Content from "./components/Content";

function App() {
 return <div className="wrapper">
  
   <Drower/>
  

   <Header/>
    <Content/>
      
      <div className="content-cards">
     <Cards/>
     <Cards/>
     <Cards/>
     
     
      
      </div>
    </div>
     
 
 
}

export default App;
