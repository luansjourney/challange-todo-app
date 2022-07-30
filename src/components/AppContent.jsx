import React from 'react';
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

function AppContent() {
  const todoList = useSelector(state => state.todo.todoList);

  const sortedTodoList = [...todoList];

  return (
    <div className='content__wrapper'>
      { (sortedTodoList && sortedTodoList.length > 0) ? sortedTodoList.map( (todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))  
      :       <p>Not todo found</p>}
    </div>
  )
}

export default AppContent