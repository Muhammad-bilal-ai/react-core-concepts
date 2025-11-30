export const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1999 },
    { id: 2, name: "Mobile", price: 999 },
    { id: 3, name: "Headphone", price: 99 },
    { id: 4, name: "Smartwatch", price: 299 },
    { id: 5, name: "Tablet", price: 499 },
    { id: 6, name: "Bluetooth Speaker", price: 149 },
  ];
  const productElements = products
    .filter((product) => product.price > 100)
    .map((product) => {
      return (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      );
    });
  return (
    <div>
      <h2>Our Products</h2>
      {productElements}
    </div>
  );
};
