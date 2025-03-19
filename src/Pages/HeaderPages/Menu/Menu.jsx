import Cards from "../../../components/Card/Card.jsx";

export default function Menu({items,searchValue,onAddToCart}){

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
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={() => console.log("add to to")}
              onClickBtn={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
        </>
    )
}