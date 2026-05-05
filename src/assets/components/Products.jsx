const Products = () => {
 const itemList = [
  { 
    id: 1, 
    name: "Ultra-Slim Laptop", 
    price: "96,995/-", 
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 2, 
    name: "DSLR Camera", 
    price: "70,000/-", 
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 3, 
    name: "Mechanical Keyboard", 
    price: "11,200/-", 
    img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80" 
  },
];
  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {itemList.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <button className="buy-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;