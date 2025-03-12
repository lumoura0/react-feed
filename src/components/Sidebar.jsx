import styles from './Sidebar.module.css'
import capa from '../assets/capa.png'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={capa} alt="Capa" />
            <div className={styles.profile}>
                <strong>Luis Fernando</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}