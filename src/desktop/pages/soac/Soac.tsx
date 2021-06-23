import { observer } from 'mobx-react';
import React from 'react';
import { HelmetComp } from '../../../HelmetComp';
import { SoacMeta } from '../../../appData/PageMeta';

import './soac.scss';
import '../../../appStyles/desktop-app-styles.scss';



@observer
export class Soac extends React.PureComponent {
  render() {
    return (
      <main className={'soac-page'}>
        <HelmetComp pageMetaData={SoacMeta} />
        <section>
          <p>
            Scotland is one of a handful of countries with wide Access Rights for the general
            public. However, with this privilege comes the responsibility to look after and not
            exploit the Scottish landscape.
          </p>
          <p>
            In Scotland, people can access most of the Scottish outdoors (set out in{' '}
            <a
              target={'_blank'}
              className={'link-underlined'}
              href={
                'https://www.outdooraccess-scotland.scot/act-and-access-code/land-reform-act/land-reform-act-legal'
              }
            >
              The Land Reform (Scotland) Act 2003
            </a>
            ).
          </p>
          <p>
            <a
              target={'_blank'}
              className={'link-underlined'}
              href={'https://www.outdooraccess-scotland.scot/scottish-outdoor-access-code'}
            >
              The Scottish Outdoor Access Code
            </a>{' '}
            is a guide for the responsibilities that people have when enjoying the outdoors. These
            responsibilities include respecting landowners' and other people's privacy and
            livelihood, respecting and protecting Scottish wildlife and nature and taking
            responsibility of your own actions when you are out and about.
          </p>
          <p>
            <a
              className={'soac-link, link-underlined'}
              target={'_blank'}
              href={'https://www.outdooraccess-scotland.scot/scottish-outdoor-access-code'}
            >
              Read more about the Scottish Outdoor Access Code here
            </a>
          </p>
        </section>
      </main>
    );
  }
}
