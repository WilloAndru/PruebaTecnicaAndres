import "./ShoppingCart.css";
import Product from "../../components/Product/Product";

function ShoppingCart() {
  const data = JSON.parse(localStorage.getItem("cart") || "[]");

  return (
    <div className="cart">
      {data.map(
        (item: { id: string; image: string; title: string; price: string }) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              isCart={true}
            />
          );
        }
      )}
    </div>
  );
}

export default ShoppingCart;
