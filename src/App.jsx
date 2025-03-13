import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Fernando"
            content="lorem ipsum dolor sit amet, consectetur adipiscing"
          />
          <Post
            author="Fernando"
            content="lorem ipsum dolor sit amet, consectetur adipiscing"
          />
        </main>
      </div>
    </div>
  )
}

export default App
