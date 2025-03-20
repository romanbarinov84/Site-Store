import Cards from "../../components/Card/Card.jsx";

export default function Menu({ items, searchValue, onAddToCart,cartItems }) {
  return (
    <>
      <div className="content-cards">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickBtn={(obj) => onAddToCart(obj)}
              added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
            />
          ))}
      </div>
    </>
  );
}
