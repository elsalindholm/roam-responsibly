import { observer } from 'mobx-react';
import React from 'react';

import { AboutPage, AppState, Page } from '../../AppState';

import './header.scss';

interface HeaderProps {
  appState: AppState;
}

@observer
export class Header extends React.PureComponent<HeaderProps> {
  render() {
    const { appState } = this.props;

    return (
      <header className={'header-container ' + this.renderBannerImage()}>
        <div className={'header-filter'}></div>
        <div className={'navbar-container'}>
          <div className={'navbar-logo'}></div>
          <nav className={'navbar-button-container'}>
            <button onClick={() => appState.setCurrentPage(Page.HOME)}>HOME</button>
            <button onClick={() => appState.setCurrentPage(Page.ABOUT)}>ABOUT</button>
            <button onClick={() => appState.setCurrentPage(Page.CHARTER)}>CHARTER</button>
            <button onClick={() => appState.setCurrentPage(Page.SOAC)}>
              SCOTTISH OUTDOOR ACCESS CODE
            </button>
            <button onClick={() => appState.setCurrentPage(Page.BLOG)}>BLOG</button>
            <button onClick={() => appState.setCurrentPage(Page.SPREADWORD)}>
              SPREAD THE WORD
            </button>
          </nav>
        </div>
        {this.renderHeaderBanner()}
      </header>
    );
  }

  private renderHeaderBanner() {
    let smallBannerHeading: string = '';
    let largeBannerHeading: string = '';

    const { appState } = this.props;

    if (appState.curPage === Page.ABOUT) {
      switch (appState.curAboutPage) {
        case AboutPage.CAMPAIGN:
          smallBannerHeading = 'Campaign to';
          largeBannerHeading = '#ROAMRESPONSIBLY';
          break;
        case AboutPage.INSTAGRAMMERS:
          smallBannerHeading = '';
          largeBannerHeading = 'INSTAGRAMMERS';
          break;
        case AboutPage.PARTNERS:
          smallBannerHeading = '';
          largeBannerHeading = 'PARTNERS';
          break;
        case AboutPage.CONTACT:
          smallBannerHeading = '';
          largeBannerHeading = 'CONTACT';
          break;
      }
    }

    switch (appState.curPage) {
      case Page.HOME:
        smallBannerHeading = "Scotland's Instagrammers' Campaign to";
        largeBannerHeading = '#ROAMRESPONSIBLY';
        break;

      case Page.CHARTER:
        smallBannerHeading = '#RoamResponsibly';
        largeBannerHeading = 'CHARTER';
        break;
      case Page.SOAC:
        smallBannerHeading = '#RoamResponsibly with';
        largeBannerHeading = 'SCOTTISH OUTDOOR ACCESS CODE';
        break;
      case Page.BLOG:
        smallBannerHeading = '';
        largeBannerHeading = 'BLOG';
        break;
      case Page.SPREADWORD:
        smallBannerHeading = '';
        largeBannerHeading = 'SPREAD THE WORD';
        break;
    }

    return (
      <div className={'header-banner'}>
        <div className={'small-banner-heading'}>{smallBannerHeading}</div>
        <div className={'large-banner-heading'}>{largeBannerHeading}</div>
      </div>
    );
  }

  private renderBannerImage() {
    let bannerImage: string = '';

    switch (this.props.appState.curPage) {
      case Page.HOME:
        bannerImage = 'banner-home';
        break;
      case Page.ABOUT:
        bannerImage = 'banner-about';
        break;
      case Page.CHARTER:
        bannerImage = 'banner-charter';
        break;
      case Page.SOAC:
        bannerImage = 'banner-soac';
        break;
      case Page.BLOG:
        bannerImage = 'banner-blog';
        break;
      case Page.SPREADWORD:
        bannerImage = 'banner-spreadword';
        break;
    }
    return bannerImage;
  }
}
