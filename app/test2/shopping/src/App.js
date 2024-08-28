import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Product from "./product";
import UserList from "./user";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/user-list">User List</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
