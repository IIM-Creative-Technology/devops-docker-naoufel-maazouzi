import { FETCH_FILMS_SEARCH_SUCCES, FETCH_FILMS_SEARCH_FAIL, FETCH_FILMS_SEARCH_REFRESH } from '../types';

const initialeState = () => ({
  searchFilmsFetched: [],
  error: '',
});

// Films search reducers
const filmSearchReducers = (state = initialeState, action) => {
    if (action) {
        switch (action.type) {
            case FETCH_FILMS_SEARCH_SUCCES:
            return {
                searchFilmsFetched: action.payload.filmsFetched,
                search: action.payload.search,
                error: '',
            };
            case FETCH_FILMS_SEARCH_FAIL:
            return {
                searchFilmsFetched: [],
                error: action.payload,
            };

            case FETCH_FILMS_SEARCH_REFRESH:
            return {
                searchFilmsFetched: [],
                error: '',
            };
            default:
            return state;
        }
    }
    return state;
};

export default filmSearchReducers;
