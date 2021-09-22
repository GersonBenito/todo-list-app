import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

export const TodoApp = () => {

    const [ message, setMessage ] = useState('');

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    const handleDelete = (id) =>{

        dispatch({
            type: 'DELETE_TODO',
            payload: id,
        });
    }

    const handleToggle = (id) =>{

        dispatch({
            type: 'TOGGLE_TODO',
            payload: id
        })

    }

    const handleAddTodo = (todo) =>{
        dispatch({
            type: 'ADD_TODO',
            payload: todo
        })
    }

    const handleUpdate = (todo) =>{
        console.log('id update',todo);
        if(todo.done){
            console.log('la tarea ', todo.descripcion, 'ya esta completado');
        }

        // dispatch({
        //     type: 'update',
        //     payload: todo.id
        // })
    }

    useEffect(()=>{

        localStorage.setItem('todos', JSON.stringify( todos ));

    },[todos])

    return (
        <Container className='p-3'>
            
            <h2
                className={`text-${ message ? 'danger':'info' }`}
            >
                TodoApp ({todos.length}) 
            </h2>

            <div className="row">

                <div className="col-7">

                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                        handleUpdate={ handleUpdate } 
                    />
                    
                </div>

                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                        setMessage={ setMessage }
                        message={ message }
                    />

                </div>

            </div>

        </Container>
    )
}


const Container = styled.div`
    .completado{
        text-decoration: line-through;
    }

    .list-group-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .list-group-item > p{
        margin: 0;
    }

`;
