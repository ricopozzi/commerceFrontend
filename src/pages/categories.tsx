import commerce from "../services/commerce";
import CategoryList from "../components/CategoryList/index";


export default function CategoriesPage({ categories }) {
  return (
    <>
      <h1>Categories</h1>

      <CategoryList categories={categories} />
    </>
  );
}

export async function getStaticProps() {
    const { data: categories } = await commerce.categories.list();
  
    return {
      props: {
        categories,
      },
    };
  }
  