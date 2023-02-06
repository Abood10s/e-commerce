import { Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
// import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";
import Cart from "./pages/Cart";
import ProtectedRoutes from "./components/utills/ProtectedRoutes";

import Home from "./pages/Home";
import TechStore from "./pages/TechStore";
import { CartCtx } from "./CartContext/CartContext";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { AuthCtx } from "./CartContext/AuthContext";
import { useNavigate } from "react-router-dom";

// const ThemeBtn = styled.button`
//   border: none;
//   border-radius: 50%;
//   padding: 0.5rem 0.6rem;
//   font-size: 30px;
//   border: 1px solid #000;
//   cursor: pointer;
//   position: fixed;
//   top: 20%;
//   z-index: 999;
// `;

function App() {
  const [isAuth, setIsAuth] = useState(false);
  let [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
  };

  const currentTheme = localStorage.getItem("theme");
  const theme = currentTheme
    ? {
        primaryClr: "#2C3333",
        secondaryClr: "#C8C8C8",
      }
    : {};
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    isDarkMode ? localStorage.setItem("theme", "dark") : localStorage.clear();
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuth(true);
  }, []);
  return (
    <div className="App">
      <CartCtx.Provider value={{ cart, setCart }}>
        <AuthCtx.Provider value={{ login, logout, setIsAuth, isAuth }}>
          {/* <ThemeBtn onClick={handleDarkMode}>
            <i class="fa-regular fa-moon"></i>
          </ThemeBtn> */}
          <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route element={<ProtectedRoutes isAuth={isAuth} />}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Skeleton count={1} height={40} />}>
                    <Home theme={theme} handleDarkMode={handleDarkMode} />
                  </Suspense>
                }
              />
              <Route
                path="cart"
                element={
                  <Suspense fallback={<Skeleton count={1} height={40} />}>
                    <Cart />
                  </Suspense>
                }
              />
              <Route
                path="store"
                element={
                  <Suspense fallback={<Skeleton count={1} height={40} />}>
                    <TechStore />
                  </Suspense>
                }
              />
              <Route
                path="product"
                element={
                  <Suspense fallback={<Skeleton count={1} height={40} />}>
                    <SingleProduct />
                  </Suspense>
                }
              />

              <Route path="*" element={<h2>404 Error sorry...</h2>} />
            </Route>
          </Routes>
        </AuthCtx.Provider>
      </CartCtx.Provider>
    </div>
  );
}

export default App;
