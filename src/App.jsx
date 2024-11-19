import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/Login';
import Home from './components/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
