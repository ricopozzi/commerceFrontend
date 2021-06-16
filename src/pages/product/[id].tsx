import axios from "axios"
import { GetServerSideProps } from "next"
import styles from './styles.module.scss'
import { stripeJs } from '../../services/stripejs'
import { stripe } from '../../services/stripe'

export default function ProductPage({data, paymentIntent, session}) {
    function parcelamento(preco){
        const juros = preco/100 * 12
        const precoFinal = preco + juros

        return precoFinal / 12
    }

    const handleClick = async (event) => {
        const stripe = await stripeJs
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })
    }



    return(
        <main className={styles.main}>
            <section className={styles.productSession}>

                <div className={styles.imageContainer}>
                    <img src={`http://localhost:1337${data.image[0].url}`} alt="" />
                </div>
                <div className={styles.descriptionContainer} >
                    {data.description}
                </div>
            </section>    
            <div className={styles.paymentContainer}>
                <p className={styles.numberSelled}>Novo | 2 vendidos</p>
                <span>{data.title}</span>
                <p className={styles.price}>{data.price}</p>
                <p className={styles.portion} >Parcelado em 12 vezes de R${  parcelamento(data.price).toFixed(2) }</p>
                <button onClick={handleClick} role="link">Comprar</button>
            </div>
            
        </main>
    )
}


export const getServerSideProps: GetServerSideProps = async ({params, req}) => {
    const response = await axios.get(`http://localhost:1337/products/${params.id}`)
    const { data } = response

     const session = await stripe.checkout.sessions.create({
         
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: data.title,
            },
            unit_amount: data.price * 100
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'https://www.facebook.com',
    });
  
    return {
        props: {
           data,
           session
           
        }
    }
}
