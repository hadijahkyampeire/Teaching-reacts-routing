import React from 'react';
import { Link } from 'react-router-dom';

import './TodoList.css';

const Todo = ({ todo }) => {
  return (
    <div className='todo-card'>
      <div>{todo.name}</div>
      <div>
        <Link to={`/todolist/${todo.id}`} className='todo-btn primary' state={{ todo }}>View</Link>
        <Link to={`/todolist/${todo.id}/edit`} className='todo-btn secondary' state={{ todo }}>Edit</Link>
      </div>
    </div>
  );
};

export function TodoListView() {
  const sampleTodos = [
    { id: 1, name: 'Go To the Market', details: 'Buy some stuff and check on some stuff' },
    { id: 2, name: 'Go To the School', details: 'Have a lecture' },
    { id: 3, name: 'Cook food', details: 'Grab some ingredients' },
    { id: 4, name: 'Make some notes', details: 'List some things on my mind' },
    { id: 5, name: 'Do some coding', details: 'Pick a ticket to work on' },
    { id: 6, name: 'Visit a friend', details: 'Prepare for a visit' }
  ];
  return (
    <section className='todo-list'>
      <div className='title'>Here are my Todos</div>
      <Link to='/todolist/add' className='todo-btn add-todo'>Add a Todo</Link>
      <div className='todos'>
        {sampleTodos.map(todo => <Todo todo={todo} key={todo.id} />)}
      </div>
    </section>
  );
}
