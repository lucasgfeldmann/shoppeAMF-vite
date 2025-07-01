import type { FC } from 'react';
import { Route, Routes } from 'react-router';
import GetStart from './pages/GetStart';
import Register from './pages/Register';
import Login from './pages/Login';
import AuthRoute from './routes/AuthRoute';
import OrderHistory from './pages/OrderHistory';
import Account from './pages/Account';
import Home from './pages/Home';
import InfoProduct from './pages/InfoProduct';
import AdminRoute from './routes/AdminRoute';
import ListProducts from './pages/ListProducts';
import ListOrders from './pages/ListOrders';
import ListUsers from './pages/ListUsers';
import EditProduct from './pages/EditProduct';
import EditOrder from './pages/EditOrder';
import EditUser from './pages/EditUsers';
import NotFound from './pages/NotFound';
import CreateUser from './pages/CreateUser';
import CreateProduct from './pages/CreateProduct';
import CreateOrder from './pages/CreateOrder';


const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GetStart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route element={<AuthRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/my-orders" element={<OrderHistory />} />
        <Route path="/account" element={<Account />} />
        <Route path="/:id" element={<InfoProduct />} />
      </Route>

      <Route element={<AdminRoute />}>
        <Route path="/products" element={<ListProducts />} />
        <Route path="/products/:id" element={<EditProduct />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/orders" element={<ListOrders />} />
        <Route path="/orders/:id" element={<EditOrder />} />
        <Route path="/orders/create" element={<CreateOrder />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/users/:id" element={<EditUser />} />
        <Route path="/users/create" element={<CreateUser />} />
      </Route>

      <Route path="/*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
