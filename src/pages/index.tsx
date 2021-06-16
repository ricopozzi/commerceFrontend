<<<<<<< HEAD
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
=======
import commerce from '../services/commerce'
import { GetStaticProps } from 'next'
import ProductList from '../components/ProductList/index'
import CategoryList from '../components/CategoryList/index'
import Link from 'next/link'
import styles from './home.module.scss'

export default function Home({ merchant, categories, products }) {
  return (
      <>
      <main className={styles.mainContainer} >
         <div className={styles.categoriesDiv}>
          <h3>
            <Link href="/categories" >
              <a>Categories</a>
            </Link>
          </h3>
         </div> 

          <CategoryList  categories={categories}/>

          <ProductList products={products} />
      </main>
      </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  const merchant = await commerce.merchants.about()
  const {data: categories} = await commerce.categories.list()
  const {data: products} = await commerce.products.list()
  return {
    props: {
      merchant,
      categories,
>>>>>>> 0b01340d150490e949df99635fc9744006a32c2c
      products
    }
  }
}
<<<<<<< HEAD

=======
>>>>>>> 0b01340d150490e949df99635fc9744006a32c2c
