

export default function Cards() {
  return (
    <div className="card">
      <div className="favorite">
        <img width={20} src="/images/heart.png" alt="heart-unliked" />
      </div>

      <img
        width={250}
        src="src/assets/images/вареники/вареники з вишнею/vareniki-cherries-2-600x400.jpg"
        alt=""
      />
      <p>Вареники з вишнею</p>
      <div>
        <div className="card-price">
          <span>Price: </span>
          <b>235.00 uah</b>
        </div>
        <button>Додати у кошик</button>
      </div>
    </div>
  );
}
