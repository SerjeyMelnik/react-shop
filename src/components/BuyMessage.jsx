import React, { useEffect, useState } from 'react';

const BuyMessage = ({showingMessage,setShowingMessage}) => {

	useEffect(()=>{
		const timerId = setTimeout(setShowingMessage,1000);
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