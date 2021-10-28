import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onErrorHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={onErrorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label data-testid='label_username' htmlFor='username'>
            Username
          </label>
          <input
            id='username'
            data-testid='input_username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label data-testid='label_age' htmlFor='age'>
            Age (Years)
          </label>
          <input
            id='age'
            data-testid='input_age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button
            id='button_adduser'
            data-testid='button_adduser'
            type='submit'
            onSubmit={addUserHandler}
          >
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
