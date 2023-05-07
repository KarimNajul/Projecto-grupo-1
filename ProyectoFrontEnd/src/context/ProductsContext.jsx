import axios from "axios";
import { useEffect,useState } from "react";


const ProductsContext = () => {
const [products, setProducts] = useState([]);
useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(products)
}

export default ProductsContext
  
