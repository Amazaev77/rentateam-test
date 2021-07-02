import { CategoriesAction, CategoriesActionTypes, CategoriesState } from "../types/categories";
import { Dispatch } from "redux";
import axios from "axios";

const initialState: CategoriesState = {
  data: [],
  loading: true
}

export default function reducer(state = initialState, action: CategoriesAction): CategoriesState {
  switch (action.type) {
    case CategoriesActionTypes.LOAD_CATEGORIES_STARTED:
      return { ...state, loading: true }

    case CategoriesActionTypes.LOAD_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

export const fetchCategories = () => {
  return async (dispatch: Dispatch<CategoriesAction>) => {
    dispatch({ type: CategoriesActionTypes.LOAD_CATEGORIES_STARTED })

    const apiUrl = 'https://rentateam-test-default-rtdb.firebaseio.com/'

    const { data } = await axios.get(apiUrl + '/categories.json')

    dispatch({
      type: CategoriesActionTypes.LOAD_CATEGORIES_SUCCEEDED,
      payload: data
    })
  }
}