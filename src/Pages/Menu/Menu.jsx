import Cards from "../../components/Card/Card.jsx";

export default function Menu({ items, searchValue, onAddToCart, cartItems, isLoading }) {
  
  const renderItems = () => {
    if (isLoading) {
      return [...Array(10)].map((_, index) => <Cards key={index} loading={true} />);
    }

    return items
      .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((item) => (
        <Cards
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onClickBtn={onAddToCart}
          added={cartItems.some((obj) => obj.id === item.id)}
          loading={false}
        />
      ));
  };

  return <div className="content-cards">{renderItems()}</div>;
}
