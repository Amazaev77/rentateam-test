export interface ProductsState {
  data: any[],
  loading: boolean
}

export enum ProductsActionTypes {
  LOAD_PRODUCTS_STARTED = 'LOAD_PRODUCTS_STARTED',
  LOAD_PRODUCTS_SUCCEEDED = 'LOAD_PRODUCTS_SUCCEEDED'
}

interface FetchProductsStartedAction {
  type: ProductsActionTypes.LOAD_PRODUCTS_STARTED
}

interface FetchProductsSucceededAction {
  type: ProductsActionTypes.LOAD_PRODUCTS_SUCCEEDED,
  payload: any[]
}

export type ProductsAction =
  FetchProductsStartedAction
  | FetchProductsSucceededAction