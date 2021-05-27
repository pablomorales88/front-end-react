import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //como stripe usa centimos, tengo que multiplicar el precio que esta en dolares/euros por cient
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IvksVJ8e1cgFTE9htXk6RMBXd6LrBgdgtPDjCCE5NTfY5AyuTxwULdFrUNhKufrKhn04AqBGrrNzZL393i33Kms00Qw502sC9';
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            img='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;