import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import ArticlePage from './components/ArticlePage'
import ArticlesByTopic from './components/ArticlesByTopic'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/topics/:topic" element={<ArticlesByTopic />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  )
}

export default App
