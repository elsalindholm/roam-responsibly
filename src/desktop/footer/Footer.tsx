import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react';
import React from 'react';

import {
  faInstagram,
  faFacebook,
  faTwitter,
} from '../../../node_modules/@fortawesome/free-brands-svg-icons';

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
          >
            <FontAwesomeIcon icon={faFacebook} color={'white'} />
          </a>
          <a
            className={'ig-logo'}
            href={'https://www.instagram.com/roamresponsibly/?hl=en'}
            target={'_blank'}
          >
            <FontAwesomeIcon icon={faInstagram} color={'white'} />
          </a>
          <a className={'tw-logo'} href={'https://twitter.com/rresponsiblysct'} target={'_blank'}>
            <FontAwesomeIcon icon={faTwitter} color={'white'} />
          </a>
        </div>
      </div>
    );
  }
}
