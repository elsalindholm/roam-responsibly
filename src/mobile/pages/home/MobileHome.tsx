import React from 'react';

import { AppState, Page } from '../../../AppState';

import './mobile-home.scss';
import '../../../appStyles/mobile-app-styles.scss';

interface MobileHomeProps {
  appState: AppState;
}

export class MobileHome extends React.PureComponent<MobileHomeProps> {
  render() {
    const { appState } = this.props;

    return (
      <main className={'mhome-page'}>
        <section>
          <h2 className={'mobile-h2'}>We want to help conserve Scottish nature and landscapes</h2>
          <p className={'mobile-p'}>
            Scotland is a country of beautiful forests, lochs, munros, isles and beaches.
          </p>
          <p className={'mobile-p'}>
            With our social media campaign #RoamResponsibly we aim to raise awareness of the
            Scottish Outdoor Access Code and preserve these stunning and unique landscapes as
            beautiful as they are for future generations to enjoy.
          </p>
        </section>
        <div className={'mhome-page-links'}>
          <section>
            <h2 className={'mobile-h2'}>What is the Scottish Outdoor Access Code?</h2>
            <a className={'mobile-home-a'} onClick={() => appState.setCurrentPage(Page.SOAC)}>
              Read more here
            </a>
          </section>
          <section>
            <h2 className={'mobile-h2'}>Want to know more about our social media campaign?</h2>

            <a className={'mobile-home-a'} onClick={() => appState.setCurrentPage(Page.ABOUT)}>
              Read more here
            </a>
          </section>
        </div>
      </main>
    );
  }
}
