import { observer } from 'mobx-react';
import React from 'react';

import './partners.scss';

import {
  anCridhe,
  calMac,
  collBunkhouse,
  hiddenScotland,
  jmTrust,
  msc,
  visitArran,
} from './CampaignPartners';
import { PartnerComp } from './PartnerComp';

@observer
export class Partners extends React.PureComponent {
  render() {
    return (
      <main className={'partners-page'}>
        <section>
          <p>
            With the #RoamResponsibly campaign we aim to emphasize the importance of preserving the
            environment and to support our partner organisations in their missions to do so.
          </p>
        </section>
        <section>
          <h2>PARTNERS</h2>
          <div className={'partner-logos'}>
            <PartnerComp campaignPartner={anCridhe} />
            <PartnerComp campaignPartner={calMac} />
            <PartnerComp campaignPartner={collBunkhouse} />
            <PartnerComp campaignPartner={hiddenScotland} />
            <PartnerComp campaignPartner={jmTrust} />
            <PartnerComp campaignPartner={msc} />
            <PartnerComp campaignPartner={visitArran} />
          </div>
        </section>
      </main>
    );
  }
}
