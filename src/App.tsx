import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ShoppingCart />} path="/shoppingCart" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
