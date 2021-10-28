# A Sample React App

This is a simple react project by Max ([Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)) from one of his famous course in Udemy. He is brilliant in his content and delivery. If anyone is interested please check his courses. 

I have used his tutorial and added the interesting(only) unit tests for one of the component (the other component is very simple).

Running it is pretty straight forward. 

```bash
$ npm install # to install dependencies
$ npm start # to start the development server
$ npm test # to run the npm test (watch mode)
$ npm run coverage # to run the test coverage
> react-sample01@0.1.0 coverage
> react-scripts test '--coverage' '--watchAll=false'

 PASS  src/components/Users/AddUser.test.js
  Add User: Basic
    ✓ creates the component (48 ms)
    ✓ takes valid input (33 ms)
    Add User: Negative cases
      ✓ gives error with blank username (22 ms)
      ✓ gives error with blank age (19 ms)
      ✓ gives error with negative age (23 ms)

----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   61.36 |      100 |   41.17 |   62.79 |                   
 src                  |       0 |      100 |       0 |       0 |                   
  App.js              |       0 |      100 |       0 |       0 | 8-27              
  index.js            |       0 |      100 |     100 |       0 | 6                 
 src/components/UI    |     100 |      100 |     100 |     100 |                   
  Button.js           |     100 |      100 |     100 |     100 |                   
  Card.js             |     100 |      100 |     100 |     100 |                   
  ErrorModal.js       |     100 |      100 |     100 |     100 |                   
 src/components/Users |   80.76 |      100 |      50 |   80.76 |                   
  AddUser.js          |   95.45 |      100 |      80 |   95.45 | 45                
  UsersList.js        |       0 |      100 |       0 |       0 | 6-13              
----------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        4.502 s
Ran all test suites.
```