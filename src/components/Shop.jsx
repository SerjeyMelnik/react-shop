import React, { useContext, useEffect } from 'react';
import {API_KEY} from '../config'
import Cart from './Cart';
import LanguageSelector from './LanguageSelector';
import ListPreloader from './ListPreloader';
import ProductsList from './ProductsList';
import { GetAPI_URL } from '../GetAPI_URL';
import { ShopContext } from '../contex';

const Shop = () => {
	
	const {setProducts,isLoading,lang} = useContext(ShopContext)
	useEffect(()=>{

		fetch(GetAPI_URL(lang),{
			headers:{
			'Authorization':API_KEY
			},
		}).then(
			response => response.json()
		).then(data => {
			setProducts(data.shop);
			
		})

	},[lang])


	return ( 
		<main className='shop_wrapper'>
			<div className="container">
				<LanguageSelector />
				<Cart />
				{
					isLoading ?
					<ListPreloader/> :
					<ProductsList />

				}

			</div>
		</main>
	 );
}
 
export default Shop;