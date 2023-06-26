import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Shared from "./pages/Shared";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Error from "./pages/Error";
import { toHaveValue } from "@testing-library/jest-dom/dist/matchers";

function App() {
  const [user, setUser] = useState(null);

  const userSetter = (value) => {
    setUser(value.name);
  };

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/Login" element={<Login userSetter={userSetter} />} />
          <Route path="Dashboard" element={<Dashboard user={user} />} />
          <Route path="/Products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
