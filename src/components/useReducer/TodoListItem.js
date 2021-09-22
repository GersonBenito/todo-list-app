import React from 'react';
import { Tooltip } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styled, { css } from 'styled-components';

export const TodoListItem = ({ todo, i, handleToggle }) => {
    
    return (
        <>
            <Tooltip
                title={todo.done ? 'Click para reiniciar tarea' : 'Click para completar tarea'}
                color={todo.done ? '#28a745' : '#108ee9'}
            >
                <Text
                    decoracion={todo.done}
                    onClick={() => handleToggle(todo.id)}
                >
                    {i + 1}. {todo.descripcion}
                </Text>
            </Tooltip>
            {
                todo.done &&
                <p className='text-success' ><CheckCircleOutlined /></p>
            }
        </>
    )
}

const Text = styled.p`

    ${ ({decoracion}) =>
        decoracion ?
            css`
                color: #28a745;
                text-decoration: line-through;
                cursor: pointer;
            `:
            css`
                color: #000000;
                text-decoration: none;
                cursor: pointer;
            `
    }
`;
