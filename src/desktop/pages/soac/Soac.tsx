import { observer } from 'mobx-react';
import React from 'react';

import './soac.scss';

@observer
export class Soac extends React.PureComponent {
  render() {
    return (
      <main className={'soac-page'}>
        <section>
          <h3>
            Scotland is one of a handful of countries with very good Access Rights for the general
            public. However, with this privilege also comes responsibility to look after and not
            exploit the Scottish landscape.
          </h3>
          <p>
            In Scotland, people have access to most of the Scottish outdoors, which is set in{' '}
            <a>The Land Reform (Scotland) Act 2003</a>.
          </p>
          <p>
            <a>The Scottish Outdoor Access Code</a> is a guide for the responsibilities that people
            have, which are to respect landowners' and other people's privacy and livelyhood,
            respect and protect the Scottish wildlife and nature and to take responsibility of your
            own actions when you are out and about.
          </p>
          <a className={'soac-link'}>Read more about the Scottish Outdoor Access Code here</a>
        </section>
      </main>
    );
  }
}
