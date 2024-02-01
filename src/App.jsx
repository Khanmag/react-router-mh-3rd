import { Link, NavLink, Route, Routes } from "react-router-dom"
import IncomePage from './pages/IncomePage'
import ExpensesPage from './pages/ExpensesPage'
import NotFoundPage from './pages/NotFoundPage'
import PostsPage from "./pages/posts"
import OnePostPage from "./pages/posts/OnePostPage"
// import Layout from "./Layout"

function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>APP</h1>} />
          <Route path="income" element={<IncomePage />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes> */}
      <header>
        <NavLink className={({isActive}) => isActive ? "black_border" : ""} to="/">home</NavLink>
        <NavLink to="/income">income</NavLink>
        <NavLink to="/expenses">expenses</NavLink>
        <NavLink to="/posts">posts</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>APP</h1>} />
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
