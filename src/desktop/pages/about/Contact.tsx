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
        </p>
        <p>contactroamresponsibly@gmail.com</p>
        <p>
          <strong>Campaign Manager</strong>
        </p>
        <p>
          <a
            href={'https://www.instagram.com/elsaannukka/?hl=en'}
            target={'_blank'}
            className={'link-underlined'}
          >
            @elsaannukka
          </a>
        </p>
        <p>elsaannukka@gmail.com</p>
        <section>
          <h2>LOGO</h2>
          <div></div>
          <p>
            Our brilliant logo is the work of Michael MacDonald.
            <br></br>@ruanaich
            <br></br>Link to website
          </p>
        </section>
        <section>
          <h2>WEBSITE AND IMAGES</h2>
          <p>
            Website and images used on this website (unless otherwise stated) are the work of Elsa
            Lindholm.
            <br></br>@elsaannukka
            <br></br>Link to website
          </p>
        </section>
      </main>
    );
  }
}
