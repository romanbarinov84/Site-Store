import "./Footer.scss"




export default function Footer(){


    return(
        <div className="footer">
         <div className="footer-content" >

            <div className="footer-logo">
             <img className="footer-img" src="public/logo/baluvanahalia.png" alt="Logo" />
              <p>Домашні напівфабрикати.</p>
             <p style={{marginLeft:20}}>Ми готуємо ви відпочиваєте</p>
            </div>

            <div className="footer-content__list">
            <h3>Навігація :</h3>
            <ul className="footer-list__left">
               
                <li>Відгуки</li>
                <li>Вакансії</li>
                <li>Контакти</li>
                <li>Карта магазинів</li>
            </ul>
            </div>
            <div className="footer-contacts">
                <h2>Контакти :</h2>
                <ul className="footer-list__left">
                    <li>Tel ()</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
                
            </div>
         </div>
        </div>
    )
}