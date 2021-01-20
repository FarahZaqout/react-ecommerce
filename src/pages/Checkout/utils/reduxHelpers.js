import { setCartState } from '../../../redux';

const mapStatetoProps = ({ cartState }) => ({ cartState });

const mapDispatchToProps = {
  setCartState,
};

export { mapStatetoProps, mapDispatchToProps };
