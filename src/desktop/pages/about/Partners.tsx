import { observer } from 'mobx-react';
import React from 'react';

import {
  anCridhe,
  calMac,
  collBunkhouse,
  hiddenScotland,
  jmTrust,
  msc,
  visitArran,
} from '../../../appData/CampaignPartners';
import { PartnerComp } from './PartnerComp';

import './partners.scss';
import '../../desktop-app.scss';
import '../../../appStyles/desktop-app-styles.scss';

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
        <section>
          <h2>MENTIONS</h2>

          <p>
            #RoamResponsibly campaign mentioned in <strong>CalMac's</strong> blog:
          </p>
          <p>
            <a
              className={'link-underlined'}
              href={'https://www.calmac.co.uk/calmac.co.uk/blogs/roam-responsibly'}
              target={'_blank'}
            >
              #RoamResponsibly with CalMac Ferries
            </a>
          </p>
          <br></br>
          <p>
            #RoamResponsibly campaign included in <strong>Trespass'</strong> Corporate
            Responsibility page:
          </p>
          <p>
            <a
              className={'link-underlined'}
              href={'https://www.trespass.com/corporate-responsibility'}
              target={'_blank'}
            >
              Trespass Corporate Responsibility
            </a>
          </p>
        </section>
      </main>
    );
  }
}
