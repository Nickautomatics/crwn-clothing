import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JJB7jBloVwiKJ29suxISdPpBu4XZ6seigzTapD14KwGTWiGrsMbHplXUTjSpOVIvMOv7MxNG5HRfEl1Hf9Bv6CP00cNlH9mW8";
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
    
    return(
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://img.icons8.com/office/80/000000/coat.png"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;