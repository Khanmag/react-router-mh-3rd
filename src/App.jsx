import { Link, Route, Routes } from "react-router-dom"
import IncomePage from './pages/IncomePage'
import ExpensesPage from './pages/ExpensesPage'
import NotFoundPage from './pages/NotFoundPage'
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
        <Link to="/">home</Link>
        <Link to="/income">income</Link>
        <Link to="/expenses">expenses</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>APP</h1>} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>2024</footer>
    </>
  )
}

export default App
