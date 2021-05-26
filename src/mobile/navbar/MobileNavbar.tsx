import { observer } from 'mobx-react';
import React from 'react';

import { AboutPage, AppState, Page } from '../../AppState';

import './mobile-navbar.scss';

interface MobileNavbarProps {
  appState: AppState;
}

@observer
export class MobileNavbar extends React.PureComponent<MobileNavbarProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'mnavbar'}>
        <div className={'mnavbar-close-button'}></div>
        <div className={'mnav'}>
          <button className={'mnav-button'} onClick={() => this.selectPage(Page.HOME)}>
            HOME
          </button>
        </div>
        <div className={'mnav'}>
          <button className={'mnav-button'} onClick={() => appState.toggleAboutMenu()}>
            ABOUT
          </button>
          <div className={'mnav-about-collapse'} onClick={() => appState.toggleAboutMenu()}>
            {appState.aboutMenuOpen ? '-' : '+'}
          </div>
        </div>
        {this.renderAboutMenu()}
        <div className={'mnav'}>
          <button className={'mnav-button'} onClick={() => this.selectPage(Page.CHARTER)}>
            CHARTER
          </button>
        </div>
        <div className={'mnav'}>
          <button className={'mnav-button'} onClick={() => this.selectPage(Page.SOAC)}>
            OUTDOOR ACCESS CODE
          </button>
        </div>
        <div className={'mnav'}>
          <button className={'mnav-button'} onClick={() => this.selectPage(Page.BLOG)}>
            BLOG
          </button>
        </div>
        <div className={'mnav'}>
          <button className={'mnav-button'} onClick={() => this.selectPage(Page.SPREADWORD)}>
            SPREAD THE WORD
          </button>
        </div>
      </div>
    );
  }

  private renderAboutMenu() {
    const { appState } = this.props;

    if (appState.aboutMenuOpen === false) {
      return;
    } else if (appState.aboutMenuOpen === true) {
      return (
        <div className={'mnav-about-menu'}>
          <div className={'mnav'}>
            <button
              className={'mnav-button'}
              onClick={() => this.selectAboutPage(AboutPage.CAMPAIGN)}
            >
              CAMPAIGN
            </button>
          </div>
          <div className={'mnav'}>
            <button
              className={'mnav-button'}
              onClick={() => this.selectAboutPage(AboutPage.INSTAGRAMMERS)}
            >
              INSTAGRAMMERS
            </button>
          </div>
          <div className={'mnav'}>
            <button
              className={'mnav-button'}
              onClick={() => this.selectAboutPage(AboutPage.PARTNERS)}
            >
              PARTNERS
            </button>
          </div>
          <div className={'mnav'}>
            <button
              className={'mnav-button'}
              onClick={() => this.selectAboutPage(AboutPage.CONTACT)}
            >
              CONTACT
            </button>
          </div>
        </div>
      );
    }
  }

  private selectPage(page: Page) {
    const { appState } = this.props;

    appState.setCurrentPage(page);
    appState.closeMobileMenu();
  }

  private selectAboutPage(aboutPage: AboutPage) {
    const { appState } = this.props;

    appState.setCurrentPage(Page.ABOUT);
    appState.setCurrentAboutPage(aboutPage);
    appState.closeMobileMenu();
  }
}
