import CartItem from './CartItem';
import { shopData } from '../../dataMocks';
import './sass/index.scss';

const { items } = shopData[0];

export default {
  title: 'cart item',
};

export const cartDefault = () => (
  <CartItem
    src={items[0].imageUrl}
    alt="hat"
    name={items[0].name}
    price={items[0].price}
    quantity={3}
  />
);
