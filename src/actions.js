import * as actions_type from './actions_type'

export function bugAdded (description){
    return{
        type: actions_type.BUG_ADDED,
        payload: {
            description: description
        }
    }
}

export function bugRemoved (id){
    return{
        type: actions_type.BUG_REMOVED,
        payload: {
            id: id
        }
    }
}

export function bugSolved (id) {
    return{
        type: actions_type.BUG_SOLVED,
        payload: {
            id: id
        }
    }
}