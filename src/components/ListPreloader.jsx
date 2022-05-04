import React from 'react';

const ListPreloader = () => {
	const  emptyArr = [...Array(8)];
	return ( 
		<div className="products_list">
			{
				emptyArr.map((el,i) => {
				return <div className="item_preloader" key={i}>
						
						</div>
			})
			}
		</div>
	 );
}
 
export default ListPreloader;