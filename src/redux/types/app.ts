export interface AppState {
  deliveryActive: boolean
  tooltipInputName: string
  streetInputValue: string
  houseInputValue: string
}

export enum AppActionTypes {
  SWITCH_DELIVERY_ACTIVE = 'SWITCH_DELIVERY_ACTIVE',
  SET_STREET_INPUT_VALUE = 'SET_STREET_INPUT_VALUE',
  SET_HOUSE_INPUT_VALUE = 'SET_HOUSE_INPUT_VALUE',
  SHOW_TOOLTIP_FOR_INPUT = 'SHOW_TOOLTIP_FOR_INPUT'
}




interface SwitchDeliveryActive {
  type: AppActionTypes.SWITCH_DELIVERY_ACTIVE
}

interface SetStreetInputValue {
  type: AppActionTypes.SET_STREET_INPUT_VALUE,
  payload: string
}

interface SetHouseInputValue {
  type: AppActionTypes.SET_HOUSE_INPUT_VALUE,
  payload: string
}

interface ShowTooltipForInput {
  type: AppActionTypes.SHOW_TOOLTIP_FOR_INPUT
}

export type AppAction =
  SwitchDeliveryActive
  | SetStreetInputValue
  | SetHouseInputValue
  | ShowTooltipForInput