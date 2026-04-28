import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Registered Users</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;