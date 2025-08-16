import "./Product.css";

function Product(props: { image: string; title: string; price: string }) {
  const handleAddToCart = () => {
    const dataProduct = {
      image: props.image,
      title: props.title,
      price: props.price,
    };
    localStorage.setItem("shoppingCartData", JSON.stringify(dataProduct));
  };

  return (
    <div className="product">
      <img src={props.image} alt="Image product" />
      <h5>{props.title}</h5>
      <p>{props.price}</p>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
}

export default Product;
