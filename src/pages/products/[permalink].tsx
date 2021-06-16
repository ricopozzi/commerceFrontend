import { GetStaticPaths, GetStaticProps } from "next";
import { createHistogram } from "perf_hooks";
import commerce from "../../services/commerce";
import styles from './styles.module.scss'

export default function ProductPage({ product }) {


    return (
      <>
        
        <main className={styles.mainContainer}>
          <div className={styles.imageContainer}>
            <img src={product.media.source} alt="" />
          </div>

          <div className={styles.textContainer}>
            <h1>{product.name}</h1>
            <div>{product.price.formatted_with_symbol}</div>
            <p dangerouslySetInnerHTML={{__html: product.description}}></p>

           <button>Comprar</button>
          </div>

        </main>
      </>
    );
  }

export const getStaticProps:GetStaticProps = async ({ params }) => {
  const { permalink } = params;
  // @ts-ignore: Unreachable code error
  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });   
  

  return {
    props: {
      product,
    },
  };
}

export const  getStaticPaths: GetStaticPaths = async() => {
    const { data: products } = await commerce.products.list();
  
    return {
      paths: products.map((product) => ({
        params: {
          permalink: product.permalink,
        },
      })),
      fallback: false,
    };
  }