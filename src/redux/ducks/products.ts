import axios from "axios";
import { Dispatch } from "redux";
import { ProductsAction, ProductsActionTypes, ProductsState } from "../types/products";

const initialState: ProductsState = {
  data: [],
  loading: true
}

export default function reducer(state = initialState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.LOAD_PRODUCTS_STARTED:
      return { ...state, loading: true }

    case ProductsActionTypes.LOAD_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export const fetchProducts = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: ProductsActionTypes.LOAD_PRODUCTS_STARTED })

    const apiUrl = 'https://rentateam-test-default-rtdb.firebaseio.com/'

    const { data } = await axios.get(apiUrl + '/products.json')

    dispatch({
      type: ProductsActionTypes.LOAD_PRODUCTS_SUCCEEDED,
      payload: data
    })
  }
}