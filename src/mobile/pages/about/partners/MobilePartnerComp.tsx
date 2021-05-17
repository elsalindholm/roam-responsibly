import { observer } from 'mobx-react';
import React from 'react';

import { CampaignPartner } from '../..//../../appData/CampaignPartners';

import './mobile-partner-comp.scss';
import '../../../../appStyles/mobile-app-styles.scss';

interface MobilePartnerCompProps {
  campaignPartner: CampaignPartner;
}

@observer
export class MobilePartnerComp extends React.PureComponent<MobilePartnerCompProps> {
  render() {
    const { campaignPartner } = this.props;

    return (
      <div className={'mpartner-comp'}>
        <a
          className={'mpartner-logo-container ' + campaignPartner.styleClass}
          href={campaignPartner.link}
          target={'_blank'}
        ></a>
      </div>
    );
  }
}
