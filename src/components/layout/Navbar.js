import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

function Navbar () {
    return (
        <nav class={styles.navbar}>
            <Container>   
                
                <div class={styles.item}>
                    <Link to="/" >Felipe Boechat</Link>
                </div>
                
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/Contact">about me</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/">learning</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/">contact</Link>
                    </li>
                </ul>
               
            </Container>
      </nav>
    )
}

export default Navbar