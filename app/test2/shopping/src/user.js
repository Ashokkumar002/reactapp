import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleSelect = async (event) => {
    const page = event.target.value;
    const url = `https://reqres.in/api/users?page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.data.length > 0) {
        setUsers(data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <select onChange={handleSelect}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <div>
        <h2>User Details</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <p>
                  <strong>Name:</strong>{" "}
                  {`${user.first_name} ${user.last_name}`}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users to display.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
