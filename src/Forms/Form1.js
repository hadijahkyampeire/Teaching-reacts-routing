import React from 'react';

export function UserForm() {
  return (
    <div>
      <h2>Form 1</h2>
      <form className='form1'>
        <input placeholder='Enter name' />
        <input placeholder='Enter email' />
        <input placeholder='Enter password' type='password' />
      </form>
    </div>
  );
}
