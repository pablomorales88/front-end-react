import { UserActionTypes } from './user.types';

//esta funcion retorna un objeto con el typo de accion esperado
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user 
})