import stream from '../api/stream'
import history from '../history'
export const signIn = (id) => {
    return {
        type: 'SIGN_IN',
        payload: id
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth
    const res = await stream.post('/stream', {...formValues, userId})
    dispatch({
        type: 'CREATE_STREAM',
        payload: res.data
    })
    history.push('/')
}

export const fetchAllStream = () => async dispatch => {
    const res = await stream.get('/stream')
    dispatch({
        type: 'FETCH_ALL_STREAM',
        payload: res.data
    })
}

export const fetchOneStream = (id) => async dispatch => {
    const res = await stream.get(`/stream/${id}`)
    dispatch({
        type: 'FETCH_ONE_STREAM',
        payload: res.data
    })
}

export const editStream = (id, formValues) => async dispatch => {
    const res = await stream.patch(`/stream/${id}`, formValues)
    dispatch({
        type: 'EDIT_STREAM',
        payload: res.data
    })
    history.push('/')
}

export const deleteStream = (id) => async dispatch => {
    await stream.delete(`/stream/${id}`)
    dispatch({
        type: 'DELETE_STREAM',
        payload: id
    })
    history.push('/')
}
