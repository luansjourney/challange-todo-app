import React from 'react';
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';

const container = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: .2,
    },
  },
};

const child = {
  hidden: {
    y:20, 
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const todoList = useSelector(state => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const sortedTodoList = [...todoList];

  const filteredTodoList = sortedTodoList.filter( (item) => {
    if (filterStatus === 'all'){
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <motion.div className='content__wrapper'
    variants={container}
    initial='hidden'
    animate='visible'
    >
      <AnimatePresence>
        { filteredTodoList && filteredTodoList.length > 0 ? filteredTodoList.map( (todo) => 
          <TodoItem key={todo.id} todo={todo} />
        )  
        : (<motion.p className='emptyText' variants={child}>No To Do found</motion.p>)}
      </AnimatePresence>
    </motion.div>
  )
}

export default AppContent