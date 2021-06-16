import commerce from "../../services/commerce";
import ProductList from "../../components/ProductList";
import { GetStaticPaths, GetStaticProps } from "next";

export default function CategoryPage({ category, products }) {
    return (
      <>
        <h1>{category.name}</h1>
  
        <ProductList products={products} />
      </>
    );
  }
  

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  // @ts-ignore: Unreachable code error   
  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products,
    },
  };
}


export const getStaticPaths: GetStaticPaths = async () => {

    const { data: categories } = await commerce.categories.list();

    return {
      paths: categories.map((category) => ({
        params: {
          slug: category.slug,
        },
      })),
      fallback: false,
    };
  }