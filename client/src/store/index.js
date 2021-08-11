import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {
    SET_SEARCH_RESULT,
    SET_CONTENT_URI,
} from './actionTypes'

const initialState = {
    searchResult: [],
    contentUri: "",
}

const reducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_SEARCH_RESULT:     
            return {...state, searchResult: payload}

        case SET_CONTENT_URI:     
            return {...state, contentUri: payload}
    
        default:
            return state
    }
}


const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store