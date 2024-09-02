import React from 'react';
import { Link } from 'react-router-dom';
import Web from './web';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/userlist">Go to User List</Link>
      <Web/>
    </div>
  );
};

export default Home;