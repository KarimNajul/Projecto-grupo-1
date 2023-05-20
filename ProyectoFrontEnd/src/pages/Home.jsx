import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';

const Home = () => {
    const { products } = useContext(ProductContext);
    return (
        <div>
            <section>
                <div>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
