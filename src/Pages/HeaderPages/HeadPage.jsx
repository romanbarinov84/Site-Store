import "./HeaderPage.scss";
import React,{useState} from "react";
import Header from "../../components/header/Header.jsx";
import Drower from "../../components/Drower.jsx";



export default function HeaderPage() {
  const [cartOpened, setCartOpened] = useState(false);


  const toggleCart = () => {
    setCartOpened((cartOpened) => !cartOpened);
  };
  return (
    <>
       <Header onClickCart={toggleCart} />
       {cartOpened && <Drower  onClose={() => setCartOpened(false)} />}
     
      <div className="HeaderPage-content">
        <div className="HeaderPage-topContent">
          <h2>
            При замовленні більше ніж на 800 гривень доставка по місту
            безкоштовна
          </h2>
        </div>
       
       <div className="HPcontent-content">
          <h2>«Галя Балувана»</h2>
          <h3>в Броварах</h3>
          <p>Домашні напівфабрикати.</p>
          <p>Ми готуємо, ви відпочиваєте!</p>
          </div>
          <div className="HPcontent-bottom">
            <div className="HPcontent-left">
              <h2>Відкрите виробництво</h2>
              <p>Готуємо вручну за прозорим склом</p>
            </div>
            <div className="HPcontent-center">
              <h2>Широкий асортимент</h2>
            <p>Різноманітні варіанти сніданків, обідів та вечер</p></div>
            <div className="HPcontent-right">
            <h2>Висока якість</h2>
            <p>Свіжі, натуральні та екологічні інгредієнти</p>
            </div>
          </div>
          <div className="Hpcontent-side">
            <h1>Улюблені страви ,</h1>
            <h2>які смакують по-домашньому</h2>
          </div>
          </div>
   
    </>
  );
}
