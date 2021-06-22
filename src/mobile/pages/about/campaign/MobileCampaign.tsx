import { observer } from 'mobx-react';
import React from 'react';

import '../../../../appStyles/mobile-app-styles.scss';

@observer
export class MobileCampaign extends React.PureComponent {
  render() {
    return (
      <main className={'campaign-page'}>
        <section>
          <p className={'mobile-p'}>
            Scotland's Instagrammer community voiced out its concern over the Scottish outdoors in
            Spring 2017. The community was concerned about the degradation of the popular Scottish
            nature sites due to littering and over-use by visitors.
          </p>
          <p className={'mobile-p'}>
            Together, Scotland's Instagrammers signed a charter, which addressed these issues, and
            agreed to promote the Scottish Outdoor Access Code as well as enjoying Scotland's beauty
            responsibly.
          </p>
        </section>
        <section>
          <h2 className={'mobile-h2'}>OUR MISSION</h2>
          <p className={'mobile-p'}>
            We created a social media campaign #RoamResponsibly, through which we aim to spread
            knowledge of responsible ways of spending time in nature. We hope to inspire people to
            take action to protect and preserve the Scottish landscapes and wildlife. We aim to also
            raise awareness about the Scottish Outdoor Access Code as well as relevant organisations
            in Scotland.
          </p>
          <p className={'mobile-p'}>
            Access to nature belongs to us all, and so does the responsibility of preserving it for
            wildlife and future generations to enjoy.
          </p>
        </section>
      </main>
    );
  }
}
