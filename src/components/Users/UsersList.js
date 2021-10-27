import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old){' '}
            <Button onClick={() => props.onDeleteUser(user.id)}>
              Delete User
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
