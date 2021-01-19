import { setCartState } from '../../../redux';

const mapStateToProps = (state) => {
  const { cartState } = state;
  return { cartState };
};

const mapDispatchToProps = {
  setCartState,
};

export { mapStateToProps, mapDispatchToProps };
