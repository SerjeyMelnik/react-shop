import React from 'react';
import Product from './Product';

const ProductsList = ({products,addToCart,showingMessage,setShowingMessage}) => {
	
	return ( 
		<div className="products_list">
			{
				products.map(prod => {
					return <Product key={prod.mainId} 
									product={prod} 
									addToCart={addToCart}
									showingMessage={showingMessage}
									setShowingMessage={setShowingMessage}/>
				})
			}
		</div>
	 );
}
 
export default ProductsList;