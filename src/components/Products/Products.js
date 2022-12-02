import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ProductContext } from '../../store-context/product-context';
import Layout from '../Layout/Layout';
import { useStore } from './../../hook-store/store';
import ProductItem from './ProductItem';

const Products = () => {
  // const products = useSelector((state) => state.teaShop.products);
  const state = useStore()[0];

  return (
    <Layout>
      <div className='ui segment'>
        <div className='ui list'>
          {state.products.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              isFavorite={item.isFavorite}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
