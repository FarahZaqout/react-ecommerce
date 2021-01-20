import { setCartState } from '../../../redux';

const mapStateToProps = ({ cartState }) => ({ cartState });

const mapDispatchToProps = {
  setCartState,
};

export { mapStateToProps, mapDispatchToProps };
