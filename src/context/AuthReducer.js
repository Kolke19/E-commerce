import { 
    IS_LOADING,
    GET_USER,
    REGISTER_SUCCES,
    REGISTER_ERROR
} from '../types'


//definiendo una funcion que nos sirve como reducer

const authReducer = (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCES:
            return {
                ...state,
                isAuth: true,
                user: action.payload.data.user,
                loading: false
            }
            case GET_USER:
                return {
                    ...state,
                    user:action.payload.user,
                    isAuth: true,
                    loading: false
                }
        default:
            return state;
        
    }
}


export default authReducer;