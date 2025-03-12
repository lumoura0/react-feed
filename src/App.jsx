import { Post } from './components/Post'
import { Header } from './components/Header'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Fernando"
        content="lorem ipsum dolor sit amet, consectetur adipiscing"
      />
      <Post
        author="Shiro"
        content="lorem ipsum dolor sit amet, consectetur adipiscing"
      />
    </div>
  )
}

export default App
