import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/todoSlice";
import Button from "./Button";
import { v4 as uuid } from 'uuid';
import {toast} from "react-hot-toast";

function TodoModal({ type, modalOpen, setModalOpen, todo}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('new');
    const [priority, setPriority] = useState('low');

    const dispatch = useDispatch();

    useEffect( () => {
        if(type === 'update' && todo) {
            setTitle(todo.title);
            setDescription(todo.description);
            setStatus(todo.status);
            setPriority(todo.priority);
        } else {
            setTitle('');
            setDescription('');
            setStatus('new');
            setPriority('low');
        }
    }, [type, todo, modalOpen])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === '') {
            toast.error('Please enter a title.');
        }
        if (description === '') {
            toast.error('Please enter a description.');
        }
        if(title && description && status && priority) {
            if(type === 'add') {
                dispatch(addTodo({
                    id: uuid(),
                    title,
                    description,
                    status,
                    priority,
                })
                );
                toast.success('Task added Successfully');
            } 
            if( type === 'update') {
                if( todo.title !== title || todo.status !== status)
                dispatch(updateTodo({
                    ...todo,
                    title,
                    description,
                    status,
                    priority,
                })
                );
                toast.success('Task modified Successfully.');
            } else if ( type === 'update'){
                toast.error("No changes were made.");
            }
            setModalOpen(false);
        }            
    };

    if(!modalOpen) {
        return '';
    }
  return (
    <div className='wrapper'>
        <div className='container'>
            <div className='closeButton' onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="button">
                <MdOutlineClose />
            </div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="formTitle"> {type === 'update' ? 'Update' : "Add"} Task </h1>
                <label htmlFor="title">
                    Title
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label htmlFor="description">
                    Description 
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <label htmlFor="status">
                    Status
                    <select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="new">New</option>
                        <option value="in progress">In Progress</option>
                        <option value="finished">Finished</option>
                    </select>
                </label>
                <label htmlFor="priotity">
                    Priority
                    <select name="priotity" id="priotity" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </label>
                <div className="buttonContainer">
                    <Button type="submit" variant="primary">{type === 'update' ? 'Update' : "Add"} Task</Button>
                    <Button type="button" variant="secondary" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} >Cancel</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TodoModal