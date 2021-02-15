import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/ArticleAction';

const ReduxStateComponent = (props) => {
  const { articles } = props;

  const addNewArticle = () => {
    props.addArticle({
      title: 'TypeScript tutorial for beginners',
      id: articles.length + 1,
    });
  };
  return (
    <div>
      <h2>Redux State Articles :-</h2>
      <ul>
        {articles.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
      <button onClick={addNewArticle}>Add new Article</button>
    </div>
  );
};

//It is used to bind redux state with local component props
const mapStateToProps = (state) => {
  return { articles: state.articles };
};

//It is used to bind redux dispatch with local component props
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxStateComponent);
