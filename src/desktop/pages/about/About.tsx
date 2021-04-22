import { observer } from 'mobx-react';
import React from 'react';
import { AboutPage, AppState } from '../../../AppState';

import { Campaign } from './Campaign';
import { Instagrammers } from './Instagrammers';
import { Partners } from './Partners';

import './about.scss';
import { Contact } from './Contact';

export interface AboutPageProps {
  appState: AppState;
}

@observer
export class About extends React.PureComponent<AboutPageProps> {
  render() {
    const { appState } = this.props;

    let aboutPage: JSX.Element;
    switch (appState.curAboutPage) {
      case AboutPage.CAMPAIGN:
        aboutPage = <Campaign />;
        break;
      case AboutPage.INSTAGRAMMERS:
        aboutPage = <Instagrammers />;
        break;
      case AboutPage.PARTNERS:
        aboutPage = <Partners />;
        break;
      case AboutPage.CONTACT:
        aboutPage = <Contact />;
        break;
      default:
        aboutPage = <Campaign />;
        break;
    }
    return (
      <div className={'about-page'}>
        <nav className={'about-page-nav'}>
          <p className={'about-nav-title'}>ABOUT</p>
          <button onClick={() => appState.setCurrentAboutPage(AboutPage.CAMPAIGN)}>CAMPAIGN</button>
          <button onClick={() => appState.setCurrentAboutPage(AboutPage.INSTAGRAMMERS)}>
            INSTAGRAMMERS
          </button>
          <button onClick={() => appState.setCurrentAboutPage(AboutPage.PARTNERS)}>PARTNERS</button>
          <button onClick={() => appState.setCurrentAboutPage(AboutPage.CONTACT)}>CONTACT</button>
        </nav>
        <div className={'about-page-cont'}>{aboutPage}</div>
      </div>
    );
  }
}
