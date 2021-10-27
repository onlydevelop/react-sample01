import React, { useState } from 'react';

import './App.css';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  const deleteUserHandler = (id) => {
    console.log('Delete event' + id);
    setUsersList((prevUsersList) => {
      return prevUsersList.filter((user) => user.id !== id);
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteUser={deleteUserHandler} />
    </div>
  );
};

export default App;
