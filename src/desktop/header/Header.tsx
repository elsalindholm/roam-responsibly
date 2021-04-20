import { observer } from 'mobx-react';
import React from 'react';

import { AppState, Page } from '../../AppState';

import './header.scss';

interface HeaderProps {
  appState: AppState;
}

@observer
export class Header extends React.PureComponent<HeaderProps> {
  render() {
    const { appState } = this.props;

    return (
      <header className={'header-container'}>
        <div className={'header-filter'}></div>
        <div className={'navbar-container'}>
          <div className={'navbar-logo'}>LOGO</div>
          <nav className={'navbar-button-container'}>
            <button onClick={() => appState.setCurrentPage(Page.HOME)}>HOME</button>
            <button>ABOUT</button>
            <button>CHARTER</button>
            <button>SCOTTISH OUTDOOR ACCESS CODE</button>
            <button>BLOG</button>
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

    switch (this.props.appState.curPage) {
      case Page.HOME:
        smallBannerHeading = "Scotland's Instagrammers' Campaign to";
        largeBannerHeading = '#ROAMRESPONSIBLY';
        break;
      case Page.ABOUT:
        smallBannerHeading = 'Campaign to';
        largeBannerHeading = '#ROAMRESPONSIBLY';
        break;
      case Page.CHARTER:
        smallBannerHeading = '#RoamResponsibly';
        largeBannerHeading = 'CHARTER';
        break;
      case Page.SOAC:
        smallBannerHeading = 'RoamResponsibly with';
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
}
