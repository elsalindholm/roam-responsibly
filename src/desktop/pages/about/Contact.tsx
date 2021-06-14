import { observer } from 'mobx-react';
import React from 'react';

import './contact.scss';
import '../../../appStyles/desktop-app-styles.scss';

@observer
export class Contact extends React.PureComponent {
  render() {
    return (
      <main className={'contact-page'}>
        <section>
          <p>If you would like to contact us please do not hesitate to send us an email.</p>
        </section>
        <section>
          <h2>EMAIL</h2>
          <p>contactroamresponsibly@gmail.com</p>
        </section>
        <section>
          <h2>SOCIAL MEDIA</h2>
          <p>You can find us on the following social media platforms:</p>
          <p>
            Instagram:{' '}
            <a
              className={'link-underlined'}
              href={'https://www.instagram.com/roamresponsibly/'}
              target={'_blank'}
            >
              @RoamResponsibly
            </a>
          </p>
          <p>
            Facebook:{' '}
            <a
              className={'link-underlined'}
              href={'https://www.facebook.com/roamresponsibly/'}
              target={'_blank'}
            >
              @RoamResponsibly
            </a>
          </p>
          <p>
            Twitter:{' '}
            <a
              className={'link-underlined'}
              href={'https://twitter.com/rresponsiblysct'}
              target={'_blank'}
            >
              @RResponsiblySct
            </a>
          </p>
        </section>
        <section>
          <h2>LOGO</h2>
          <div></div>
          <p>
            Our brilliant logo has been designed by Michael MacDonald.
            <br></br>
            <a
              className={'link-underlined'}
              href={'https://www.instagram.com/ruanaich/'}
              target={'_blank'}
            >
              @ruanaich
            </a>
            <br></br>
            <a className={'link-underlined'} href={'http://ruanaich.com/'} target={'_blank'}>
              www.ruanaich.com
            </a>
          </p>
          <div className={'rr-logo-contact-page'}></div>
        </section>
        <section>
          <h2>WEBSITE AND IMAGES</h2>
          <p>
            Website and images used on this website (unless otherwise stated) are the work of Elsa
            Lindholm.
            <br></br>
            <a
              className={'link-underlined'}
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
