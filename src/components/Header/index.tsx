import styles from './styles.module.scss'

export default function Header(){
    return(
        <>
        <header className={styles.headerContent}>
                <nav>
                    <a href="/">Home</a>
                </nav>
       </header>
        </>
    )
}