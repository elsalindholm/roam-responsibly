import { observer } from 'mobx-react';
import React from 'react';

import './mobile-contact.scss';
import '../../../../appStyles/mobile-app-styles.scss';

@observer
export class MobileContact extends React.PureComponent {
  render() {
    return (
      <main className={'mcontact-page'}>
        <section>
          <p className={'mobile-p'}>
            Want to get in touch with us? Drop us an email or get in touch via social media.
          </p>
        </section>
        <section>
          <h2 className={'mobile-h2'}>EMAIL</h2>
          <p className={'mobile-p'}>contactroamresponsibly@gmail.com</p>
        </section>
        <section>
          <h2 className={'mobile-h2'}>SOCIAL MEDIA</h2>
          <p className={'mobile-p'}>You can find us on the following social media platforms:</p>
          <p className={'mobile-p'}>
            Instagram:{' '}
            <a
              className={'mobile-a'}
              href={'https://www.instagram.com/roamresponsibly/'}
              target={'_blank'}
            >
              @RoamResponsibly
            </a>
          </p>
          <p className={'mobile-p'}>
            Facebook:{' '}
            <a
              className={'mobile-a'}
              href={'https://www.facebook.com/roamresponsibly/'}
              target={'_blank'}
            >
              @RoamResponsibly
            </a>
          </p>
          <p className={'mobile-p'}>
            Twitter:{' '}
            <a
              className={'mobile-a'}
              href={'https://twitter.com/rresponsiblysct'}
              target={'_blank'}
            >
              @RResponsiblySct
            </a>
          </p>
        </section>
        <section>
          <h2 className={'mobile-h2'}>LOGO</h2>

          <p className={'mobile-p'}>
            Our brilliant logo has been designed by Michael MacDonald.
            <br></br>
            <a
              className={'mobile-a'}
              href={'https://www.instagram.com/ruanaich/'}
              target={'_blank'}
            >
              @ruanaich
            </a>
            <br></br>
            <a className={'mobile-a'} href={'http://ruanaich.com/'} target={'_blank'}>
              www.ruanaich.com
            </a>
          </p>
          <div className={'rr-logo-mcontact-page'}></div>
        </section>
        <section>
          <h2 className={'mobile-h2'}>WEBSITE AND IMAGES</h2>
          <p className={'mobile-p'}>
            Website and images used on this website (unless otherwise stated) are by Elsa Lindholm.
            <br></br>
            <a
              className={'mobile-a'}
              href={'https://www.instagram.com/elsaannukka/'}
              target={'_blank'}
            >
              @elsaannukka
            </a>
            <br></br>
            <br></br>
            If you have any feedback on the website, please email us at
            contactroamresponsibly@gmail.com.
          </p>
        </section>
      </main>
    );
  }
}
