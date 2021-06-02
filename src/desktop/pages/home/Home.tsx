import React from 'react';

import { AppState, Page } from '../../../AppState';

import './home.scss';
import '../../../appStyles/desktop-app-styles.scss';

interface DesktopHomePageProps {
  appState: AppState;
}

export class Home extends React.PureComponent<DesktopHomePageProps> {
  render() {
    const { appState } = this.props;

    return (
      <main className={'home-page'}>
        <section>
          <h2>WE WANT TO HELP CONSERVE SCOTTISH NATURE AND LANDSCAPES</h2>
          <p>Scotland is a country of beautiful forests, lochs, munros, isles and beaches.</p>
          <p>
            With our social media campaign #RoamResponsibly we aim to raise awareness of the
            Scottish Outdoor Access Code and preserve these stunning and unique landscapes as
            beautiful as they are for future generations to enjoy.
          </p>
        </section>
        <div className={'home-page-links'}>
          <section>
            <h2>What is the Scottish Outdoor Access Code?</h2>
            <a className={'link-underlined'} onClick={() => appState.setCurrentPage(Page.SOAC)}>
              Read more here
            </a>
          </section>
          <section>
            <h2>Want to know more about our social media campaign?</h2>
            <a className={'link-underlined'} onClick={() => appState.setCurrentPage(Page.ABOUT)}>
              Read more here
            </a>
          </section>
        </div>
      </main>
    );
  }
}
