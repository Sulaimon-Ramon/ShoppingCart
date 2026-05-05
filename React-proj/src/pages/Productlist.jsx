import { useState } from "react";
import products from "../data/product";
import { Productcard } from "../components/Productcard";  
import './Productlist.css'




const Productlist = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default")

  const CATEGORIES = [
    "All",
    "Home",
    "Kitchen",
    "Stationery",
    "Apparel",
    "Garden",
    "Clothing",
  ];

 const filtered = products
    .filter(
      (products) =>
        activeCategory === "All" || products.category === activeCategory,
    )
    .filter(
      (products) =>
        products.name.toLowerCase().includes(search.toLowerCase()) ||
        products.description.toLowerCase().includes(search.toLowerCase()),
    ).sort((a,b) => {
      if(sort === "price-asc") return a.price - b.price;
      if(sort === "price-desc") return b.price - a.price;
    });

  return (
    <main className="product-list">
      <div className="product-list__container">
        <div className="product-list__header">
          <h2 className="product-list__title">Shop Our Collection</h2>
          <p className="product-list__count">items</p>
        </div>
        <div className="product-list__toolbar">
          <input
            type="text"
            className="Product-list__search"
            placeholder="Search Products..."
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
          />
          <div className="product-list__categories">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`product-list__category-btn ${activeCategory === category ? `product-list__category-btn-active` : " "}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <select className="product-list__sort"
          value={sort}
          onChange={(e)=> setSort(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        {filtered.length === 0 ? (
          <div className="product-list__empty">
            <p className="product-list__empty-text">
              No products match your search.
            </p>
          </div>
        ) : (
          <div className="product-list__grid">
            {filtered.map((products) => (
              <Productcard key={products.id} products={products} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Productlist;
