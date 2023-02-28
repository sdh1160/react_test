import React, { useState, Fragment } from "react";

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
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </Fragment>
  );
};

export default App;
