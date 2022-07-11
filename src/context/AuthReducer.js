import { 
    IS_LOADING,
    GET_USER,
    REGISTER_SUCCES,
    REGISTER_ERROR,
    LOGOUT,
    LOGIN_SUCCESS
} from '../types'


//definiendo una funcion que nos sirve como reducer

const authReducer = (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCES:
            case LOGIN_SUCCESS:
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
                case LOGOUT: 
                return {
                    ...state,
                    user:null,
                    isAuth:false,
                    loading: false
                }
        default:
            return state;
        
    }
}


export default authReducer;