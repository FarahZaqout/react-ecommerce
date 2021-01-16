import { MenuItemsData } from '../../dataMocks';
import { menuActionTypes } from '../actions';

const { SET_MENU_ITEMS } = menuActionTypes;

const menuItemReducer = (state = MenuItemsData, action) => {
  if (action.type === SET_MENU_ITEMS) {
    return action.payload;
  }
  return state;
};

export default menuItemReducer;
