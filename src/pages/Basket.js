import React from 'react'
import {connect} from 'react-redux'
import BasketProduct from '../components/BasketProduct'
import Alert from '../components/Alert'

const Basket = (props) => {

	localStorage.setItem('basketProducts', JSON.stringify(props.basketProducts))

	return (
		<div className="container border  border-dark">
			<h2 className="p-3">Корзина товаров</h2>

			<table className="table">
				<thead>
				<tr>
					<th style={{textAlign: "center"}} scope="col">#</th>
					<th style={{textAlign: "center"}} scope="col">Товар</th>
					<th style={{textAlign: "center"}} scope="col">Стоимость</th>
					<th style={{textAlign: "center"}} scope="col">Количество</th>
					<th style={{textAlign: "center"}} scope="col">Общая сумма</th>
					<th style={{textAlign: "center"}} scope="col">удалить</th>
				</tr>
				</thead>
				<tbody>
					{props.basketProducts.map((product, index) => <BasketProduct product={product} number={index} key={index} />)}
				</tbody>
			</table>
			{props.alert && <Alert text="Вы заказали максимум товара"/>}
			<h4>Сумма: {props.basketProducts.reduce((total, item) => item.value * item.cost + total, 0)} </h4>
		</div>
	)
}

const stateToProps = (state) => {
	return {
		basketProducts: state.basket.basket,
		alert: state.app.alert
	}
}

export default connect(stateToProps, null)(Basket)
