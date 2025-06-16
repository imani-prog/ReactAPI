import React, { useEffect, useState } from "react";

const SimpleMenuList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <div>
      <h2>Users 😂🐪</h2>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h2>Akili imejam, Kesho bana😂🐪</h2>
    </div>
  );
};

export default SimpleMenuList;
