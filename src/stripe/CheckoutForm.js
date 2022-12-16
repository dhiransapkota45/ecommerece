import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import instance from "../api/api_instance";
import Loader from "../Components/Common/Loader"
import { useNavigate } from "react-router-dom";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "green",
      color: "green",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}

export const CheckoutForm = () => {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)
  const [success, setSuccess] = useState(false);
  const total = useSelector((store) => store.getcart.total);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        setLoader(true)
        const response = await instance.post("http://localhost:8000/pay", {
          amount: total * 100,
          id,
        });

        if (response.data.success) {
          console.log("successful payment");
          navigate("/success")
          setLoader(false)
          window.location.reload()
          setSuccess(true);
        }
      } catch (error) {
        console.log("error : ", error);
        navigate("/cancel")
        window.location.reload()
      }
      //send token to backend here
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <form
        className=" mx-auto w-full"
        onSubmit={handleSubmit}
        style={{ maxWidth: 400 }}
      >
        <div className="pt-10 pb-1 flex justify-between">
          <div className=" font-bold">Total</div>
          <div className=" font-bold text-green-600">${total}</div>
        </div>
        <hr className="mb-6" />
        <div className="  py-6 mb-4 border bg-gray-100 rounded-md p-2">
          <CardElement options={CARD_OPTIONS} />
        </div>
        <button className={`w-full rounded-md ${loader ? "bg-green-400" : "bg-green-600"} text-white text-xl font-bold flex justify-center  p-2 my-8`}>
          {loader ? <Loader /> : "Pay"}
        </button>
      </form>
    </>
  );
};
