import * as t from './actionTypes'

const initialState = {
    isLoading: false,
    data: null,
    error: null,
    searchQuery: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case t.FETCH_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case t.FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null
            }
        case t.FETCH_FAILURE:
            return {
                error: action.payload
            }
        case t.FIND_ITEM:
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state
    }
}