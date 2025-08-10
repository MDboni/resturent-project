import { loadStripe } from "@stripe/stripe-js";
import ChackOutFrom from "./ChackOutFrom";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_STRIPE);
const Paymeny = () => {
  return (
    <Elements stripe={stripePromise}>
       <ChackOutFrom/>
    </Elements>
  )
}

export default Paymeny