import React, { useEffect } from 'react';
import Tasks from './Tasks';
import { createRoot } from 'react-dom/client';
import store, { fetchTasks } from './store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Link, HashRouter, Routes, Route } from 'react-router-dom';

const App = ()=> {
  const { tasks } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchTasks());
  }, []);
  return (
    <div>
      <h1><Link to='/'>Acme Tasks ({ tasks.length })</Link></h1>
      <nav>
        <h2><Link to='/easy'>Easy</Link></h2>
        <h2><Link to='/medium'>Medium</Link></h2>
        <h2><Link to='hard'>Hard</Link></h2>
      </nav>
      <Routes>
        <Route path='/easy' element={ <Tasks /> } />
        <Route path='/medium' element={ <Tasks /> } />
        <Route path='/hard' element={ <Tasks /> } />
        <Route path='/' element={ <Tasks /> } />
        <Route path='/tasks/:id' element={ <Tasks /> } />
      </Routes>
      
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<Provider store={ store }><HashRouter><App /></HashRouter></Provider>);
