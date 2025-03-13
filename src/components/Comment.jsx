import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/lumoura0.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fernando Moura</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-01-10 14:20:00">Cerca de 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}