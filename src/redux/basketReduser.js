import {ADD_BASKET, CHANGE_INPUT_PRODUCT, DECREASE_PRODUCT, INCREASE_PRODUCT, REMOVE_BASKET} from './types'

const initialState = {
	basket: JSON.parse(localStorage.getItem('basketProducts')) || [],
}

export const basketReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BASKET:
			action.payload.value = 1
			return {...state, basket: state.basket.concat([action.payload])}
		case REMOVE_BASKET:
			return {
				...state,
				basket: state.basket.filter(item => item.id !== action.payload.id)
			}
		case INCREASE_PRODUCT:
			return {
				...state,
				basket: state.basket.map(item => item.id === action.payload.id ? {...item, value: +item.value +1} : item)
			}
		case DECREASE_PRODUCT:
			return {
				...state,
				basket: state.basket.map(item => item.id === action.payload.id ? {...item, value: item.value -1} : item)
			}
		case CHANGE_INPUT_PRODUCT:
			console.log('change action')
			console.log('action', action)
			return {
				...state,
				basket: state.basket.map(item => item.id === action.payload.id ? {...item,value: action.value} : item)
			}
		default:
			return state
	}
}

