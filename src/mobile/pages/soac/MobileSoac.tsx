import React from 'react';

import './mobile-soac.scss';
import '../../../appStyles/mobile-app-styles.scss';

export class MobileSoac extends React.PureComponent {
  render() {
    return (
      <main className={'msoac-page'}>
        <section>
          <p className={'mobile-p'}>
            Scotland is one of a handful of countries with wide Access Rights for the general
            public.
          </p>
          <p className={'mobile-p'}>
            However, with this privilege comes the responsibility to look after and not exploit the
            Scottish landscape.
          </p>
          <p className={'mobile-p'}>
            In Scotland, people can access most of the Scottish outdoors (set out in{' '}
            <a
              className={'mobile-a'}
              target={'_blank'}
              href={
                'https://www.outdooraccess-scotland.scot/act-and-access-code/land-reform-act/land-reform-act-legal'
              }
            >
              The Land Reform (Scotland) Act 2003
            </a>
            ).
          </p>
          <p className={'mobile-p'}>
            <a
              className={'mobile-a'}
              target={'_blank'}
              href={'https://www.outdooraccess-scotland.scot/scottish-outdoor-access-code'}
            >
              The Scottish Outdoor Access Code
            </a>{' '}
            is a guide for the responsibilities that people have when enjoying the outdoors. These
            responsibilities include respecting landowners' and other people's privacy and
            livelihood, respecting and protecting Scottish wildlife and nature and taking
            responsibility of your own actions when you are out and about.
          </p>
          <p className={'mobile-p'}>
            <a
              className={'mobile-a'}
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
