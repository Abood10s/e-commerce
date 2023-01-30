import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";
import Cart from "./components/Cart/Cart";
import ProtectedRoutes from "./components/utills/ProtectedRoutes";

import Home from "./pages/Home";
import TechStore from "./pages/TechStore";

const ThemeBtn = styled.button`
  border: none;
  border-radius: 50%;
  padding: 0.5rem 0.6rem;
  font-size: 30px;
  border: 1px solid #000;
  cursor: pointer;
  position: fixed;
  top: 20%;
  z-index: 999;
`;

function App() {
  const [isAuth, setIsAuth] = useState(true);
  let [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = localStorage.getItem("theme");
  const theme = currentTheme
    ? {
        primaryClr: "#2C3333",
        secondaryClr: "#E7F6F2",
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

  return (
    <div className="App">
      <ThemeBtn onClick={handleDarkMode}>
        <i class="fa-regular fa-moon"></i>
      </ThemeBtn>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route
            path="/"
            element={<Home theme={theme} handleDarkMode={handleDarkMode} />}
          />
          <Route path="cart" element={<Cart />} />
          <Route path="store" element={<TechStore />} />
          <Route path="*" element={<h2>404 Error sorry...</h2>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
