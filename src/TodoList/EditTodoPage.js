import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './EditTodoPage.css';

export function EditTodoPage() {
  const location = useLocation();
  const { todo } = location.state;
  return (
    <div className='edit-todo-page'>
      <h2>Edit this Todo: {todo.name}</h2>
      <form className='edit-todo-form'>
        <input placeholder='todo title' value={todo.name} />
        <textarea placeholder='details' value={todo.details} />
        <input type='date' />
        <Link className='edit-todo-btn' to='/todolist'>SaveChanges</Link>
      </form>
    </div>
  );
}