import { observer } from 'mobx-react';
import React from 'react';

import './about.scss';

import { Campaign } from './Campaign';
import { Instagrammers } from './Instagrammers';
import { Partners } from './Partners';

@observer
export class About extends React.PureComponent {
  render() {
    return (
      <div className={'about-page'}>
        <nav className={'about-page-nav'}>
          <p className={'about-nav-title'}>ABOUT</p>
          <button>CAMPAIGN</button>
          <button>INSTAGRAMMERS</button>
          <button>PARTNERS</button>
          <button>CONTACT</button>
        </nav>
        <div className={'about-page-cont'}>
          <Partners />
        </div>
      </div>
    );
  }
}
