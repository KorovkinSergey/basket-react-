import React from 'react'
import InputBasket from './InputBasket'
import {connect} from 'react-redux'
import {removeProductToBasket} from '../redux/actions'

const BasketProduct = (props) => {


	return (
		<tr>
			<th style={{verticalAlign: "middle",textAlign: "center"}} scope="row">{props.number +1}</th>
			<td style={{verticalAlign: "middle",textAlign: "center"}}>{props.product.title}</td>
			<td style={{verticalAlign: "middle",textAlign: "center"}}>{props.product.cost}</td>
			<td style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
				<InputBasket product={props.product}/>
			</td>
			<td style={{verticalAlign: "middle",textAlign: "center"}}>{props.product.cost * props.product.value}</td>
			<td style={{verticalAlign: "middle",textAlign: "center"}}>
				<button
					className="btn btn-outline-danger m-1"
					onClick={() => props.removeProductToBasket(props.product)}
				>&#10005;</button>

			</td>
		</tr>
	)
}

const dispatchToProps = (dispatch) => {
	return {
		removeProductToBasket: (product) => dispatch(removeProductToBasket(product))
	}
}

export default connect(null,dispatchToProps)(BasketProduct)
