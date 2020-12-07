import {FETCH_PRODUCTS} from './types'

const initialState = {
	fetchProducts:[]
}

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {...state, fetchProducts: action.payload}
		default: return state
	}
}

