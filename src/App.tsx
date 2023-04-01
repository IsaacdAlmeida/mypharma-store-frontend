import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { store } from './redux/store';

export function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Provider>
    </div>
  );
}
