import { observer } from 'mobx-react';
import React from 'react';

import { AboutPage, AppState } from '../../../AppState';
import { MobileCampaign } from './campaign/MobileCampaign';
import { MobileInstagrammers } from './instagrammers/MobileInstagrammers';
import { MobilePartners } from './partners/MobilePartners';

export interface MobileAboutPageProps {
  appState: AppState;
}

@observer
export class MobileAbout extends React.PureComponent<MobileAboutPageProps> {
  render() {
    const { appState } = this.props;

    let aboutPage: JSX.Element;
    switch (appState.curAboutPage) {
      case AboutPage.CAMPAIGN:
        aboutPage = <MobileCampaign />;
        break;
      case AboutPage.INSTAGRAMMERS:
        aboutPage = <MobileInstagrammers />;
        break;
      case AboutPage.PARTNERS:
        aboutPage = <MobilePartners />;
    }

    return <div className={'mabout-page'}>{aboutPage}</div>;
  }
}
