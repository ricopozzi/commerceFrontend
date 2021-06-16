import Link from "next/link";

import Product from "../Product/index"
import styles from './styles.module.scss'

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <section className={styles.productsContainer}>
      <div className={styles.productsDiv}>
        {products.map((product) => (
          <div className={styles.product} key={product.permadivnk}>
            <Link href={`/products/${product.permalink}`}>
              <a>
                <Product {...product} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}