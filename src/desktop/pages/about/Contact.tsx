import { observer } from 'mobx-react';
import React from 'react';

import './contact.scss';

@observer
export class Contact extends React.PureComponent {
  render() {
    return (
      <main className={'contact-page'}>
        <section>
          <h2>FOLLOW US ON INSTAGRAM @ROAMRESPONSIBLY AND HELP US SPREAD THE WORD!</h2>
          <p>
            If you would like to contact us about our mission, organising an instameet or anything
            else please do not hesitate to send us an email.
          </p>
        </section>
        <h2>EMAIL</h2>
        <p>
          <strong>General Enquiries:</strong>
          <br></br>
          contactroamresponsibly@gmail.com
        </p>
        <p>
          <strong>Campaign Manager</strong>
          <br></br>
          <a
            href={'https://www.instagram.com/elsaannukka/'}
            target={'_blank'}
            className={'link-underlined'}
          >
            @elsaannukka
          </a>
          <br></br>
          elsaannukka@gmail.com
        </p>
        <section>
          <h2>LOGO</h2>
          <div></div>
          <p>
            Our brilliant logo is the work of Michael MacDonald.
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
            <br></br>Link to website
          </p>
        </section>
      </main>
    );
  }
}
