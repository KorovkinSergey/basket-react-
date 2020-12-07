import React from 'react'
import {connect} from 'react-redux'
import {decreaseProduct, increaseProduct, onChangeInput} from '../redux/actions'


const InputBasket = (props) => {

	const buttonDecrease = +props.product.value === 1
	const buttonIncrease = +props.product.value === +props.product.maxAmount


	return (
		<React.Fragment>
			<button
				className="btn btn-outline-danger m-1"
				onClick={() => props.decreaseProduct(props.product)}
				disabled={buttonDecrease}
			>-
			</button>
			<input
				value={props.product.value}
				style={{width: '70px'}}
				type="number"
				onChange={(e) => props.onChangeInput(e, props.product)}
			/>
			<button
				className="btn btn-outline-success m-1"
				onClick={() => props.increaseProduct(props.product)}
				disabled={buttonIncrease}
			>
				+
			</button>
		</React.Fragment>
	)
}

const dispatchToProps = (dispatch) => {
	return {
		decreaseProduct: (product) => dispatch(decreaseProduct(product)),
		increaseProduct: (product) => dispatch(increaseProduct(product)),
		onChangeInput: (e, product) => dispatch(onChangeInput(e, product))

	}

}

export default connect(null, dispatchToProps)(InputBasket)
