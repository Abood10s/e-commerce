import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginForm from "./components/forms/LoginForm";
import SignupForm from "./components/forms/SignupForm";
import Cart from "./components/Cart/Cart";
import ProtectedRoutes from "./components/utills/ProtectedRoutes";

import Home from "./pages/Home";
import TechStore from "./pages/TechStore";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  let [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = localStorage.getItem("theme");
  const theme = currentTheme
    ? {
        primaryClr: "#121212",
        secondaryClr: "#bbb",
      }
    : {
        primaryClr: "#fff",
        secondaryClr: "#000000",
      };
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
