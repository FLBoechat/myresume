import{FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer () {
    return (
        <footer className={styles.footer}>
            <p>Designed by <strong>Felipe Boechat</strong></p>
            <a href="https://www.linkedin.com/in/flboechat/" target={'_blank'}><FaLinkedin/></a>
        </footer>
    )
}

export default Footer