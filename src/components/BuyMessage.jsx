import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../contex';

const BuyMessage = () => {
	const {showingMessage,setShowingMessage} = useContext(ShopContext)
	useEffect(()=>{
		const timerId = setTimeout(()=>{setShowingMessage('')},1000);
		return () =>{
			clearTimeout(timerId)
		}
	},[showingMessage])
	return ( 
		<div className='buy_message'>
			Added to cart
		</div>
	 );
}
 
export default BuyMessage;