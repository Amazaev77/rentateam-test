import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import app from './ducks/app';
import categories from './ducks/categories';
import products from './ducks/products';
import cart from './ducks/cart';


const rootReducer = combineReducers({
  app,
  categories,
  products,
  cart
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>