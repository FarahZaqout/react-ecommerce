import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

/**
 *
 * @param {number} price item price in cents.
 */
const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Purchase Now!"
      name="react-ecommerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total amount is $${price}`}
      amount={stripePrice}
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeButton;

StripeButton.propTypes = {
  price: PropTypes.number.isRequired,
};
