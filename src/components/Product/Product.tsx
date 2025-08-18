import { useState } from "react";
import "./Product.css";

function Product(props: {
  id: string;
  image: string;
  title: string;
  price: string;
  isCart: boolean;
}) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [isOnCart, setIsOnCart] = useState((): boolean => {
    const existing = cart.find(
      (item: { title: string }) => item.title === props.title
    );
    return !!existing;
  });

  const dataProduct = {
    id: props.id,
    image: props.image,
    title: props.title,
    price: props.price,
  };

  const handleAddToCart = () => {
    const cartUpdate = [...cart, dataProduct];
    localStorage.setItem("cart", JSON.stringify(cartUpdate));
    setIsOnCart(true);
  };

  const handleRemoveToCart = () => {
    const cartUpdate = cart.filter(
      (item: { title: string }) => item.title !== props.title
    );
    localStorage.setItem("cart", JSON.stringify(cartUpdate));
    window.location.reload();
  };

  return (
    <div className="product">
      <img src={props.image} alt="Image product" />
      <h5>{props.title}</h5>
      <p>{props.price}</p>
      <button
        disabled={!props.isCart && isOnCart}
        onClick={props.isCart ? handleRemoveToCart : handleAddToCart}
      >
        {!props.isCart
          ? !isOnCart
            ? "Añadir al carrito"
            : "Añadido"
          : "Eliminar del carrito"}
      </button>
    </div>
  );
}

export default Product;
