import React from 'react';

import './spread-the-word.scss';
import '../../../appStyles/desktop-app-styles.scss';

export class SpreadWord extends React.PureComponent {
  render() {
    return (
      <main className={'spread-word-page'}>
        <section>
          <p>Help us spread the word!</p>
          <p>
            Follow us on Instagram{' '}
            <a
              className={'link-underlined'}
              href={'https://www.instagram.com/roamresponsibly/?hl=en'}
              target={'_blank'}
            >
              @RoamResponsibly
            </a>{' '}
            and tag your photos and stories of the Scottish outdoors with{' '}
            <strong>#roamresponsibly</strong>.
          </p>
          <p>
            Help us spread the word by talking about the Scottish Outdoor Access Code with your
            friends and family. Together, we can raise awareness of responsible ways to enjoy nature
            and preserve Scotland as beautiful as it is.
          </p>
        </section>
      </main>
    );
  }
}
