import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IlJATSHIQfDLWxRE8y8FQa6KwQ6tZsfaZDD0yIodj2YBur71CIUNIomZlmyJ9M5x5rwmQSKuYLHWJrBh9Od94PS007ttBa2Zg';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='GROCERY-HUB'
      billingAddress
      shippingAddress
      image='https://img.icons8.com/color/48/000000/grocery-store.png'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;