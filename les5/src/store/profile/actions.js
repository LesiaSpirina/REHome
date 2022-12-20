
import * as types from '../profile/types'

export const changeName = (data) => { //здесь м.б name,data,payload or smt else

    return {
    type: types.CHANGE_NAME,
    payload: data
    }
}

export const toggleProfile = () => {
       return{
        type: types.TOGGLE_PROFILE
       }
}