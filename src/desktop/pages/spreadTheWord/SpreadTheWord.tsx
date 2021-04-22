import React from 'react';

import './spread-the-word.scss';

export class SpreadWord extends React.PureComponent {
  render() {
    return (
      <main className={'spread-word-page'}>
        <section>
          <h2>Help us spread the word</h2>
          <p>
            Follow us on Instagram{' '}
            <a href={'https://www.instagram.com/roamresponsibly/?hl=en'} target={'_blank'}>
              @RoamResponsibly
            </a>{' '}
            and tag your photos and stories of the Scottish Outdoors with{' '}
            <strong>#roamresponsibly</strong>.
          </p>
          <p>
            Help us spread the word by telling your friends and family about the Scottish Outdoor
            Access Code and preserve Scotland as beautiful as it is.
          </p>
        </section>
      </main>
    );
  }
}
