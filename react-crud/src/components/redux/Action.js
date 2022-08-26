export const CREATE = "CREATE"
export const UPDATE = "UPDATE"
export const LOGIN = "LOGIN"
export const DELETE = "DELETE"
export const EDIT = "EDIT"

export const create = (userData) => {
    return {
        type: CREATE,
        payload: userData
    }
}

export const update = (userData) => {
    return {
        type: UPDATE,
        payload: userData

    }
}

export const userDelete = (userData) => {
    return {
        type: DELETE,
        payload: userData
    }
}

export const authEdit = (userData) => {
    return {
        type: EDIT,
        payload: userData
    }
}

export const auth = (userData) => {
    return {
        type: LOGIN,
        payload: userData
    }
}