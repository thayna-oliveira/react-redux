import { TEXT_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  value: 'Iniciando a state'
};

export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_UPDATE_VALUE:
      return {
        ...state,
        valeu: action.value
      };
    default:
      return state;
  }
};