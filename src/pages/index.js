import React from 'react';

import { createGame } from 'modules/game-core';

import Layout from '../components/layout';

class IndexPage extends React.Component {
  componentDidMount() {
    this.game = createGame();
  }

  render() {
    return (
      <Layout>
        <div id="game-div" />
      </Layout>
    );
  }
}

export default IndexPage
