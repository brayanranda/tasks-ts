import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tasks from './pages/tasks'
import Home from './pages/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/task" element={<Tasks />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
