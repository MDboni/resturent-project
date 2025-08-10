import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";
import { SiToptal } from "react-icons/si";
import useAuth from "../../Hooks/useAuth";

const ChackOutFrom = () => {
    const [clientSecret,setClientSecrit] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState()
    const AxiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [cart] = useCarts()
    const totalprice = cart.reduce((total,item)=> total + item.price ,0)


    useEffect(()=>{
         AxiosSecure.post('/create-payment-intent', {price:totalprice})
        .then(res => {
          console.log(res.data.clientSecret)
          setClientSecrit(res.data.clientSecret);
          
        })
    },[AxiosSecure,totalprice])

    const handleSubmit = async(event) =>{
          event.preventDefault();

          if(!stripe || !elements){


            return ;
          }

          const card = elements.getElement(CardElement)

          if( card == null){
            return ;
          }

        //   card Element with other Stripe.js APIs

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('Payment Error');
            setError(error.message)
        }else{
            console.log('Payment Success',paymentMethod);
            setError('')
        }

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret,{
          payment_method: {
            card: card,
            billing_details:{
              email: user?.email || 'anonymous' ,
              name: user?.displayName || 'anonymous'
            }
          }
        })

      if(confirmError){
        console.log('Payment Confirmation error', confirmError);
        setError(confirmError.message)
      }else if( paymentIntent.status === 'succeeded'){
         console.log('Payment succeeded!', paymentIntent)
         setError('')
      }
     
    }
  return (
    <form onSubmit={handleSubmit}>
        <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="btn btn-info my-5 " type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-rose-700">{error}</p>
    </form>
  )
}

export default ChackOutFrom