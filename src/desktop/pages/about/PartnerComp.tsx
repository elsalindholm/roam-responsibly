import { observer } from 'mobx-react';
import React from 'react';

import { CampaignPartner } from '../../../appData/CampaignPartners';

import './partner-comp.scss';
import '../../../appStyles/desktop-app-styles.scss';

interface PartnerCompProps {
  campaignPartner: CampaignPartner;
}

@observer
export class PartnerComp extends React.PureComponent<PartnerCompProps> {
  render() {
    const { campaignPartner } = this.props;

    return (
      <div className={'partner-comp'}>
        <a
          className={'partner-logo-container ' + campaignPartner.styleClass}
          href={campaignPartner.link}
          target={'_blank'}
        ></a>
      </div>
    );
  }
}
