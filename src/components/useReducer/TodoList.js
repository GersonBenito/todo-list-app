import React from 'react'
import { TodoListItem } from './TodoListItem';
import 'antd/dist/antd.css';
import styled from 'styled-components';

export const TodoList = ({ todos = [], handleDelete, handleUpdate, handleToggle }) => {
    return (
        <Container>
            <ul className='list-group list-group-flush' >
                {
                    todos.map((todo, i) => (
                        <li
                            key={todo.id}
                            className='list-group-item'
                        >
                            <TodoListItem 
                                todo={ todo} 
                                i={i} 
                                handleToggle={ handleToggle } 
                            />
            
                            <div>
                                <button
                                    className="btn btn-outline-warning mr-1"
                                    onClick={() => handleUpdate(todo)}
                                >
                                    Actualizar
                                </button>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Borrar
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
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

// const Text = styled.p`

//     ${ ({decoracion}) =>
//         decoracion ?
//             css`
//                 color: #28a745;
//                 text-decoration: line-through;
//                 cursor: pointer;
//             `:
//             css`
//                 color: #000000;
//                 text-decoration: none;
//                 cursor: pointer;
//             `
//     }
// `;

