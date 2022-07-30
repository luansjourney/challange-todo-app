import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
    const localTodoList = window.localStorage.getItem('todoList');
    if(localTodoList){
        return JSON.parse(localTodoList);
    } 
    window.localStorage.setItem('todoList', JSON.stringify([]));

    return []
};


const initialValue = {
    filterStatus: 'all',
    todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem('todoList');
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                todoListArr.push({
                    ...action.payload,
                });
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
            } 
        },
        deleteTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList');
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach( (todo, index) => {
                    if(todo.id === action.payload){
                        todoListArr.splice(index, 1);
                    }
                });
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                state.todoList = todoListArr;
            }
        },
        updateTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList');
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach( (todo, index) => {
                    if(todo.id === action.payload.id){
                        todo.title = action.payload.title;
                        todo.description = action.payload.description;
                        todo.status = action.payload.status;
                        todo.priority = action.payload.priority;
                    }
                });
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                state.todoList = todoListArr;
            }
        },
        
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

