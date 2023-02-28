import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export function LandingPage() {
  return (
    <div className='landing-page'>
      <h3>Get started with my app</h3>
      <p>Explore more by clicking the buttons below or using the navigation</p>
      <div className='landing-btns'>
        <Link to='/todolist' className='landing-btn todos-link'>Go To Todos</Link>
        <Link to='/forms' className='landing-btn forms-link'>Go To Forms</Link>
      </div>
    </div>
  )
}