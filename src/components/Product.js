import React from 'react'
import {connect} from 'react-redux'
import {addProductToBasket, removeProductToBasket} from '../redux/actions'

const Product = (props) => {

	const button = props.basketProducts.find(item => item.id === props.product.id)

	return (
		<div className="card m-2 " style={{width: '16rem', height: '200px'}}>
			<div className="card-body d-flex flex-column justify-content-between align-items-center">
				<h5 className="card-title">{props.product.title}</h5>
				<span>Стоимость: {props.product.cost}</span>
				<div>
					<button
						className="btn m-1 btn-outline-success"
						onClick={() =>props.addProductToBasket(props.product)}
						disabled={button}
					>
						Добавить
					</button>
					<button
						className="btn m-1 btn-outline-danger"
						onClick={() =>props.removeProductToBasket(props.product)}
						disabled={!button}
					>
						Удалить
					</button>
				</div>
			</div>
		</div>
	)
}


const mapDispatchToProps = {
	addProductToBasket, removeProductToBasket
}

const mapStateToProps = state => ( {
	basketProducts: state.basket.basket
})


export default connect(mapStateToProps, mapDispatchToProps)(Product)
