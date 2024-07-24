import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
// import Routers from './Routers/Routers';

function App() {
  const isAdmin=true;
  return (
    <div className="app">
      
      <Routes>

        {/* Navigation to the customer page */}
        <Route path="/*" element={<CustomerRoutes />} />

        {/* Navigation to the admin page */}
        <Route path="/admin/*" element={<AdminPannel />} />
        
      </Routes>
    </div>
  );
}

export default App;
