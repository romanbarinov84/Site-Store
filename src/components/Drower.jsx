export default function Drower({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          {" "}
          Кошик{" "}
          <img
            onClick={onClose}
            className="remove-btn"
            width={20}
            src="/images/btn-remove.png"
          />{" "}
        </h2>

        {items.length > 0 ? (
          <div className="items">
            {items.map((obj) => (
              <div className="cart-item">
                <img width={150} src={obj.imageUrl} />
                <div>
                  <p>{obj.name}</p>
                  <b> Price : {obj.price} uah </b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className="remove-btn"
                  width={10}
                  src="/images/btn-remove.png"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="cartEmpty">
            <img
              width={150}
              src="public/images/empty cart.jpg"
              alt="Empty cart logo"
            />
            <h2>Кошик порожній</h2>
            <p style={{ opacity: 0.5, margin: 0 }}>
              Зробіть вибір для замовлення
            </p>
            <button className="greenButton" style={{ color: "white" }}>
              Повернутися назад
            </button>
          </div>
        )}

        {items.length > 0 ? (
          <div className="cartTotal-block">
            <ul>
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
            <button className="greenButton">Оформити замовлення </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
