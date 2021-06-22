import React from 'react';

import './mobile-spread-the-word.scss';
import '../../../appStyles/mobile-app-styles.scss';

export class MobileSpreadWord extends React.PureComponent {
  render() {
    return (
      <main className={'mspread-word-page'}>
        <section>
          <h2 className={'mobile-h2'}>Help us spread the word</h2>
          <p className={'mobile-p'}>
            Follow us on Instagram{' '}
            <a
              className={'mobile-a'}
              href={'https://www.instagram.com/roamresponsibly/?hl=en'}
              target={'_blank'}
            >
              @RoamResponsibly
            </a>{' '}
            and tag your photos and stories of the Scottish outdoors with{' '}
            <strong>#roamresponsibly</strong>.
          </p>
          <p className={'mobile-p'}>
            Help us spread the word by talking about the Scottish Outdoor Access Code with your
            friends and family. Together, we can raise awareness of responsible ways to enjoy nature
            and preserve Scotland as beautiful as it is.
          </p>
        </section>
      </main>
    );
  }
}
