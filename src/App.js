import { Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Skeleton from "react-loading-skeleton";

import { useDarkMode } from "./hook/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global";
import { lightTheme, darkTheme } from "./Themes";
import "react-loading-skeleton/dist/skeleton.css";
import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";
import Cart from "./pages/Cart";
import ProtectedRoutes from "./components/utills/ProtectedRoutes";

import Home from "./pages/Home";
import TechStore from "./pages/TechStore";
import { CartCtx } from "./Contexts/CartContext";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { AuthCtx } from "./Contexts/AuthContext";
import AdminProtection from "./components/utills/AdminProtection";
import Toggle from "./components/Buttons/Toggle";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState([]);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuth(true);
  }, []);
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {isAuth && <Toggle theme={theme} toggleTheme={themeToggler} />}

        <div className="App">
          <CartCtx.Provider value={{ cart, setCart }}>
            <AuthCtx.Provider value={{ login, logout, setIsAuth, isAuth }}>
              <Routes>
                <Route path="login" element={<LoginForm />} />
                <Route path="signup" element={<SignupForm />} />
                <Route element={<ProtectedRoutes />}>
                  <Route
                    path="/"
                    element={
                      <Suspense fallback={<Skeleton count={1} height={40} />}>
                        <Home />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <Suspense fallback={<Skeleton count={1} height={40} />}>
                        <Cart />
                      </Suspense>
                    }
                  />{" "}
                  <Route path="/dashboard" element={<AdminProtection />} />
                  <Route
                    path="/store/:query"
                    element={
                      <Suspense fallback={<Skeleton count={1} height={40} />}>
                        <TechStore />
                      </Suspense>
                    }
                  />
                  <Route
                    path="/product"
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
      </ThemeProvider>
    </>
  );
}

export default App;
