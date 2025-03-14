import "./Card.scss"



export default function Cards(props) {
  
  
  return (
    <div className="card">
      <div className="favorite">
        <img width={20} src="/images/heart.png" alt="heart-unliked" />
      </div>

      <img width={250} src={props.imageUrl} alt="images" />
      <h4>{props.title}</h4>
      <div>
        <div className="card-price">
          <span>Price:</span>
          <b>{props.price} uah</b>
        </div>
        <button className="button" onClick={props.onClick}>Додати у кошик</button>
      </div>
    </div>
  );
}
