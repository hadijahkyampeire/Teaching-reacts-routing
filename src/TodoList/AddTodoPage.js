import React from 'react';
import { Link } from 'react-router-dom';
import './AddTodoPage.css';

export function AddTodoPage() {
  return (
    <div className='add-todo-page'>
      <div>Add todos for later reference</div>
      <form className='add-todo-form'>
        <input placeholder='todo title' />
        <textarea placeholder='details' />
        <input type='date' />
        <Link className='add-todo-btn' to='/todolist'>Save</Link>
      </form>
    </div>
  );
}