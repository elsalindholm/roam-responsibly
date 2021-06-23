import { observer } from 'mobx-react';
import React from 'react';

import { AboutPage, AppState } from '../../../AppState';
import { Campaign } from './Campaign';
import { Instagrammers } from './Instagrammers';
import { Partners } from './Partners';
import { Contact } from './Contact';

import './about.scss';
import '../../../appStyles/desktop-app-styles.scss';
import { Helmet } from 'react-helmet';

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
          <button
            className={this.getClassName(AboutPage.CAMPAIGN)}
            onClick={() => appState.setCurrentAboutPage(AboutPage.CAMPAIGN)}
          >
            CAMPAIGN
          </button>

          <button
            className={this.getClassName(AboutPage.INSTAGRAMMERS)}
            onClick={() => appState.setCurrentAboutPage(AboutPage.INSTAGRAMMERS)}
          >
            INSTAGRAMMERS
          </button>
          <button
            className={this.getClassName(AboutPage.PARTNERS)}
            onClick={() => appState.setCurrentAboutPage(AboutPage.PARTNERS)}
          >
            PARTNERS
          </button>
          <button
            className={this.getClassName(AboutPage.CONTACT)}
            onClick={() => appState.setCurrentAboutPage(AboutPage.CONTACT)}
          >
            CONTACT
          </button>
        </nav>
        <div className={'about-page-cont'}>{aboutPage}</div>
      </div>
    );
  }
  private getClassName(heading: AboutPage) {
    let aboutHeaderClass = 'about-header-button';
    const current = this.props.appState.curAboutPage;

    if (heading === current) {
      aboutHeaderClass += ' selected';
    }
    return aboutHeaderClass;
  }
}
