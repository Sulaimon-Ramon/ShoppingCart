import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Productlist from "./pages/Productlist";
import { CartProvider } from "./context/Cartcontext";
import Cart from './pages/Cart'

const AboutPage = () => (
  <main className="about-page">
    <div className="about-container">
      <p className="about-eyebrow">Our Story</p>
      <h2 className="about-title">
        Made with <em>intention</em>
      </h2>
      <p className="about-body">
        Shopping cart was founded on a simple belif that Shopping online should
        be easy, fun, and accessible to everyone.
      </p>
    </div>
  </main>
);

const renderPage = (page, setPage) => {
  switch (page) {
    case "home":
      return (
        <>
          <Header setPage={setPage} />
          <Productlist />
        </>
      );
    case "about":
      return <AboutPage />;
    case "shop":
      return <Productlist />;
    case "cart":
      return <Cart setPage={setPage} />;
    default:
      return (
        <>
          <Header setPage={setPage} />
          <Productlist />
        </>
      );
  }
};

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <CartProvider>
      <div>
        <Navbar page={page} setPage={setPage} />
        <div className="content">{renderPage(page, setPage)}</div>
        <Footer setPage={setPage} />
      </div>
    </CartProvider>
  );
};

export default App;
