import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className='container mx-auto'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default App