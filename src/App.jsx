import { NavLink, Route, Routes } from "react-router-dom"
import IncomePage from './pages/IncomePage'
import ExpensesPage from './pages/ExpensesPage'
import NotFoundPage from './pages/NotFoundPage'
import PostsPage from "./pages/posts"
import OnePostPage from "./pages/posts/OnePostPage"
import LoginPage from "./pages/LoginPage"

function App() {

  return (
    <>
      <header>
        <NavLink className={({isActive}) => isActive ? "black_border" : ""} to="/">home</NavLink>
        <NavLink to="/income">income</NavLink>
        <NavLink to="/expenses">expenses</NavLink>
        <NavLink to="/posts">posts</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<OnePostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>2024</footer>
    </>
  )
}

export default App
