import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";

const Productos = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <section>
        <div className="grid gap-8 mx-auto max-w-screen-xl sm:grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Productos;
