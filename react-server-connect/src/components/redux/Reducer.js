import { CREATE, DELETE, EDIT, LOGIN, UPDATE } from "./Action";

const initialState = {
    data: "",
    isLogin: false,
    isEdit:null
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case UPDATE:
            return {
                ...state,
                data: action.payload
            }
        case DELETE:
            return {
                ...state,
                data: action.payload
            }
        case LOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        case EDIT:
            return {
                ...state,
                isEdit: action.payload
            }

        default:
            return state
    }
}