import { observer } from 'mobx-react';
import React from 'react';
import { AboutPage, AppState, BlogPage, Page } from '../../AppState';

import './mobile-header.scss';
import '../../appStyles/header-banner-images.scss';

interface MHeaderProps {
  appState: AppState;
}

@observer
export class MobileHeader extends React.PureComponent<MHeaderProps> {
  render() {
    return (
      <header className={'mheader-container ' + this.renderBannerImage()}>
        <div className={'mheader-filter'}></div>
        <div className={'mnavbar-container'}>
          <div className={'mnavbar-logo'}></div>
          <div className={'mburger-menu-container'}>
            <div className={'mburger-menu-line'}></div>
            <div className={'mburger-menu-line'}></div>
            <div className={'mburger-menu-line'}></div>
          </div>
        </div>
        {this.renderHeaderBanner()}
      </header>
    );
  }

  private renderHeaderBanner() {
    const { appState } = this.props;

    let smallBannerHeading: string = '';
    let largeBannerHeading: string = '';

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

    if (appState.curPage === Page.BLOG) {
      switch (appState.curBlogPage) {
        case BlogPage.BLOGLIST:
          smallBannerHeading = '';
          largeBannerHeading = 'BLOG';
          break;
        default:
          smallBannerHeading = '';
          largeBannerHeading = '';
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
      case Page.SPREADWORD:
        smallBannerHeading = '';
        largeBannerHeading = 'SPREAD THE WORD';
        break;
    }

    return (
      <div className={'mheader-banner'}>
        <div className={'msmall-banner-heading'}>{smallBannerHeading}</div>
        <div className={'mlarge-banner-heading'}>{largeBannerHeading}</div>
      </div>
    );
  }

  private renderBannerImage() {
    const { appState } = this.props;

    let bannerImage: string = '';

    switch (appState.curPage) {
      case Page.HOME:
        bannerImage = 'banner-home';
        break;
      case Page.SOAC:
        bannerImage = 'banner-soac';
        break;
    }
    return bannerImage;
  }
}
