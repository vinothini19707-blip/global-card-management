import React, { useState } from "react";
import "./App.css";

const initialProducts = [
  { id: 1, name: "Classic Tote Bag", category: "Accessories", price: 899, oldPrice: 1299, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80", tag: "BESTSELLER", rating: 4.8 },
  { id: 2, name: "Minimal Wrist Watch", category: "Accessories", price: 1499, oldPrice: 1999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", tag: "TRENDING", rating: 4.7 },
  { id: 3, name: "Wireless Headphones", category: "Electronics", price: 1999, oldPrice: 2499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", tag: "SALE", rating: 4.9 },
  { id: 4, name: "Everyday Sneakers", category: "Fashion", price: 2199, oldPrice: 2999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", tag: "POPULAR", rating: 4.6 },
  { id: 5, name: "Premium Sunglasses", category: "Fashion", price: 799, oldPrice: 1199, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", tag: "NEW", rating: 4.5 },
  { id: 6, name: "Travel Backpack", category: "Accessories", price: 1799, oldPrice: 2399, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80", tag: "FEATURED", rating: 4.8 },
  { id: 7, name: "Smart Speaker", category: "Electronics", price: 1299, oldPrice: 1699, image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80", tag: "SALE", rating: 4.5 },
  { id: 8, name: "Ceramic Coffee Mug", category: "Home", price: 499, oldPrice: 699, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80", tag: "NEW", rating: 4.7 },
  { id: 9, name: "Desk Lamp", category: "Home", price: 999, oldPrice: 1499, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80", tag: "POPULAR", rating: 4.4 },
  { id: 10, name: "Leather Wallet", category: "Accessories", price: 699, oldPrice: 999, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80", tag: "SALE", rating: 4.6 },
  { id: 11, name: "Cotton Shirt", category: "Fashion", price: 1199, oldPrice: 1599, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80", tag: "TRENDING", rating: 4.5 },
  { id: 12, name: "Portable Camera", category: "Electronics", price: 3499, oldPrice: 4299, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80", tag: "FEATURED", rating: 4.9 },
  { id: 13, name: "Soft Cushion", category: "Home", price: 599, oldPrice: 899, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80", tag: "NEW", rating: 4.4 },
  { id: 14, name: "Running Shoes", category: "Fashion", price: 1899, oldPrice: 2499, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80", tag: "POPULAR", rating: 4.7 },
  { id: 15, name: "Bluetooth Speaker", category: "Electronics", price: 1599, oldPrice: 2199, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80", tag: "SALE", rating: 4.6 },
  { id: 16, name: "Plant Decor", category: "Home", price: 399, oldPrice: 599, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80", tag: "NEW", rating: 4.8 },
  { id: 17, name: "Travel Bottle", category: "Accessories", price: 549, oldPrice: 799, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80", tag: "FEATURED", rating: 4.5 }
];

const money = (price) => "₹" + Number(price).toLocaleString("en-IN");

// NAVBAR
function Navbar({ count, onCart, search, setSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        🛍 global<span>cart.</span>
      </a>

      <div className="navlinks">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-actions">
        <form className="nav-search" onSubmit={handleSearch}>
          <span>⌕</span>
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search !== "" && (
            <button type="button" onClick={() => setSearch("")}>
              ✕
            </button>
          )}

          <button type="submit" className="search-submit">
            Search
          </button>
        </form>

        <button type="button" className="cart-button" onClick={onCart}>
          🛒 Cart <span className="cart-count">{count}</span>
        </button>
      </div>
    </nav>
  );
}

// HERO
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">✦ A LITTLE JOY IN EVERY ORDER</span>

        <h1>
          Find your next
          <br />
          <span>favorite thing.</span>
        </h1>

        <p>
          Thoughtfully picked essentials for your everyday life.
          Discover things you love, all in one place.
        </p>

        <a href="#products" className="hero-btn">
          Explore collection →
        </a>

        <div className="hero-note">✦ 17 curated products and counting</div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85"
          alt="Shopping collection"
        />
      </div>
    </section>
  );
}

// CATEGORY FILTER
function CategoryFilter({ category, setCategory }) {
  const categories = ["All", "Fashion", "Accessories", "Electronics", "Home"];

  return (
    <div className="category-list">
      {categories.map((item) => (
        <button
          key={item}
          type="button"
          className={category === item ? "category active" : "category"}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

// PRODUCT CARD
function ProductCard({ product, onAdd, wishlist, onWishlist }) {
  const isLiked = wishlist.includes(product.id);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/600x600/F6F1E9/7D5A50?text=Global+Cart";
          }}
        />

        <span className="product-badge">{product.tag}</span>

        <button
          type="button"
          className={`wishlist ${isLiked ? "liked" : ""}`}
          onClick={() => onWishlist(product.id)}
        >
          {isLiked ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="rating">⭐ {product.rating}</div>

        <div className="price-row">
          <strong>{money(product.price)}</strong>
          <del>{money(product.oldPrice)}</del>
        </div>

        <button
          type="button"
          className="add-button"
          onClick={() => onAdd(product)}
        >
          + Add to cart
        </button>
      </div>
    </article>
  );
}

// PRODUCT GRID
function ProductGrid({ products, onAdd, wishlist, onWishlist }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
          wishlist={wishlist}
          onWishlist={onWishlist}
        />
      ))}
    </div>
  );
}

// QUANTITY
function QuantityController({ quantity, update }) {
  return (
    <div className="quantity-control">
      <button type="button" onClick={() => update(quantity - 1)}>−</button>
      <span>{quantity}</span>
      <button type="button" onClick={() => update(quantity + 1)}>+</button>
    </div>
  );
}

// CART ITEM
function CartItem({ item, updateQty, remove }) {
  return (
    <div className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/200x200/F6F1E9/7D5A50?text=Product";
        }}
      />

      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <span>{money(item.price)}</span>

        <QuantityController
          quantity={item.quantity}
          update={(value) => updateQty(item.id, value)}
        />
      </div>

      <button
        type="button"
        className="remove-btn"
        onClick={() => remove(item.id)}
        title="Remove product"
      >
        🗑
      </button>
    </div>
  );
}

// CART SUMMARY
function CartSummary({ subtotal, close }) {
  return (
    <div className="cart-summary">
      <div className="summary-line">
        <span>Subtotal</span>
        <strong>{money(subtotal)}</strong>
      </div>

      <div className="summary-line shipping">
        <span>Shipping</span>
        <span>Free</span>
      </div>

      <div className="summary-line total">
        <span>Total</span>
        <strong>{money(subtotal)}</strong>
      </div>

      <button
        type="button"
        className="checkout-btn"
        onClick={() => alert("Demo checkout only")}
      >
        Proceed to checkout →
      </button>

      <button type="button" className="continue-btn" onClick={close}>
        Continue shopping
      </button>
    </div>
  );
}

// CART DRAWER
function CartDrawer({ cart, close, updateQty, remove }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="drawer-overlay" onClick={close}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div>
            <h2>Your Shopping Bag</h2>
            <p>{totalItems} items selected</p>
          </div>

          <button type="button" className="icon-btn" onClick={close}>
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div style={{ fontSize: "45px" }}>🛒</div>
            <h3>Your cart is empty</h3>
            <p>Find something you'll love.</p>
            <button type="button" onClick={close}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQty={updateQty}
                  remove={remove}
                />
              ))}
            </div>

            <CartSummary subtotal={subtotal} close={close} />
          </>
        )}
      </aside>
    </div>
  );
}

// THEME SWITCHER
function ThemeSwitcher({ theme, setTheme }) {
  const themes = [
    { id: "cream", color: "#F6F1E9", name: "Cream" },
    { id: "rose", color: "#F3D9D0", name: "Rose" },
    { id: "sage", color: "#DCE5D1", name: "Sage" },
    { id: "blue", color: "#D7E5F0", name: "Blue" }
  ];

  return (
    <div className="theme-switcher">
      <span>COLOR HUNT THEMES</span>
      <div className="theme-options">
        {themes.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`theme-dot ${theme === item.id ? "selected" : ""}`}
            onClick={() => setTheme(item.id)}
            title={item.name}
            style={{ background: item.color }}
          />
        ))}
      </div>
    </div>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-brand">
        <div className="logo">🛍 global<span>cart.</span></div>
        <p>Little finds. Big happiness.</p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#about">About</a>
      </div>

      <p className="copyright">© 2026 Global Cart. Made with care.</p>
    </footer>
  );
}

// MAIN APP
export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [theme, setTheme] = useState("cream");
  const [wishlist, setWishlist] = useState([]);
  const [customProducts, setCustomProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Fashion",
    price: "",
    image: ""
  });

  // ADD TO CART
  const addToCart = (product) => {
    setCart((previousCart) => {
      const existing = previousCart.find((item) => item.id === product.id);

      if (existing) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  // UPDATE QUANTITY
  const updateQty = (id, quantity) => {
    if (quantity < 1) {
      setCart((previous) => previous.filter((item) => item.id !== id));
      return;
    }

    setCart((previous) =>
      previous.map((item =>
        item.id === id ? { ...item, quantity } : item
      ))
    );
  };

  // REMOVE FROM CART
  const removeItem = (id) => {
    setCart((previous) => previous.filter((item) => item.id !== id));
  };

  // WISHLIST
  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  // ADD CUSTOM PRODUCT
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!newProduct.name.trim() || !newProduct.price || !newProduct.image.trim()) {
      alert("Please fill all product details!");
      return;
    }

    if (Number(newProduct.price) <= 0) {
      alert("Please enter a valid price!");
      return;
    }

    const product = {
      id: Date.now(),
      name: newProduct.name.trim(),
      category: newProduct.category,
      price: Number(newProduct.price),
      oldPrice: Number(newProduct.price),
      image: newProduct.image.trim(),
      tag: "NEW",
      rating: 5
    };

    setCustomProducts((previous) => [...previous, product]);

    setNewProduct({
      name: "",
      category: "Fashion",
      price: "",
      image: ""
    });

    setCategory("All");
    setSearch("");
    alert("Product added successfully!");
  };

  // ALL PRODUCTS
  const allProducts = [...initialProducts, ...customProducts];

  // SEARCH + CATEGORY FILTER
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;

    const searchMatch =
      product.name.toLowerCase().includes(search.trim().toLowerCase());

    return categoryMatch && searchMatch;
  });

  // CART COUNT
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className={`app theme-${theme}`}>
      <div className="announcement">
        FREE SHIPPING ON ORDERS ABOVE ₹999 ✦ HAPPY SHOPPING
      </div>

      <Navbar
        count={cartCount}
        onCart={() => setCartOpen(true)}
        search={search}
        setSearch={setSearch}
      />

      <Hero />

      {/* CUSTOM PRODUCT SECTION */}
      <section className="custom-product-section">
        <div className="custom-product-heading">
          <span className="eyebrow">YOUR OWN COLLECTION</span>
          <h2>Add a new product</h2>
          <p>Add your favourite products to Global Cart.</p>
        </div>

        <form className="custom-product-form" onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />

          <select
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          >
            <option>Fashion</option>
            <option>Accessories</option>
            <option>Electronics</option>
            <option>Home</option>
          </select>

          <input
            type="number"
            min="1"
            placeholder="Price ₹"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />

          <input
            type="url"
            placeholder="Product image URL"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />

          <button type="submit" className="custom-add-btn">
            + Add Product
          </button>
        </form>
      </section>

      {/* SHOP */}
      <main className="shop-section" id="products">
        <div className="shop-heading">
          <div>
            <span className="eyebrow">THE COLLECTION</span>
            <h2>Things you'll love.</h2>
            <p>Little things that make everyday special.</p>
          </div>

          <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </div>

        <div className="filter-row">
          <CategoryFilter category={category} setCategory={setCategory} />
          <div className="product-count">☷ {filteredProducts.length} products</div>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            onAdd={addToCart}
            wishlist={wishlist}
            onWishlist={toggleWishlist}
          />
        ) : (
          <div className="no-products">
            No products found. Try another search.
          </div>
        )}
      </main>

      <Footer />

      {/* CART DRAWER */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          close={() => setCartOpen(false)}
          updateQty={updateQty}
          remove={removeItem}
        />
      )}
    </div>
  );
}