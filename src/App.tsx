import type { FC } from 'react';
import { Route, Routes } from 'react-router';
import GetStart from './pages/GetStart';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthRoutes from './pages/AuthRoutes';
import OrderHistory from './pages/OrderHistory';
import Account from './pages/Account';
import Home from './pages/Home';
import InfoProduct from './pages/InfoProduct';


const App: FC = () => {
  return (
    <Routes>
      <Route index element={<GetStart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route element={<AuthRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/my-orders" element={<OrderHistory />} />
        <Route path="/account" element={<Account />} />
        <Route path="/:id" element={<InfoProduct />} />
      </Route>

    </Routes>
  );
}

export default App;
