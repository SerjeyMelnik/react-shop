
export function reducer(state, { type, payload }) {
	switch (type) {
		case 'SET_PRODUCTS':
			return {
				...state,
				products: payload.products,
				isLoading: false
			}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				order: [...state.order.filter(prod => prod.mainId != payload.id)],
				dropedOrder: (![...state.order.filter(prod => prod.mainId != payload.id)].length) ? false : state.dropedOrder
			}
		case 'ADD_TO_CART': {
			let isSame = false;
			let newOrder = [];
			newOrder = state.order.map(item => {
				if (item.mainId === payload.item.mainId) {
					isSame = true;
					return { ...item, count: Number(item.count) + 1 }
				}
				else return item
			})

			if (!isSame) {
				newOrder = [...state.order, payload.item]
			}


			return {
				...state,
				order: newOrder,
				showingMessage: payload.item.mainId
			}
		}
		case 'CHANGE_ITEM_COUNT': {
			const { count, id, step } = payload;
			const newOrder = state.order.map(item =>
				item.mainId === id ?
					{ ...item, count: (Number(count) + step) > 0 ? Number(count) + step : 0 } :
					item).filter(item => item.count !== 0);

			return {
				...state,
				order: newOrder,
				dropedOrder: (state.order.length === 1 && state.order[0].count - 1 === 0 && step < 0) ? false : state.dropedOrder
			}
		}
		case 'SET_SHOWING_MESSAGE':
			return {
				...state,
				showingMessage: payload.msg
			}
		case 'SET_LANG':
			return {
				...state,
				lang: payload.lang
			}
		case 'HIDE_ORDER':
			return {
				...state,
				dropedOrder: payload.e.target.dataset.close ? false : state.dropedOrder

			}
		case 'DROP_ORDER':
			return {
				...state,
				dropedOrder: (state.order.length > 0) ? true : state.dropedOrder
			}
		default:
			return state
	}
}