import { CartAction, CartActionTypes, CartState } from "../types/cart";
import { ProductType } from "../../components/Cards/ItemCard";
import { Dispatch } from "redux";
import { RootState } from "../index";
import axios from "axios";

const initialState: CartState = {
  cartData: [],
  cartSum: 0,
  sending: false
}

export default function reducer(state = initialState, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      const newCartArray = state.cartData.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + 1
          }
        }
        return item
      })

      const isExistItem = state.cartData.some(item => item.id === action.payload.id)

      if (!isExistItem) {
        newCartArray.push({ ...action.payload, count: 1 })
      }

      return {
        ...state,
        cartData: newCartArray,
        cartSum: state.cartSum + action.payload.price
      }
    case CartActionTypes.MINUS_ITEM_FROM_CART:
      const newCartData = state.cartData.map((item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count - 1
          }
        }
        return item
      }))

      return {
        ...state,
        cartData: newCartData.filter(item => item.count > 0),
        cartSum: state.cartSum - action.payload.price,
      }
    case CartActionTypes.SEND_CART_STARTED:
      return { ...state, sending: true }
    case CartActionTypes.SEND_CART_SUCCEEDED:
      return initialState
    default:
      return state
  }
}

export const addItemToCart = (item: ProductType) => {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
  }
}

export const minusItemFromCart = (id: number, price: number) => {
  return {
    type: CartActionTypes.MINUS_ITEM_FROM_CART,
    payload: { id, price }
  }
}

export const sendCart = () => {
  return async (dispatch: Dispatch<CartAction>, getState: () => RootState) => {
    dispatch({ type: CartActionTypes.SEND_CART_STARTED })

    const { cartData } = getState().cart

    const apiUrl = 'https://rentateam-test-default-rtdb.firebaseio.com/'

    cartData.forEach(item => {
      axios.post(apiUrl + '/cartData.json', item)
    })

    dispatch({ type: CartActionTypes.SEND_CART_SUCCEEDED })
  }
}