import { Route, Routes } from "react-router-dom"
import IncomePage from './pages/IncomePage'
import ExpensesPage from './pages/ExpensesPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>APP</h1>} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
