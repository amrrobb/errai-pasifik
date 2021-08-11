import {
    SET_SEARCH_RESULT,
    SET_CONTENT_URI
} from './actionTypes'
import axios from 'axios'

const setSearchResult = (input) => {
    return {
        type: SET_SEARCH_RESULT,
        payload: input
    }
}

export const setContentUri = (input) => {
    return {
        type: SET_CONTENT_URI,
        payload: input
    }
}

export const fetchSearch = (input) => {
    return (dispatch, getState) => {
        (async () => {
            try {
                let {data} = await axios({
                    method: 'GET',
                    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
                    params: {
                      q: `${input}`,
                      pageNumber: '1',
                      pageSize: '5',
                      autoCorrect: 'true',
                      safeSearch: 'true',
                      fromPublishedDate: 'null',
                      toPublishedDate: 'null'
                    },
                    headers: {
                      'x-rapidapi-key': 'f27e02408emsh8554ab89966bae9p1da3cejsnbed5f31983c1',
                      'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
                    }
                })
                // console.log(data.value);
                dispatch(setSearchResult(data.value))
            }
            catch (err) {
                console.log(err);
            }
    
        }) ()
    };
}