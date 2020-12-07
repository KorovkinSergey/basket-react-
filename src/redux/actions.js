import {
	ADD_BASKET,
	CHANGE_INPUT_PRODUCT,
	DECREASE_PRODUCT,
	FETCH_PRODUCTS, HIDE_ALERT,
	INCREASE_PRODUCT,
	REMOVE_BASKET, SHOW_ALERT
} from './types'

export function downloadProducts() {
	return async dispatch => {
		try {
			const fetchProducts = []
			const products = await fetch('https://basket-react.firebaseio.com/products.json')
			const json = await products.json()
			for (let key in json) {
				if (json.hasOwnProperty(key)) {
					fetchProducts.push({
						title: json[key].title,
						amount: json[key].amount,
						cost: json[key].cost,
						maxAmount: json[key].maxAmount,
						id: json[key].id
					})
				}
			}
			dispatch({type: FETCH_PRODUCTS, payload: fetchProducts})
		} catch (e) {
			console.log(e)
		}
	}
}

export function fetchCreateProduct(post) {
	try {
		fetch('https://basket-react.firebaseio.com/products.json', {
			method: 'POST',
			body: JSON.stringify({
				title: post.title,
				cost: post.cost,
				amount: post.amount,
				maxAmount: post.maxAmount,
				id: post.id
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then(res => {
				console.log(res)
			})
	} catch (e) {
		console.log(e)
	}
}

export function addProductToBasket(product) {
	return {
		type: ADD_BASKET,
		payload: product
	}
}

export function removeProductToBasket(product) {
	return {
		type: REMOVE_BASKET,
		payload: product
	}
}

export function decreaseProduct(product) {
	return {
		type: DECREASE_PRODUCT,
		payload: product
	}
}

export function increaseProduct(product) {
	return {
		type: INCREASE_PRODUCT,
		payload: product
	}
}

export function onChangeInput(e, product) {
	return async dispatch => {

		let newValue = e.target.value

		if(+e.target.value > +product.maxAmount) {
			newValue = product.maxAmount
			dispatch(showAlert())
		}else if(newValue < 0) {
			newValue = 1
		}
		setTimeout(() => {
			dispatch(hideAlert())
		},2000)

		dispatch ({
			type: CHANGE_INPUT_PRODUCT,
			payload: product,
			value: newValue
		})
	}
}

export function showAlert() {
	return {
		type:SHOW_ALERT
	}
}

export function hideAlert() {
	return {
		type:HIDE_ALERT
	}
}


