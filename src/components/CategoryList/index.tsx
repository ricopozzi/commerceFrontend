import Link from "next/link";
import Category from "../Category/index";
import styles from './styles.module.scss'

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryContainer}>
        {categories.map((category) => (
          <div className={styles.category} key={category.slug}>
            <Link href={`/categories/${category.slug}`}>
              <a>
                <Category {...category} />  
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}