import React, { Component } from 'react';

export default class LocalStateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        { title: 'React Redux Tutorial for Beginners', id: 1 },
        { title: 'TypeScript tutorial for beginners', id: 2 },
      ],
    };
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2>Local State Articles :-</h2>
        <ul>
          {articles.map((e) => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
