import React from 'react';
import UserForm from './UserForm';
import Table from './Table';
import Button from './Button';

function App() {
  return (
    <>
    <UserForm />
    <Table />
    <Button action="delete" />
    <Button action="clear-table" />
    </>
  );
}

export default App;
