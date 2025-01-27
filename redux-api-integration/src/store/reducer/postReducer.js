
const initialState = {  
        posts : [],
        loading : false,
        error : null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POST_REQUEST":
            return {
                ...state,
                loading : true,
            } ;

        case "FETCH_POST_SUCCESS":
            // destructre the state, loading is done set the posts to payload.post because its sent to the success as a parameter
            return {
                ...state, 
                loading : false,
                posts : action.payload ,
            } ;

        case "FETCH_POST_FAILURE":
            return {
                ...state, 
                loading : false,
                error : action.payload ,
            } ;
    
        default:
            return state;
    }
} ;