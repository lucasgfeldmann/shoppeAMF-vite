import type { FC } from 'react';
import { Route, Routes } from 'react-router';
import GetStart from './pages/GetStart';
import Register from './pages/Register';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Shop from './pages/Shop';
import InfoProduct from './pages/InfoProduct';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<DashBoard />}>
        <Route path="/product" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="/product/:id" element={<InfoProduct />} />
    </Routes>
  );
}

export default App;
