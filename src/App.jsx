import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Navigate, Route, Routes,  } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import View from './Pages/View'
import WishList from './Pages/WishList'

function App() {

  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/*' element={<Navigate to={'/'}/>} />

      </Routes>

      <Footer />

    </>
  )
}

export default App
