import { AppAction, AppActionTypes, AppState } from "../types/app";

const initialState: AppState = {
  deliveryActive: true,
  tooltipInputName: '',
  streetInputValue: '',
  houseInputValue: ''
}

export default function reducer(state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionTypes.SWITCH_DELIVERY_ACTIVE:
      return {
        ...state,
        deliveryActive: !state.deliveryActive
      }

    case AppActionTypes.SET_STREET_INPUT_VALUE:
      return {
        ...state,
        streetInputValue: action.payload,
        tooltipInputName: ''
      }

    case AppActionTypes.SET_HOUSE_INPUT_VALUE:
      return {
        ...state,
        houseInputValue: action.payload,
        tooltipInputName: ''
      }

    case AppActionTypes.SHOW_TOOLTIP_FOR_INPUT:
      const { streetInputValue } = state

      return {
        ...state,
        tooltipInputName: !streetInputValue ? 'Улица' : 'Дом'
      }
    default:
      return state
  }
}

export const switchDeliveryActive = () => {
  return { type: AppActionTypes.SWITCH_DELIVERY_ACTIVE }
}

export const setStreetInputValue = (value: string) => {
  return {
    type: AppActionTypes.SET_STREET_INPUT_VALUE,
    payload: value
  }
}

export const setHouseInputValue = (value: string) => {
  return {
    type: AppActionTypes.SET_HOUSE_INPUT_VALUE,
    payload: value
  }
}

export const showTooltipForInput = () => {
  return { type: AppActionTypes.SHOW_TOOLTIP_FOR_INPUT }
}