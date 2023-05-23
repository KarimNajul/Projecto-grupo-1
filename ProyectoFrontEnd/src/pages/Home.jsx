import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';

const Home = () => {
    const { products } = useContext(ProductContext);
    return (
        <div>
            <section>
                <div className='grid grid-cols-4 gap-8 mx-auto max-w-screen-xl'>
                    {products.map( (product) => (
                        <Product key={product.id} product={product} />
                        ))}
                </div>
            </section>
        </div>
    );
};

export default Home;