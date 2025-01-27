export const fetchPostRequest = () => ({

    type : "FETCH_POST_REQUEST",
}) ;

export const fetchPostSuccess = (posts) => ({

    type : "FETCH_POST_SUCCESS",
    payload : posts,
}) ;

export const fetchPostFailure= (error) =>  ({

    type : "FETCH_POST_FAILURE",
    payload : error,
}) ;

export const fetchPosts = () => async (dispatch) => {
    // 1st dispatch the fetch post 
    // 2nd put it in try catch if it is sucess dispatch success
    // 3rd if it is failure dispatch failure

    dispatch(fetchPostRequest()) ;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts") ;
        const data = await response.json() ;
        dispatch(fetchPostSuccess(data)) ;
    } catch (error) {
        dispatch(fetchPostFailure(error.message)) ;
    }
}