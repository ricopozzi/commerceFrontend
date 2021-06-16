import commerce from "../services/commerce";
import ProductList from "../components/ProductList";



export default function ProductsPage({ products }) {
  return (
    <>
      <h1>Products</h1>

      <ProductList products={products} />
    </>
  );
}
export async function getStaticProps() {
    const { data: products } = await commerce.products.list();
  
    return {
      props: {
        products,
      },
    };
  }