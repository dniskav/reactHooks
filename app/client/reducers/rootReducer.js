import { initialState } from './initialState';
import { GET_AUTHORS, GET_PUBLICATIONS, LOADING_AUTHORS, ENABLE_DRAG, DISABLE_DRAG } from '../Actions/actionTypes';

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTHORS:
            return { ...state, authors: action.authors };
        case LOADING_AUTHORS:
            return { ...state, authorsLoader: action.authorsLoader };
        case GET_PUBLICATIONS:
            return { ...state, publications: action.publications };
        case ENABLE_DRAG:
            return { ...state, draggable: action.item };
        case DISABLE_DRAG:
            return { ...state, draggable: null };
        default:
            return state;
    }
};
