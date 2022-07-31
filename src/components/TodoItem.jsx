import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import {toast} from "react-hot-toast";
import { motion } from "framer-motion";
import TodoModal from './TodoModal';
import CheckedButton from './CheckedButton';


const child = {
    hiddden: {
      y:20, 
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };


function TodoItem( { todo }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);

    useEffect( () => {
        if(todo.status === 'finished'){
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [todo.status]);

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
        toast.success("Todo Deleted successfully");
    };

    const handleUpdate = () => {
        setUpdateModalOpen(true);
    };

    const handleCheck = () => {
        setChecked(!checked);
        dispatch(updateTodo({
            ...todo,
            status: checked ? 'in progress' : 'finished',
        }))
    };

  return (
    <>
        <motion.div className='item' variants={child}>
            <div className="todoDetails">
                <CheckedButton checked={checked} handleCheck={handleCheck} />
                <div className="texts">
                    <p className={(todo.status === 'finished') ? 'todoText--completed' : 'todoText' }>
                        {todo.title}
                    </p>
                    <p className="priority">{todo.priority}</p>
                </div>
            </div>
            <div className="todoActions">
                <div className="icon" onClick={handleUpdate} onKeyDown={handleUpdate} role="button" tabIndex={0}>
                    <MdEdit />
                </div>
                <div className="icon"  onClick={handleDelete} onKeyDown={handleDelete} role="button" tabIndex={0}>
                    <MdDelete />
                </div>
            </div>
        </motion.div>
        <TodoModal modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} type="update" todo={todo}/>
    </>
  )
}

export default TodoItem