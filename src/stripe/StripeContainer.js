import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51MFKruE0N8LfnTnUICtWls533rqqn9tyyxCFzuZSd3RdQVkL9dL48G6ElhV2Xp985ayGB669cS7sIywlyOEQP2Wb00jif6Uw3G";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;