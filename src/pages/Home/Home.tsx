import { useState, type Key } from "react";
import "./Home.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Product from "../../components/Product/Product";

const URL = "https://fakestoreapi.com/products";

function Home() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const productsForPage = 10;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const list = await axios.get(`${URL}`);
    setProducts(list.data);
  };

  return (
    <div className="home">
      <section className="searchSection">
        <h3>Busca lo que quieras</h3>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <FaSearch />
          </button>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </section>
      <main className="pagesProducts">
        {products &&
          products.map(
            (item: {
              id: string;
              image: string;
              title: string;
              price: string;
            }) => {
              return (
                <Product
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              );
            }
          )}
      </main>
    </div>
  );
}

export default Home;
