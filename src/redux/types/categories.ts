export interface CategoriesState {
  data: any[],
  loading: boolean
}

export enum CategoriesActionTypes {
  LOAD_CATEGORIES_STARTED = 'LOAD_CATEGORIES_STARTED',
  LOAD_CATEGORIES_SUCCEEDED = 'LOAD_CATEGORIES_SUCCEEDED'
}

interface FetchCategoriesStartedAction {
  type: CategoriesActionTypes.LOAD_CATEGORIES_STARTED
}

interface FetchCategoriesSucceededAction {
  type: CategoriesActionTypes.LOAD_CATEGORIES_SUCCEEDED,
  payload: any[]
}

export type CategoriesAction =
    FetchCategoriesStartedAction
  | FetchCategoriesSucceededAction