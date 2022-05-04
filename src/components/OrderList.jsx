import React from 'react';

const OrderList = ({order,removeFromCart,setOrder,setDropedOrder}) => {
	const changeItemCount = (count,id,step) => {
	
		setOrder(order.map(item => 
				item.mainId === id ? 
				{...item,count: (Number(count) + step) > 0 ? Number(count) + step : 0 } :
				 item).filter(item => item.count !== 0) )
			console.log(order.length === 0);
		if (order.length === 1 && order[0].count - 1 === 0 && step < 0) setDropedOrder(false);
		
			
	}
	
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
					{/* <span className='order_list-item_num'>{indx + 1}</span> */}
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