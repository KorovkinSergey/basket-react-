import Basket from '../pages/Basket'
import ProductsList from '../pages/ProductsList'
import CreateProduct from '../pages/CreateProduct'

let routes = [
	{
		name: 'products-list',
		url: '/',
		component: ProductsList,
		exact: true
	},
	{
		name: 'basket',
		url: '/basket',
		component: Basket,
		exact: true
	},
	{
		name: 'create-product',
		url: '/create-product',
		component: CreateProduct,
		exact: true
	},
	{
		url: '**',
		component: ProductsList
	}
];

let routesMap = {};


routes.forEach((route) => {
	if(route.hasOwnProperty('name')){
		routesMap[route.name] = route.url
	}
})


export default routes
export {routesMap}
