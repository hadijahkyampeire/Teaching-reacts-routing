import React from 'react';
import { useLocation } from 'react-router-dom';

import './SingleTodo.css';

export function TodoView() {

  const location = useLocation();
  const { todo } = location.state;

  return (
    <section className='single-todo'>
      <div className='title-todo'>You are viewing: <strong>{todo.name}</strong> Todo</div>
      <div>
        <span>Date: Mar 1, 2023</span>
        <div>{todo.details}</div>
      </div>
      <div className='buttons'>
        <button className='delete-btn'>Delete</button>
        <button className='edit-link'>Edit</button>
      </div>
    </section>
  );
}
