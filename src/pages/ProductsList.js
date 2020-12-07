import React from 'react'
import {connect} from 'react-redux'
import {downloadProducts} from '../redux/actions'
import Product from '../components/Product'

class ProductsList extends React.Component {

	componentDidMount() {
		this.props.downloadProducts()
	}

	render() {
		return (
			<div style={{height: '100vh', overflowY: 'scroll'}}>
				<h4>Сумма: {this.props.basketProducts.reduce((total, item) => item.value * item.cost + total, 0)} </h4>
				<div className="container p-5 w-100 d-flex flex-wrap justify-content-center">
					{this.props.products.map(product => <Product product={product} key={product.id}/>)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.posts.fetchProducts,
		basketProducts: state.basket.basket
	}
}

const dispatchToProps = (dispatch) => {
	return {
		downloadProducts: () => dispatch(downloadProducts())
	}
}

export default connect(mapStateToProps, dispatchToProps)(ProductsList)
