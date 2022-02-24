import { STATS } from '../constants';
const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case STATS.LOAD:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    error: false,
                    downloads: null,
                },
            };
        case STATS.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    error: false,
                    downloads: action.downloads,
                },
            };

        case STATS.LOAD_FAIL:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    error: true,
                    downloads: null,
                },
            };
        default:
            return state;
    }
};
export default statsReducer;
