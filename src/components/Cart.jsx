import React, { useState } from 'react';
import OrderList from './OrderList';

const Cart = ({order,setOrder}) => {
	const [dropedOrder,setDropedOrder] = useState(false)
	const hideOrder = (e) => {
		if (e.target.dataset.close) setDropedOrder(false);
	}
	const dropOrder = (e) => {
		if (order.length > 0) setDropedOrder(true);
	}
	const removeFromCart = (id) => {
		setOrder([...order.filter(prod => prod.mainId != id)])
		if (![...order.filter(prod => prod.mainId != id)].length) setDropedOrder(false);
	}
	
	return ( 
		<div className="shopping_cart" >
			<div className="shopping_cart-inner" onClick={dropOrder}>
				<i className='material-icons'>shopping_cart</i>
				<span className='quantity'>{order.length}</span>
			</div>
			<div className={`order_wrapper ${dropedOrder ? 'droped': ''}`} data-close={true} onClick={hideOrder}>
				<div className="order_inner">
					<i className='material-icons order_hide' onClick={hideOrder} data-close={true}>close</i>
					<h2 className='order_title'>Your order</h2>
					<OrderList order={order} 
								setOrder={setOrder} 
								removeFromCart={removeFromCart}
								setDropedOrder={setDropedOrder} />
					<div className="order_total-info">
						<div className="order_total-info_item">
							<span className='total-title'>Total price: </span>
							<span className='total'>
								{
									order.length > 0 ? 
									order.reduce((sum,ord)=> sum + (ord.price.finalPrice * ord.count),0) :
									''
								}
								<i className="material-icons">attach_money</i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default Cart;