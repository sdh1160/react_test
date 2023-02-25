import React, { useState } from "react";

import AddUser from "./components2/User/AddUser";
import UserList from "./components2/User/UserList";

const App = () => {
  const USER_LIST = [];
  const [users, setUsers] = useState(USER_LIST);
  const addUserHandler = (uName, uAge) => {
    setUsers((prevUser) => {
      return [
        { name: uName, age: uAge, key: Math.random().toString() },
        ...prevUser,
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;
