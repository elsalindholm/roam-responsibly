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
} from '../../../appData/CampaignPartners';
import { PartnerComp } from './PartnerComp';
import { HelmetComp } from '../../../HelmetComp';
import { AboutPartnersMeta } from '../../../appData/PageMeta';

import './partners.scss';
import '../../desktop-app.scss';
import '../../../appStyles/desktop-app-styles.scss';

@observer
export class Partners extends React.PureComponent {
  render() {
    return (
      <main className={'partners-page'}>
        <HelmetComp pageMetaData={AboutPartnersMeta} />
        <section>
          <p>
            With the #RoamResponsibly campaign we aim to emphasize the importance of preserving the
            environment and to support our partner organisations in their missions to do so.
          </p>
        </section>
        <section>
          <h2>OUR PARTNERS</h2>
          <div className={'partner-logos'}>
            <PartnerComp campaignPartner={anCridhe} />
            <PartnerComp campaignPartner={calMac} />
            <PartnerComp campaignPartner={collBunkhouse} />
            <PartnerComp campaignPartner={hiddenScotland} />
            <PartnerComp campaignPartner={jmTrust} />
            <PartnerComp campaignPartner={msc} />
            <PartnerComp campaignPartner={nevisport} />
            <PartnerComp campaignPartner={trespass} />
            <PartnerComp campaignPartner={visitArran} />
          </div>
        </section>
        <section>
          <h2>MENTIONS</h2>

          <p>
            #RoamResponsibly campaign mentioned in <strong>CalMac's</strong> blog:
            <br></br>
            <a
              className={'link-underlined'}
              href={'https://www.calmac.co.uk/calmac.co.uk/blogs/roam-responsibly'}
              target={'_blank'}
            >
              #RoamResponsibly with CalMac Ferries
            </a>
          </p>

          <p>
            #RoamResponsibly campaign included in <strong>Trespass'</strong> Corporate
            Responsibility page:
            <br></br>
            <a
              className={'link-underlined'}
              href={'https://www.trespass.com/corporate-responsibility'}
              target={'_blank'}
            >
              Trespass Corporate Responsibility
            </a>
          </p>
        </section>
        <section>
          <h2>COLLABORATIONS</h2>
          <h2>Nevisport X RoamResponsibly</h2>
          <p>
            In July 2018, we had the pleasure of having information about our campaign alongside{' '}
            <a
              className={'link-underlined'}
              href={'https://www.instagram.com/ruanaich/'}
              target={'_blank'}
            >
              @ruanaich's
            </a>{' '}
            beautiful photos displayed in the{' '}
            <a className={'link-underlined'} href={'https://www.nevisport.com/'} target={'_blank'}>
              Nevisport
            </a>{' '}
            Sauchiehall Street shop window in Glasgow. Photos by Michael MacDonald.
          </p>
          <div className={'partners-img-container'}>
            <div className={'partners-img , nevisport-one'}></div>
            <div className={'partners-img , nevisport-two'}></div>
          </div>
        </section>
      </main>
    );
  }
}
