import styles from './styles.module.scss'
import { BiCreditCard } from 'react-icons/bi'
import { CgSmartphone } from 'react-icons/cg'
import { RiSecurePaymentFill } from 'react-icons/ri'

export default function iconsSection(){
    return(
        <section className={styles.sectionContainer} >
                <div className={styles.iconsContainer}>
                    <div className={styles.credit} >
                    <BiCreditCard size={30} color={'#6C63FF'} />
                    <p>Até 12 vezes sem juros</p>
                    </div>
                    <div className={styles.credit} >
                    <CgSmartphone size={30} color={'#6C63FF'} />
                    <p>Pagamento via pix</p>
                    </div>
                    <div className={styles.credit} >
                    <RiSecurePaymentFill size={30} color={'#6C63FF'} />
                    <p>Pagamento rápido e seguro</p>
                    </div>
                
                </div>
        </section>
    )
}