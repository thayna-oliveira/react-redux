import { CLICK_UPDATE_VALUE } from './actionTypes';
import { TEXT_UPDATE_VALUE } from './actionTypes';


export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const textChange = value => ({
  type: TEXT_UPDATE_VALUE,
  newValue: value
});