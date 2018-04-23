import { hot } from 'react-hot-loader';
import * as React from 'react';

import './styles/theme.sass';
import Counter from './view/Counter';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Counter from={ 68 } to={ 0 } />
      </main>
    );
  }
}

export default hot(module)(App);
