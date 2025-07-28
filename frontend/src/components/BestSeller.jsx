import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  // This component is used to display the best-selling products.
  // It currently renders a single ProductCard component with an empty product object.
  
  const {products} = useAppContext();

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
      <div>
         <ProductCard product={products[0]} /> 
      </div>
    </div>
  )
}

export default BestSeller
