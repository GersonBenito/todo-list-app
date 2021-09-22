import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo, message, setMessage }) => {

    const [ { descripcion }, handleInputChange, reserForm ] = useForm({
        descripcion: '',
    });

    const handleSumbit = (evt) =>{

        evt.preventDefault();
        
        if( descripcion.trim().length <= 0 ){
            setMessage('Campo descripcion esta vacio');
            return;
        }

        const todo = {
            id: new Date().getTime(),
            descripcion: descripcion,
            done: false,
        }

        handleAddTodo( todo );
         
        reserForm();

    }

    useEffect(()=>{

        if(descripcion){
            setMessage('');
        }

    },[descripcion, setMessage]);

    return (
        <>
            <h4
                className={`text-${message ? 'danger' : 'info'}`}
            >
                Agregar TODOs
            </h4>

            <form
                onSubmit={handleSumbit}
            >

                <input
                    type="text"
                    name='descripcion'
                    placeholder='Nombre de la tarea'
                    className='form-control'
                    value={descripcion}
                    autoComplete='off'
                    onChange={handleInputChange}
                />

                {message && <span className='text-danger' >{message}</span>}

                <button
                    type='submit'
                    className={`btn btn-outline-${message ? 'danger' : 'info'} mt-2 btn-block`}
                >
                    Agregar
                </button>

            </form>
        </>
    )
}

