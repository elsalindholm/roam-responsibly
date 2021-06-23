import React from 'react';


import { AppState, Page } from '../../../AppState';

import { HelmetComp } from '../../../HelmetComp';
import { HomeMeta } from '../../../appData/PageMeta';

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
        <HelmetComp pageMetaData={HomeMeta} />
        <section>
          <h2>We want to help conserve Scottish nature and landscapes</h2>
          <p>Scotland is a country of beautiful forests, lochs, munros, isles and beaches.</p>
          <p>
            With our social media campaign #RoamResponsibly we aim to raise awareness of the
            Scottish Outdoor Access Code and preserve these stunning and unique landscapes in all
            their beauty for future generations to enjoy.
          </p>
        </section>
        <div className={'home-page-links'}>
          <section>
            <h3>What is the Scottish Outdoor Access Code?</h3>
            <a className={'link-underlined'} onClick={() => appState.setCurrentPage(Page.SOAC)}>
              Read more here
            </a>
          </section>
          <section>
            <h3>Want to know more about our social media campaign?</h3>
            <a className={'link-underlined'} onClick={() => appState.setCurrentPage(Page.ABOUT)}>
              Read more here
            </a>
          </section>
        </div>
      </main>
    );
  }
}
