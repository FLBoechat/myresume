import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Container>   

                <div className={styles.item}>
                    <Link to="/" >Felipe Boechat</Link>
                </div>
                
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/Contact">about me</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/">learning</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/">contact</Link>
                    </li>
                </ul>
               
            </Container>
      </nav>
    )
}

export default Navbar