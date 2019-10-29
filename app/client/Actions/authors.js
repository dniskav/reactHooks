import { GET_AUTHORS, LOADING_AUTHORS } from "./actionTypes";

export const getAuthors = (authors) => ({
    type: GET_AUTHORS,
    authors,
});

export const authorsLoading = (authorsLoader) => ({
    type: LOADING_AUTHORS,
    authorsLoader,
});

export const fecthAuthors = (dispatch) => {
    return async () => {
        dispatch(authorsLoading(true));
        const res = await fetch(`/authors`);
        const authors = await res.json();
        dispatch(authorsLoading(false));
        dispatch(getAuthors(authors.data));
    };
};
