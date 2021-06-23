import { observer } from 'mobx-react';
import React from 'react';
import { Helmet } from 'react-helmet';

import './instagrammers.scss';
import '../../../appStyles/desktop-app-styles.scss';


@observer
export class Instagrammers extends React.PureComponent {
  render() {
    return (
      <main className={'ig-page'}>
        <Helmet>
          <title>About | Instagrammers</title>
        </Helmet>
        <section>
          <p>
            Scotland's Instagrammer community is an inspiring group of people who not only take
            wonderful photographs and produce engaging content, but also do not hesitate to speak up
            about issues that they see around them.
          </p>
        </section>
        <section>
          <h2>INSTAGRAMMERS</h2>
          <p>
            Below is a list of Scotland's Instagrammers who have signed the #RoamResponsibly
            Charter. Follow the links to see their work.
          </p>
          <ul className={'ig-list'}>
            <li>
              <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
                @elsaannukka
              </a>{' '}
              - Elsa Lindholm
            </li>
            <li>
              <a href={'https://www.instagram.com/ruanaich/'} target={'_blank'}>
                @ruanaich
              </a>{' '}
              - Michael MacDonald
            </li>
            <li>
              <a href={'https://www.instagram.com/katstewart01/'} target={'_blank'}>
                @katstewart01
              </a>{' '}
              - Katrina Stewart
            </li>
            <li>
              <a href={'https://www.instagram.com/loosemooose/'} target={'_blank'}>
                @loosemooose
              </a>{' '}
              - Lucy Hamilton
            </li>
            <li>
              <a href={'https://www.instagram.com/virginiechl/'} target={'_blank'}>
                @virginiechl
              </a>{' '}
              - Virginie Chabrol
            </li>
            <li>
              <a href={'https://www.instagram.com/mark_harris_photography/'} target={'_blank'}>
                @mark_harris_photography
              </a>{' '}
              - Mark Harris
            </li>
            <li>
              <a href={'https://www.instagram.com/lochgmarcp/'} target={'_blank'}>
                @lochgmarcp
              </a>{' '}
              - Marc Pickering
            </li>
            <li>
              <a href={'https://www.instagram.com/berriestagram/'} target={'_blank'}>
                @berriestagram
              </a>{' '}
              - Fariba Stoddart
            </li>
            <li>
              <a href={'https://www.instagram.com/willmackenzie/'} target={'_blank'}>
                @willmackenzie
              </a>{' '}
              - Will Mackenzie
            </li>
            <li>
              <a href={'https://www.instagram.com/ramseyselim/'} target={'_blank'}>
                @ramseyselim
              </a>{' '}
              - Ramsey Selim
            </li>
            <li>
              <a href={'https://www.instagram.com/edienthusiast/'} target={'_blank'}>
                @edienthusiast
              </a>{' '}
              - Ildiko Rusvai
            </li>
            <li>
              <a href={'https://www.instagram.com/itsrab/'} target={'_blank'}>
                @itsrab
              </a>{' '}
              - Rab Fyfe
            </li>
            <li>
              <a href={'https://www.instagram.com/clairegouldphotography/'} target={'_blank'}>
                @clairegouldphotography
              </a>{' '}
              - Claire Gould
            </li>
            <li>
              <a href={'https://www.instagram.com/nixo83/'} target={'_blank'}>
                @nixo83
              </a>{' '}
              - Sarah Nixon
            </li>
            <li>
              <a href={'https://www.instagram.com/_dsutherland_/'} target={'_blank'}>
                @_dsutherland_
              </a>{' '}
              - David Sutherland
            </li>
            <li>
              <a href={'https://www.instagram.com/scotlandwithfluffywolf/'} target={'_blank'}>
                @scotlandwithfluffywolf
              </a>{' '}
              - Claire Roulston
            </li>

            <li>
              <a href={'https://www.instagram.com/torsdk/'} target={'_blank'}>
                @torsdk
              </a>{' '}
              - Victoria Davidson-Kinghorn
            </li>
            <li>
              <a href={'https://www.instagram.com/eilidh__cameron/'} target={'_blank'}>
                @eilidh_cameron
              </a>{' '}
              - Eilidh Cameron
            </li>
            <li>
              <a href={'https://www.instagram.com/bumblebambi/'} target={'_blank'}>
                @bumblebambi
              </a>{' '}
              - Bee Leask
            </li>
            <li>
              <a href={'https://www.instagram.com/grantbullocharch/'} target={'_blank'}>
                @grantbullocharch
              </a>{' '}
              - Grant Bulloch
            </li>
            <li>
              <a href={'https://www.instagram.com/olivergmlewis/'} target={'_blank'}>
                @olivergmlewis
              </a>{' '}
              - Oliver Lewis
            </li>
            <li>
              <a href={'https://www.instagram.com/finn_caldwell/'} target={'_blank'}>
                @finn_caldwell
              </a>{' '}
              - Finn Caldwell
            </li>
            <li>
              <a href={'https://www.instagram.com/laretour/'} target={'_blank'}>
                @laretour
              </a>{' '}
              - Laura Brown
            </li>
            <li>
              <a href={'https://www.instagram.com/beholdscotland/'} target={'_blank'}>
                @beholdscotland
              </a>{' '}
              - Bryan McArthur
            </li>
            <li>
              <a href={'https://www.instagram.com/dominicbsimmons/'} target={'_blank'}>
                @dominicbsimmons
              </a>{' '}
              - Dominic Simmons
            </li>
            <li>
              <a href={'https://www.instagram.com/robertbirtles/'} target={'_blank'}>
                @robertbirtles
              </a>{' '}
              - Robert Birtles
            </li>
            <li>
              <a href={'https://www.instagram.com/little.scottish.one/'} target={'_blank'}>
                @little.scottish.one
              </a>{' '}
              - Andrea Mason
            </li>
            <li>
              <a href={'https://www.instagram.com/adventuresaroundscotland/'} target={'_blank'}>
                @adventuresaroundscotland
              </a>{' '}
              - Susanne Arbuckle
            </li>
          </ul>
        </section>
      </main>
    );
  }
}
