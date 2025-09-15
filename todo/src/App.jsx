import React from 'react';
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import Button from './components/Button'
import './style.css'

const App = () => {
  return(
    <div className='Todo-container'>
      <Header title="ToDo"/>
      <TodoItem completed={false} text="Eat"/>
      <TodoItem text="play"/>
      <TodoItem text="study"/>
      <TodoItem text="code"/>
      <Button/>
    </div>
  )

}

export default App
