import React, { useEffect, useState } from 'react';
import {API_KEY} from '../config'
import Cart from './Cart';
import LanguageSelector from './LanguageSelector';
import ListPreloader from './ListPreloader';
import ProductsList from './ProductsList';
import { GetAPI_URL } from '../GetAPI_URL';
const Shop = () => {
	const [products,setProducts] = useState([])
	const [isLoading,setIsLoading] = useState(true)
	const [order, setOrder] = useState([]);
    const [showingMessage,setShowingMessage] = useState('')
	const [lang,setLang] = useState('en')
	useEffect(()=>{

		fetch(GetAPI_URL(lang),{
			headers:{
			'Authorization':API_KEY
			},
		}).then(
			response => response.json()
		).then(data => {
			setProducts(data.shop);
			setIsLoading(false);
		})

	},[lang])

	const addToCart = (item) => {	
        let isSame = false;
        order.forEach((element,indx,arr) => {    
            if(element.mainId === item.mainId)
                {   
                    isSame = true;
                    arr[indx].count += 1 
                    setOrder(arr)
                }  
        });
        if(!isSame){
                setOrder([...order,item])
        }
        setShowingMessage(item.mainId)
	}

	return ( 
		<main className='shop_wrapper'>
			<div className="container">
				<LanguageSelector setLang={setLang}/>
				<Cart order={order} setOrder={setOrder}/>
				{
					isLoading ?
					<ListPreloader/> :
					<ProductsList products={products} 
                                  addToCart={addToCart}
                                  showingMessage={showingMessage}
                                  setShowingMessage={setShowingMessage}/>

				}

			</div>
		</main>
	 );
}
 
export default Shop;