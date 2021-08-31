export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    
    // "BQDtbTOVI6-c6ohnJh5a1EM1ezzT7hEXrmGeRC-BU8oSziTAftq3f6pKjoWoW5xtuLIAMqQfyYU46EGgET3lXXLs5OJetG4ca4xGZZMRAKx-zUkfbv1fP9cn7w9KxiW6KOjz8IcDycZ2wSjlAjtPwGMyjHjBlOP7cw",

}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };



             default: 
                return state;
    }
};

export default reducer;