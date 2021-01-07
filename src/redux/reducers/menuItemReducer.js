import { MenuItemsData } from '../../dataMocks';

const menuItemReducer = (state = MenuItemsData, action) => {
  if (action.type === 'CHANGE_MENU_ITEMS') {
    return action.payload;
  }
  return state;
};

export default menuItemReducer;
