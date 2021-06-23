import { observer } from 'mobx-react';
import React from 'react';

import { HelmetComp } from '../../../HelmetComp';
import { AboutCampaignMeta } from '../../../appData/PageMeta';

import './campaign.scss';
import '../../../appStyles/desktop-app-styles.scss';


@observer
export class Campaign extends React.PureComponent {
  render() {
    return (
      <main className={'campaign-page'}>
        <HelmetComp pageMetaData={AboutCampaignMeta}/>
        <section>
          <p>
            Scotland's Instagrammer community voiced out its concern over the Scottish outdoors in
            Spring 2017. We were concerned about the degradation of popular Scottish nature sites
            due to littering and over-use by visitors. Together, Scotland's Instagrammers signed a
            charter which addressed these issues and agreed to promote the Scottish Outdoor Access
            Code as well as enjoying Scotland's beauty responsibly.
          </p>
        </section>
        <section>
          <h2>OUR MISSION</h2>
          <p>
            We created the social media campaign #RoamResponsibly, through which we aim to spread
            knowledge of responsible ways of spending time in nature. We hope to inspire people to
            take action to protect and preserve the Scottish landscapes and wildlife. We aim to also
            raise awareness about the Scottish Outdoor Access Code as well as relevant organisations
            in Scotland.
          </p>
          <p>
            Access to nature belongs to us all, and so does the responsibility of preserving it for
            wildlife and future generations to enjoy.
          </p>
        </section>
        <section></section>
      </main>
    );
  }
}
