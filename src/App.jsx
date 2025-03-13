import React from "react";



function App() {
 return <div className="wrapper">
  <div className="overlay">
    <div className="drawer">
      <h2>Кошик <img className="remove-btn" width={20} src="/images/btn-remove.png"/></h2>
      

      <div className="items">
      <div className="cart-item">
        <img width={150} src="src/assets/images/вареники/вареники з вишнею/vareniki-cherries-2-600x400.jpg"/>
        <div>
          <p>вареники з вишнею</p>
          <b>235 uah</b>
        </div>
        <img className="remove-btn" width={10} src="/images/btn-remove.png"/>
      </div>
      <div className="cart-item">
        <img width={150} src="src/assets/images/вареники/вареники з вишнею/vareniki-cherries-2-600x400.jpg"/>
        <div>
          <p>вареники з вишнею</p>
          <b>235 uah</b>
        </div>
        <img className="remove-btn" width={10} src="/images/btn-remove.png"/>
      </div>
       
       <div className="cartTotal-block">
       <ul >
        <li className="cartTotal-block-li">
          <span className="cartTotal-block-span">Сумма :</span>
          <div></div>
          <b>235.00 uah</b>
          </li>
        <li className="cartTotal-block-li">
          <span className="cartTotal-block-span">Податок :</span>
          <div></div>
          <b>35.00 uah</b>
          </li>
       </ul>
       <button className="greenButton">Оформити замовлення  </button>
       </div>
      
      </div>

     
    </div>
  </div>

    <header>
      <div className="headerLeft">
      <img style={{width:260, margin:20}} src="./logo/logo-1.png" alt="Logo-logo" />
      <div className="headerInfo">
      <ul className="menu">
              <li><a href="#">Головна</a></li>
              <li><a href="#">Меню</a></li>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Доставка и Оплата</a></li>
              <li><a href="#">Контакти</a></li>
              <li><a href="#">Мапа магазинів</a></li>
            </ul>
      </div>
      </div>
      
   
    <ul className="headerRight">
      <li><img width={30} src="/images/heart.png" alt="heart-logo" /></li>
      <li><img width={30} src="/images/basket_icon-icons.com_66289.svg" alt="img-case" /><span> uah.</span></li>
      <li><img width={30} src="/images/user.png" alt="User-logo" /></li>
    </ul>
    </header>
    <div className="content">
      <div className="search">
        <h1>Продукція</h1>
        <div className="search-block">
          <img width={30} src="/images/search-icon.png" alt="search-logo" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      
      <div className="content-cards">
      <div className="card">
        <div className="favorite">
            <img width={20} src="/images/heart.png" alt="heart-unliked" />
        </div>
      
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
        <img width={250} src="src/assets/images/вареники/вареники з капустою/vareniki-cabbage.jpg" alt="images" />
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
        <img width={250} src="src/assets/images/вареники/Вареники с ливером/vareniki-liver.jpg" alt="images" />
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
        <img width={250} src="src/assets/images/вареники/Вареники с мясом/vareniki-meat.jpg" alt="images" />
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
