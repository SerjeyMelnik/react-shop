import React, { useContext } from 'react';
import { ShopContext } from '../contex';

const OrderList = () => {
	const {removeFromCart,changeItemCount,order} = useContext(ShopContext)


	return ( 
		<div className="order_list">		
		{
			order ?
			order.map((ord,indx,arr) => {
				let itemName = ord.displayName;
				let itemImg = ord.displayAssets[0].background;
				let itemPrice = ord.price.finalPrice;
				let itemCount = ord.count;
				return <div key={ord.mainId + indx} className="order_list-item">
					
					<img src={itemImg} className="order_list-item_img" alt="itemName"  />
					<span className='order_list-item_name'>{itemName}</span>
					<span className='order_list-item_price for_one'>
						{itemPrice} 
						<i className="material-icons">attach_money</i>
					</span>
					<span className="order_list-item_count">
						<i className="material-icons increase"
							onClick={()=>{changeItemCount(itemCount,ord.mainId,1)}}
							>arrow_drop_up</i>
							<span className='count_value'>{itemCount}x</span>
						<i className="material-icons decrease" 
							onClick={()=>{changeItemCount(itemCount,ord.mainId,-1)}}>arrow_drop_down</i>
					</span>
					<span className='order_list-item_price'>
						{itemPrice * itemCount} 
						<i className="material-icons">attach_money</i>
					</span>
					<button className='order_list-item_remove-btn'  onClick={()=>{removeFromCart(ord.mainId)}}>
						<i className='material-icons'>delete_forever</i>
					</button>
				</div>
			}) :
			''
		}
	</div>
	 );
}
 
export default OrderList;