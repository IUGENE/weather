import styles from './Container.module.css'
import background from '../assets/background2.jpg'
const Container1 = ({children}) => {
    return (
        <div className={styles.locationImage}>
             <img src={background} alt="" className={styles.backgroundImage} />
             {children}
        </div>
    )
}

export default Container1