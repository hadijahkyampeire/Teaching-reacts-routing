import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import './App.css';
import { LandingPage } from './LandingPage';
import { TodoListView } from './TodoList/TodoLists';
import { AddTodoPage } from './TodoList/AddTodoPage';
import { EditTodoPage } from './TodoList/EditTodoPage';
import { TodoView } from './TodoList/SingleTodo';
import { FormsDashboard } from './Forms';
import { MyProfile } from './Profile';

function App() {
  return (
    <div className="todo-and-forms">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<LandingPage />} />
          <Route exact path='todolist' element={<TodoListView />} />
          <Route path='todolist/add' element={<AddTodoPage />} />
          <Route path='todolist/:id/edit' element={<EditTodoPage />} />
          <Route path='todolist/:id' element={<TodoView />} />
          <Route path='forms' element={<FormsDashboard />} />
          <Route path='profile' element={<MyProfile />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
