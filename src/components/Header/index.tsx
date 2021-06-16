import styles from './styles.module.scss'

export default function Header(){
    return(
<<<<<<< HEAD
        <header className={styles.headerContent}>
                <nav>
                    <a href="/">Home</a>
                </nav>
=======
        <header className={styles.headerContainer} >
            <nav className={styles.navContainer}>
                <a href="/" className={styles.home}>Home</a>
            </nav>
>>>>>>> 0b01340d150490e949df99635fc9744006a32c2c
        </header>
    )
}