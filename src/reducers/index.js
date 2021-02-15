import { ADD_ARTICLE } from '../constants/ArticleConstants';

// const initialState = {
//   articles: [],
// };

//Initial State setup for testing purpose only.
const initialState = {
  articles: [{ title: 'React Redux Tutorial for Beginners', id: 1 }],
};

// Initial setup for root-reducer.
// function rootReducer(state = initialState, action) {
//   return state;
// }

// It seems right. But it's wrong! Our reducer breaks the main Redux principle: immutability.
// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     state.articles.push(action.payload);
//   }
//   return state;
// }

// So never modify the state in the above manner.Instead use approach like below.
// Actually functions like Array.prototype.push is an impure function: it modifies the original array.
// So better use 'concat', 'slice', or 'spread operator' for arrays and use 'Object.assign' or 'object spread' of objects
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer;
