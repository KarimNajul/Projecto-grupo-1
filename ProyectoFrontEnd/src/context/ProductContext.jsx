import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .then(console.log(products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
