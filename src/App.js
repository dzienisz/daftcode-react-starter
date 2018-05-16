import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

import launch from './assets/sample_json_data/launch.json';
import launchSite from './assets/sample_json_data/launch_site.json';
import rocket from './assets/sample_json_data/rocket.json';
import './styles/theme.sass';

import LaunchDetails from './view/LaunchDetails/LaunchDetails';

class App extends Component {
  render() {
    return (
      <main className="page-container">
        <LaunchDetails
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
        />
      </main>
    );
  }
}

export default hot(module)(App);
