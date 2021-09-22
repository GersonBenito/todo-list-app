const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const TOGGLE_TODO  = 'TOGGLE_TODO';
const TOGGLE_TODO_OLD = 'TOGGLE_TODO_OLD';

export const todoReducer = (state = [], action) =>{

    switch ( action.type ) {
        case ADD_TODO:
            return [ ...state, action.payload ];

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);

        case UPDATE_TODO:
            return state.map( todo =>
                todo.id === action.id ? { ...todo, descripcion: action.payload } : todo
            )

        case TOGGLE_TODO:
            return state.map( todo =>
                // usando retorno implicito
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo

            );

        case TOGGLE_TODO_OLD:
            return state.map( todo =>{

                if(todo.id === action.id){

                    return{
                        ...todo,
                        done: !todo.done
                    }

                }else{

                    return todo;
                }

            });
    
        default:
            return state;
    }

}