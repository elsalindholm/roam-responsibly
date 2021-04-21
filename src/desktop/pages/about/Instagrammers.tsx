import { observer } from 'mobx-react';
import React from 'react';

import './instagrammers.scss';

@observer
export class Instagrammers extends React.PureComponent {
  render() {
    return (
      <main className={'ig-page'}>
        <section>
          <h2>A GREAT COMMUNITY OF INSTAGRAMMERS</h2>
          <p>
            Scotland's Instagrammer community is an inspiring group of people who not only take
            wonderful photographs and fill Instagram with lovely content, but also do not hesitate
            to stand up and speak up about issues that they see around them.
          </p>
        </section>
        <section>
          <h2>INSTAGRAMMERS</h2>
          <p>
            Below is a list of Scotland's Instagrammers who have signed the charter. Follow the
            links to see their work.
          </p>
          <ul className={'ig-list'}>
            <li>@elsaannukka - Elsa Lindholm</li>
            <li>@ruanaich - Michael MacDonald</li>
            <li>@katstewart01 - Katrina Stewart</li>
            <li>@loosemoose - Lucy Hamilton</li>
            <li>@louiseloupas - Virginie Chabrol</li>
          </ul>
        </section>
      </main>
    );
  }
}
