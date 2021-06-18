import { observer } from 'mobx-react';
import React from 'react';

import {
  anCridhe,
  calMac,
  collBunkhouse,
  hiddenScotland,
  jmTrust,
  msc,
  nevisport,
  trespass,
  visitArran,
} from '../../../../appData/CampaignPartners';
import { MobilePartnerComp } from './MobilePartnerComp';

import './mobile-partners.scss';
import '../../../../appStyles/mobile-app-styles.scss';

@observer
export class MobilePartners extends React.PureComponent {
  render() {
    return (
      <main className={'mpartners-page'}>
        <section>
          <p className={'mobile-p'}>
            With the #RoamResponsibly campaign we aim to emphasize the importance of preserving the
            environment and to support our partner organisations in their missions to do so.
          </p>
        </section>
        <section>
          <h2 className={'mobile-h2'}>OUR PARTNERS</h2>
          <div className={'mpartner-logos'}>
            <MobilePartnerComp campaignPartner={anCridhe} />
            <MobilePartnerComp campaignPartner={calMac} />
            <MobilePartnerComp campaignPartner={collBunkhouse} />
            <MobilePartnerComp campaignPartner={hiddenScotland} />
            <MobilePartnerComp campaignPartner={jmTrust} />
            <MobilePartnerComp campaignPartner={msc} />
            <MobilePartnerComp campaignPartner={nevisport} />
            <MobilePartnerComp campaignPartner={trespass} />
            <MobilePartnerComp campaignPartner={visitArran} />
          </div>
        </section>
        <section>
          <h2 className={'mobile-h2'}>MENTIONS</h2>

          <p className={'mobile-p'}>
            #RoamResponsibly campaign mentioned in <strong>CalMac's</strong> blog:
          </p>
          <p className={'mobile-p'}>
            <a
              className={'mobile-a'}
              href={'https://www.calmac.co.uk/calmac.co.uk/blogs/roam-responsibly'}
            >
              #RoamResponsibly with CalMac Ferries
            </a>
          </p>

          <p className={'mobile-p'}>
            #RoamResponsibly campaign included in <strong>Trespass'</strong> Corporate
            Responsibility page:
          </p>
          <p className={'mobile-p'}>
            <a className={'mobile-a'} href={'https://www.trespass.com/corporate-responsibility'}>
              Trespass Corporate Responsibility
            </a>
          </p>
        </section>
      </main>
    );
  }
}
