<<<<<<< HEAD
import { GetStaticProps } from 'next'
import axios from 'axios'
import styles from './styles.module.scss'

export default function Product({products}){

    function parcelamento(preco){
        const juros = preco/100 * 12
        const precoFinal = preco + juros

        return precoFinal / 12

    }

    return(
        <>
            { products.map(product => (
            <a href={`/product/${product.id}`} className={styles.card}  key={ product.id }>
                <div className={styles.imageDiv}>
                    <img src={`http://localhost:1337${product.image[0].url}`} alt={product.title} />
                </div>
                <div className={styles.textDiv}>
                    <strong>R$:{ product.price }</strong>
                    <span>12x R${  parcelamento(product.price).toFixed(2) }</span>
                    
                </div>
            </a>
        )) }
        </>
    )
}

// export const getStaticProps: GetStaticProps = async () => {

//     const response = await axios.get('http://localhost:1337/products')
  
//     const products = response.data
  
//     return {
//       props: {
//         products
//       }
//     }
//   }
=======
import { GetStaticProps } from 'next';
import styles from './styles.module.scss'
import commerce from '../../services/commerce'

export default function Product({ name, price, media }) { 
    return (
  
        <p className={styles.product}>
          <img src={media.source} alt="" />
          {name} <br /> 
          <span>{price.formatted_with_symbol}</span>

        </p>

    );
  }

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { permalink } = params

  
  const response = await commerce.products.retrieve()
  
  return {
    props: {}
  }
}
>>>>>>> 0b01340d150490e949df99635fc9744006a32c2c
