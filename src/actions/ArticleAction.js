import { ADD_ARTICLE } from '../constants/ArticleConstants';

//Synchronous action.Hence it will work fine, without redux-thunk(or any similar middleware) also.
// export function addArticle(payload) {
//   return { type: ADD_ARTICLE, payload };
// }

//But if we make the action as asynchronous action as follows then it won't work and will throw following error :-
//Error: Actions must be plain objects. Use custom middleware for async actions.
// export function addArticle(payload) {
//   setTimeout(() => {
//     return {
//       type: ADD_ARTICLE,
//       payload,
//     };
//   }, 2000);
// }

//We can solve it using the middleware redux-thunk(see 'store.js' page to check how it is used) and the concept of 'Currying' as follows.
//Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.i.e it makes f(a,b) callable as f(a)(b)
//We can define f(a, b){} as f(a){return f(b){}}
export function addArticle(payload) {
  return function (dispatch) {
    setTimeout(() => {
      return dispatch({
        type: ADD_ARTICLE,
        payload,
      });
    }, 2000);
  };
}

//In real projects most of the time we have to update our backend server also on state change to keep application's global state and database in sync.
//So in real projects we have to use 'actions' in the following manner.
// export function addArticle(payload) {
//   return fetch('//your-backend-api.address')
//     .then((response) => response.json())
//     .then((json) => {
//       return { type: 'ADD_ARTICLE', payload: json };
//     });
// }
