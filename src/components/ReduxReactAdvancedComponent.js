import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle } from '../actions/ArticleAction';

const ReduxReactAdvancedComponent = () => {
  //To fetch data from redux state
  const articles = useSelector((state) => state.articles);
  //To set/update data of redux state
  const dispatch = useDispatch();
  const addNewArticle = () => {
    dispatch(
      addArticle({
        title: 'TypeScript tutorial for beginners',
        id: articles.length + 1,
      })
    );
  };
  return (
    <div>
      <h2>Redux State Advanced Articles :-</h2>
      <ul>
        {articles.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
      <button onClick={addNewArticle}>Add new Article</button>
    </div>
  );
};

export default ReduxReactAdvancedComponent;
