import { useMemo, useState } from "react";
import "./Home.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Product from "../../components/Product/Product";

const URL = "https://fakestoreapi.com/products";

function Home() {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsForPage = 10;
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const list = await axios.get(`${URL}`);
    setProducts(list.data);
    setTotalPages(Math.ceil(list.data.length / productsForPage));
  };

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * productsForPage;
    return products.slice(start, start + productsForPage);
  }, [currentPage, products]);

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
      {products && (
        <main className="pagesProducts">
          {currentData.map(
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
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {i + 1}
            </button>
          ))}
        </main>
      )}
    </div>
  );
}

export default Home;
