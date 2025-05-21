import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminInterface from './Components/AdminInterface/AdminInterface';
import CustomerInterface from './Components/CustomerInterface/CustomerInterface';
import ConnectUs from './Components/CustomerInterface/ConnectUs';
import AboutUs from './Components/CustomerInterface/AboutUs';
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<CustomerInterface />} />
        <Route path="/admin" element={<AdminInterface />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/connect" element={<ConnectUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
