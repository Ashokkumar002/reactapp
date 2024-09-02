import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/userSlice';
import { Link } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>User List Page</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>Users loaded successfully!</p>}
      {status === 'failed' && <p>Failed to load users.</p>}
      <Link to="/showuserlist">Show User List</Link>
    </div>
  );
};

export default UserList;