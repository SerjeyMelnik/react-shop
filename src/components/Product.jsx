import React from 'react';
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BuyMessage from './BuyMessage';
const Product = (props) => {
	const {mainId,displayName,displayDescription,displayAssets,price} = props.product;
	const addToCart = props.addToCart;
	const showingMessage = props.showingMessage
	const setShowingMessage = props.setShowingMessage
	console.log(price.finalPrice, price.regularPrice);
	const settings = {
		dots: true,
		autoplay: true
	}
	const itemForCart = {
		mainId: mainId,
		displayName:displayName,
		displayAssets:displayAssets,
		price:price,
		count:1
	}
	const getDiscount = (newPrice,oldPrice) =>{
		const discount = ((oldPrice - newPrice) * 100) / oldPrice;
		return '- ' + Math.round(discount * 10) / 10 + ' %';
	}
	return ( 
		<div className="product" >
			<div className="product_inner">
			<div className="product_img-wrapper">
				 {
						price.finalPrice !== price.regularPrice ? 
						<div className="product_discount">
							{
								getDiscount(price.finalPrice,price.regularPrice)
							}
						</div> :
						''
				} 
				{
				displayAssets.length === 1 ?
				<img src={displayAssets[0].full_background} alt=""  width='100%' />	:
				<Slider {...settings}>
					{
						displayAssets.map(img=>{
							return <img src={img.full_background} key={img.displayAsset} width='100%' />
						})
					}
				</Slider>
				}
			</div>
			<div className="product_bottom-info">
				<div className="product_description">
					<h2 className='product_name'>{displayName}</h2>
					{
						displayDescription ? 
						<p className="product_description-body">{displayDescription}</p> :
						''
					}
					
				</div>
				<div className="product_purchase-info">
					
					
						<div className="product_price-wrapper">
							
							<span className='product_price-final'>{price.finalPrice}
							<i className='material-icons'>attach_money</i>
							</span>
							
						</div>
					
					
					<div className="product_buy-button_wrapper">
						{
							showingMessage === mainId ?
							<BuyMessage showingMessage={showingMessage}
										setShowingMessage={setShowingMessage}/> : 
							null
						}
					
					<button className='product_buy-button' onClick={()=> {addToCart(itemForCart)}}>
						<i className='material-icons'>add_shopping_cart</i> 	Buy
					</button>
					</div>
					
				</div>
			</div>
			</div>
		</div>
	 );
}
 
export default Product;