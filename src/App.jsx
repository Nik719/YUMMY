import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminInterface from './Components/AdminInterface/AdminInterface';
import CustomerInterface from './Components/CustomerInterface/CustomerInterface';
import ConnectUs from './Components/CustomerInterface/ConnectUs';
import AboutUs from './Components/CustomerInterface/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CustomerInterface/>}></Route>
          <Route path='/AdminInterface' element={<AdminInterface/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
          <Route path='/connect' element={<ConnectUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
