import { observer } from 'mobx-react';
import React from 'react';

import './contact.scss';

@observer
export class Contact extends React.PureComponent {
  render() {
    return (
      <main className={'contact-page'}>
        <section></section>
      </main>
    );
  }
}
