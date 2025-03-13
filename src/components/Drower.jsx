export default function Drower() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2>
          Кошик{" "}
          <img className="remove-btn" width={20} src="/images/btn-remove.png" />
        </h2>

        <div className="items">
          <div className="cart-item">
            <img
              width={150}
              src="src/assets/images/вареники/вареники з вишнею/vareniki-cherries-2-600x400.jpg"
            />
            <div>
              <p>вареники з вишнею</p>
              <b>235 uah</b>
            </div>
            <img
              className="remove-btn"
              width={10}
              src="/images/btn-remove.png"
            />
          </div>
          <div className="cart-item">
            <img
              width={150}
              src="src/assets/images/вареники/вареники з вишнею/vareniki-cherries-2-600x400.jpg"
            />
            <div>
              <p>вареники з вишнею</p>
              <b>235 uah</b>
            </div>
            <img
              className="remove-btn"
              width={10}
              src="/images/btn-remove.png"
            />
          </div>

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
        </div>
      </div>
    </div>
  );
}
