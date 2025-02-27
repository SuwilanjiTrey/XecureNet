export default function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: 'Product A', price: 20 },
    { id: 2, name: 'Product B', price: 30 },
    { id: 3, name: 'Product C', price: 40 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <span>{product.name}</span>
          <span>${product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}