const initialState = [];

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ARTICLES':
            return action.payload;
        default:
            return state;
    }
}

export default articleReducer;