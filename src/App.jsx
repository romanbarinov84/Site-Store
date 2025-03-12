import React from "react";



function App() {
 return <div className="wrapper">
    <header>
      <div className="headerLeft">
      <img style={{width:260, margin:20}} src="./logo/logo-1.png" alt="" />
      <div className="headerInfo">
      <ul className="menu">
              <li><a href="#">Главная</a></li>
              <li><a href="#">Меню</a></li>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Доставка и Оплата</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Карта</a></li>
            </ul>
      </div>
      </div>
      
   
    <ul className="headerRight">
      <li><img width={30} src="/images/basket_icon-icons.com_66289.svg" alt="img-case" /><span> uah.</span></li>
      <li><img width={30} src="/images/user.png" alt="" /></li>
    </ul>
    </header>
    <div className="content">
      <h1>Продукція</h1>
      <div className="content-cards">
      <div className="card">
        <img width={250} src="src/assets/images/вареники/вареники з вишнею/vareniki-cherries-2-600x400.jpg" alt="" />
        <p>Вареники з вишнею</p>
        <div>
          <div className="card-price">
            <span>Price: </span>
            <b>235.00 uah</b>
          </div>
          <button>
            Додати у кошик
          </button>
        </div>
      </div>
      <div className="card">
        <img width={250} src="src/assets/images/вареники/вареники з капустою/vareniki-cabbage.jpg" alt="" />
        <p>Вареники з капустою</p>
        <div>
          <div className="card-price">
            <span>Price: </span>
            <b>235.00 uah</b>
          </div>
          <button>
            Додати у кошик
          </button>
        </div>
      </div>
      <div className="card">
        <img width={250} src="src/assets/images/вареники/Вареники с ливером/vareniki-liver.jpg" alt="" />
        <p>Вареники з картоплею</p>
        <div>
          <div className="card-price">
            <span>Price: </span>
            <b>235.00 uah</b>
          </div>
          <button>
            Додати у кошик
          </button>
        </div>
      </div>
      <div className="card">
        <img width={250} src="src/assets/images/вареники/Вареники с мясом/vareniki-meat.jpg" alt="" />
        <p>Вареники з мясом</p>
        <div>
          <div className="card-price">
            <span>Price: </span>
            <b>235.00 uah</b>
          </div>
          <button>
            Додати у кошик
          </button>
        </div>
      </div>
      </div>
    </div>
     </div>;
 
 
}

export default App;
