import * as t from './actionTypes'
import { httpGet } from '../../helpers/network'

export const getFetchData = () => {
    return async dispatch => {
        dispatch({
            type: t.FETCH_START
        })

        try {
            const data = await httpGet('posts');
            dispatch({
                type: t.FETCH_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: t.FETCH_FAILURE,
                payload: error
            })
        }
    }
}

export const getSearchValue = (searchQuery) => {
    return {
        type: t.FIND_ITEM,
        payload: searchQuery
    }
}

export const updateFetchData = (newData) => {
    return {
        type: t.FETCH_SUCCESS,
        payload: newData
    }
}