import { observer } from 'mobx-react';
import React from 'react';

import './footer.scss';

@observer
export class Footer extends React.PureComponent {
  render() {
    return (
      <div className={'footer'}>
        <div className={'some-link-container'}>
          <a
            className={'fb-logo'}
            href={'https://www.facebook.com/roamresponsibly/'}
            target={'_blank'}
          ></a>
          <a
            className={'ig-logo'}
            href={'https://www.instagram.com/roamresponsibly/?hl=en'}
            target={'_blank'}
          ></a>
          <a
            className={'tw-logo'}
            href={'https://twitter.com/rresponsiblysct'}
            target={'_blank'}
          ></a>
        </div>
      </div>
    );
  }
}
