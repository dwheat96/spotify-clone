export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQBXjgA8KtzxtksPGWdt3kXtryGjoxrL5Guoflk9j8l7HE3imjVoq_oznz112Zon8mIvfyCeLBX2elhRs2GqgDyEp3kma7Rbfu0U-9Z8DMn4tze89fitMcLUjPf3xpNwGx6qC20ON3f4XfP0TZ5o-CouTaXD9LNhFQ'
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
            default: 
                return state;
    }
};

export default reducer;