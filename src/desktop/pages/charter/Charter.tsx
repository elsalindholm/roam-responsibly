import { observer } from 'mobx-react';
import React from 'react';
import { Helmet } from 'react-helmet';

import './charter.scss';
import '../../../appStyles/desktop-app-styles.scss';


@observer
export class Charter extends React.PureComponent {
  render() {
    return (
      <main className={'charter-page'}>
        <Helmet>
          <title>Charter</title>
        </Helmet>
        <section>
          <p>
            We, Scotland's Instagrammers, love our beautiful country. However, we are concerned
            about the natural environment and want to ensure that it is conserved in a beautiful
            condition for future generations to enjoy. We recognise the rare privilege of statutory
            access rights to most of the Scottish outdoors, and wish to guarantee that such a
            privilege is not being wrongfully exploited. We acknowledge that we can only hold access
            rights if we exercise them responsibly (Section 1., Scottish Outdoor Access Code 2015).
          </p>
          <ol className={'main-charter-list'}>
            <li>
              We commit to #RoamResponsibly and take responsibility for our actions when in nature.
            </li>
            <li>We commit to leaving NO trace of our visit out in nature by</li>
            <ol className={'nested-charter-list'}>
              <li>doing NO harm to plants or wildlife</li>
              <li>leaving NO waste behind</li>
              <li>NOT camping in the same spot for more than 3 days</li>
            </ol>
            <li>
              We commit to understanding the freedoms and restrictions laid out in the{' '}
              <a
                className={'link-underlined'}
                href={'https://www.outdooraccess-scotland.scot/scottish-outdoor-access-code'}
                target={'_blank'}
              >
                Scottish Outdoor Access Code 2015
              </a>
              .
            </li>
            <li>We commit to not camp near</li>
            <ol className={'nested-charter-list'}>
              <li>houses and gardens, non-residential buildings and associated land;</li>
              <li>land in which crops are growing;</li>
              <li>land next to a school and used by the school;</li>
              <li>
                sports or playing fields when these are in use and where the exercise of access
                rights would interfere with such use;
              </li>
              <li>
                land developed and in use for recreation and where the exercise of access rights
                would interfere with such use;
              </li>
              <li>
                golf courses (but you can cross a golf course provided you don’t interfere with any
                games of golf);
              </li>
              <li>
                places like airfields, railways, telecommunication sites, military bases and
                installations, working quarries and construction sites; and
              </li>
              <li>visitor attractions or other places which charge for entry</li>
              <li>
                areas where local authorities formally exempt land from access rights for short
                periods or have introduced byelaws. We commit to following these restrictions
                accordingly. (Sections 5. {'&'} 6.,{' '}
                <a
                  className={'link-underlined'}
                  href={'https://www.outdooraccess-scotland.scot/scottish-outdoor-access-code'}
                  target={'_blank'}
                >
                  Scottish Outdoor Access Code, 2015
                </a>
                ).
              </li>
            </ol>
            <li>We understand that access rights do not extend to:</li>
            <ol className={'nested-charter-list'}>
              <li>
                being on or crossing land for the purpose of doing anything which is an offence,
                such as theft, breach of the peace, nuisance, poaching, allowing a dog to worry
                livestock, dropping litter, polluting water or disturbing certain wild birds,
                animals and plants;
              </li>
              <li>hunting, shooting or fishing;</li>
              <li>
                any form of motorised recreation or passage (except by people with a disability
                using a vehicle or vessel adapted for their use);
              </li>
              <li>anyone responsible for a dog which is not under proper control; or to</li>
              <li>
                anyone taking away anything from the land for a commercial purpose. (Section 7.,{' '}
                <a
                  className={'link-underlined'}
                  href={'https://www.outdooraccess-scotland.scot/scottish-outdoor-access-code'}
                  target={'_blank'}
                >
                  Scottish Outdoor Access Code, 2015
                </a>
                ).
              </li>
            </ol>
            <li>
              We commit to live by these values, to promote responsible behaviour when in nature and
              to spread the word to our friends, families and followers through Instagram.
            </li>
          </ol>
        </section>
      </main>
    );
  }
}
