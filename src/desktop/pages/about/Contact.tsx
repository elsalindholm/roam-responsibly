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
          <a href={'https://www.instagram.com/elsaannukka/?hl=en'} target={'_blank'}>
            @elsaannukka
          </a>
        </p>
        <p>elsaannukka@gmail.com</p>
      </main>
    );
  }
}
