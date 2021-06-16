import axios from 'axios';
import { GetServerSideProps, NextApiRequest, NextApiResponse} from 'next'
import { stripe } from '../../services/stripe'


export default async (request: NextApiRequest, response: NextApiResponse) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'https://www.facebook.com',
    });
  
    response.json({ id: session.id });
  };
