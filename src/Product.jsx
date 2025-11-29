export const Product = ({ title, price, inStock, categories }) => {
  return (
    <>
      <h3>Product Name: {title}</h3>
      <p>Price: ${price}</p>
      <p>inStock: {inStock ? "Yes" : "No"}</p>
      <p>Categories: {categories.join(" , ")}</p>
    </>
  );
};
