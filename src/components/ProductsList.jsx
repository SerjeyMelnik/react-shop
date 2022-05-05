import React, { useContext } from 'react';
import { ShopContext } from '../contex';
import Product from './Product';

const ProductsList = () => {
	const {products} = useContext(ShopContext)
	return ( 
		<div className="products_list">
			{
				products.map(prod => {
					return <Product key={prod.mainId} 
									product={prod} 
									/>
				})
			}
		</div>
	 );
}
 
export default ProductsList;