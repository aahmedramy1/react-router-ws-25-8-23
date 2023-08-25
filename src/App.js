import NavigationBar from "./components/NavigationBar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import User from "./pages/User";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";

function App() {
    const isAuth = window.localStorage.getItem('isAuth');

  return (
    <div>
      <NavigationBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} >
                <Route path="/user/account" element={<Account />} /> { /* /user/account */}
                <Route path="/user/profile" element={<Profile />} /> { /* /user/profile */}
            </Route>
            <Route path="/admin" element={
                <PrivateRoute isAuth={isAuth === "true"}>
                    <Admin />
                </PrivateRoute>
            }
            />
        </Routes>
    </div>
  );
}

export default App;
