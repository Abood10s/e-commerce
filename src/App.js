import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import Home from "./pages/Home";
import TechStore from "./pages/TechStore";
import SignupForm from "./components/forms/SignupForm";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />

        <Route path="/" element={<TechStore />} />
      </Routes>
    </div>
  );
}

export default App;
