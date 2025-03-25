import "./HeaderPage.scss";

export default function HeaderPage() {
  return (
    <>
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
            <p>Різноманітні варіанти сніданків, обідів та вечерь</p>
          </div>
          <div className="HPcontent-right">
            <h2>Висока якість</h2>
            <p>Свіжі, натуральні та екологічні інгредієнти</p>
          </div>
        </div>

        <div className="Hpcontent-side">
          <h1>Улюблені страви,</h1>
          <h2>які смакують по-домашньому</h2>
        </div>
        <div className="delivery-contents">
          <div className="delivery-text">
            <h2>Доставка за вашою адресою</h2>
            <p>
              Відправляємо напівфабрикати до дверей 5 разів на тиждень з
              понеділка по суботу. У межах 
              міста Бровари, а також Дніпровського району Киева доставка
              становить 90 грн (мінімальна сума замовлення – 800 грн). Для
              віддалених районів Києва доставка коштуватиме 180 грн (мінімальна
              сума замовлення – 1500 грн). Приймаємо оплату готівкою, картою та
              переказом за реквізитами. Детальніше читайте тут .
             </p>
            </div>
          <div className="delivery-image">
            <img src="src/assets/delivery.png" alt="logo delivery" />
          </div>
        </div>
      </div>
    </>
  );
}
