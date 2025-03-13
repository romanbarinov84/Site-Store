

export default function Header(){

    return (
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
    )
}