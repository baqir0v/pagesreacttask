import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Gallery from './components/pages/Gallery'
import Shortcodes from './components/pages/Shortcodes'
import Languages from './components/pages/Languages'
import Pagemarkup from './components/pages/Pagemarkup'
import Contactform from './components/pages/Contactform'
import Pageimg from './components/pages/Pageimg'
import Clearfloat from './components/pages/Clearfloat'
import Comment from './components/pages/Comment'
import Nocomment from './components/pages/Nocomment'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/gallery' exact element={<Gallery/>}></Route>
        <Route path='/gallery' exact element={<Gallery/>}></Route>
        <Route path='/shortcodes' exact element={<Shortcodes/>}></Route>
        <Route path='/languages' exact element={<Languages/>}></Route>
        <Route path='/pagemarkup' element={<Pagemarkup/>}></Route>
        <Route path='/contactform' element={<Contactform/>}></Route>
        <Route path='/pageimg' element={<Pageimg/>}></Route>
        <Route path='/clearfloat' element={<Clearfloat/>}></Route>
        <Route path='/comment' element={<Comment/>}></Route>
        <Route path='/nocomment' element={<Nocomment/>}></Route>
      </Routes>
    </>
  )
}

export default App
