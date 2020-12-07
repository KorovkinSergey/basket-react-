import {combineReducers} from 'redux'
import {productsReducer} from './productsReducer'
import {basketReducer} from './basketReduser'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
	posts: productsReducer,
	basket: basketReducer,
	app: appReducer
})
