import { createContext, useReducer } from 'react'
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
	products: [],
	isLoading: true,
	order: [],
	showingMessage: '',
	lang: 'en',
	dropedOrder: false
}

export const ContextProvider = ({ children }) => {

	const [value, dispatch] = useReducer(reducer, initialState);

	value.removeFromCart = (itemId) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: { id: itemId } })
	}

	value.addToCart = (item) => {
		dispatch({ type: "ADD_TO_CART", payload: { item: item } })
	}

	value.setProducts = (products) => {
		dispatch({ type: "SET_PRODUCTS", payload: { products: products } })
	}

	value.changeItemCount = (count, id, step) => {
		dispatch({ type: "CHANGE_ITEM_COUNT", payload: { count, id, step } })
	}
	value.setShowingMessage = (msg) => {
		dispatch({ type: "SET_SHOWING_MESSAGE", payload: { msg: msg } })

	}
	value.setLang = (lang) => {
		dispatch({ type: "SET_LANG", payload: { lang: lang } })

	}
	value.hideOrder = (e) => {
		dispatch({ type: "HIDE_ORDER", payload: { e: e } })

	}
	value.dropOrder = () => {
		dispatch({ type: "DROP_ORDER" })

	}
	return < ShopContext.Provider value={value} >
		{children}
	</ShopContext.Provider >
}