import { ProductType } from "../../components/Cards/ItemCard";

export type CartItemType = {
  "delivery" : boolean,
  "id" : number,
  "img" : string,
  "name" : string,
  "price" : number,
  "count": number
}


export interface CartState {
  cartData: CartItemType[] | []
  cartSum: number
  sending: boolean
}

export enum CartActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  MINUS_ITEM_FROM_CART = "MINUS_ITEM_FROM_CART",
  SEND_CART = "SEND_CART",
  SEND_CART_STARTED = "SEND_CART_STARTED",
  SEND_CART_SUCCEEDED = "SEND_CART_SUCCEEDED"
}

interface AddItemToCart {
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: ProductType
}

interface MinusItemFromCart {
  type: CartActionTypes.MINUS_ITEM_FROM_CART
  payload: { id: number, price: number }
}

interface SendCartStarted {
  type: CartActionTypes.SEND_CART_STARTED
}

interface SendCartSucceeded {
  type: CartActionTypes.SEND_CART_SUCCEEDED
}


export type CartAction =
  AddItemToCart
  | MinusItemFromCart
  | SendCartStarted
  | SendCartSucceeded