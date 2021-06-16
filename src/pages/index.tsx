
import { GetStaticProps } from 'next'
import axios from 'axios'
import styles from './home.module.scss'
import Product from '../components/Product/index'
import Banner from '../components/Banner/index'
import Header from '../components/Header/index'
import IconsSection from '../components/IconsSection/index'

export default function Home({products}) {
  async function seeResponseData(){
    const response = await axios.get('http://localhost:1337/products')

    const { data } = response
    
    const pathsTest = data.map(d => ({
        params: d.slug
    }

    ))

    return console.log(pathsTest)
  }

  return (
    <>
      <Banner />
      <IconsSection />
      <button onClick={seeResponseData}>
        clicla
      </button>
      <main className={styles.mainContainer}>
        <Product products={products}/>
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const response = await axios.get('http://localhost:1337/products')

  const products = response.data

  return {
    props: {
      products
    }
  }
}
