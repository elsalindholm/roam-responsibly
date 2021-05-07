import { observer } from 'mobx-react';
import React from 'react';

import { AppState, BlogPage } from '../../../../../AppState';
import { BlogPostInfo } from '../../BlogPostInfo';

import './calmac-blog.scss';
import '../../../../../appStyles/desktop-app.scss';

interface CalMacProps {
  blogPostInfo: BlogPostInfo;
  appState: AppState;
}

@observer
export class CalMacBlog extends React.PureComponent<CalMacProps> {
  render() {
    const { blogPostInfo, appState } = this.props;

    return (
      <div className={'blog-post-container'}>
        <article className={'blog-content'}>
          <div className={'blog-button-container'}>
            <button
              className={'blog-button'}
              onClick={() => appState.setCurrentBlogPage(BlogPage.BLOGLIST)}
            >
              {'<'} RETURN TO BLOG POSTS
            </button>
          </div>
          <div className={'blog-post-title-container'}>
            <h2 className={'blog-post-title'}>{blogPostInfo.title}</h2>
            <p className={'blog-post-date'}>{blogPostInfo.date}</p>
            <p className={'blog-post-author'}>BY: {blogPostInfo.author}</p>
          </div>

          <div className={'calmac-blog-intro'}>
            <p>
              As you know, our campaign to #RoamResponsibly has kicked off and we are very excited
              to introduce our first partnering organisation:{' '}
              <a className={'blog-link'} href={'https://www.calmac.co.uk/'} target={'_blank'}>
                CalMac Ferries
              </a>
              , who are joining us in a mission to promote responsible outdoor access in Scotland.
            </p>
            <div className={'blog-img , calmac-blog-logo'}></div>
          </div>

          <div className={'blog-img , calmac-blog-harris'}></div>
          <p className={'blog-img-caption'}>
            Isle of Harris by{' '}
            <a href={'https://www.instagram.com/katstewart01/'} target={'_blank'}>
              @katstewart01
            </a>
            .
          </p>

          <p>
            If you have ever been to the west coast of Scotland, especially to the Scottish islands,
            you are probably well-aware of CalMac Ferries, who have been operating ferry connections
            to the Hebridean and Clyde islands for over 160 years. CalMac Ferries sails 475 times
            per day during summer and 350 per day in winter, transporting 4.9 million passengers per
            year to the lovely Scottish islands and back. The network stretches from Arran in the
            South to Lewis in north, spanning 28 destinations in total.
          </p>

          <div className={'blog-img , calmac-blog-eigg-one'}></div>
          <p className={'blog-img-caption'}>
            Isle of Eigg by{' '}
            <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
              @elsaannukka
            </a>
            .
          </p>

          <p>
            CalMac improves the economy and livelihoods of the Scottish island communities and takes
            care of the environment by minimising the impact caused by their operations and
            enhancing the environment whenever possible. For example, CalMac is tackling litter at
            its sites to ensure no harm to wildlife and organises beach cleans with a local school
            in the Isle of Coll. CalMac is also active in spreading word about conservation and
            helping with conservation whenever possible: in Castlebay and Lochboisdale harbours
            CalMac has been able to enhance the habitat available for wildlife. CalMac recycles 75%
            of their waste and aims to reduce their fuel consumption.
          </p>

          <div className={'blog-img , calmac-blog-lewis'}></div>
          <p className={'blog-img-caption'}>
            Isle of Lewis by{' '}
            <a href={'https://www.instagram.com/willmackenzie/'} target={'_blank'}>
              @willmackenzie
            </a>
            .
          </p>

          <p>
            Klare Chamberlain, Environmental Manager at the award-winning ferry operator commented:
            <br></br>
            <br></br>
            <i>
              “CalMac Ferries are delighted to support the #RoamResponsibly campaign. We are
              extremely privileged to operate within one of the most beautiful parts of the world
              are recognise our responsibility to do all that we can to protect and conserve our
              natural environment. The #RoamResponsibly campaign has the ability to reach a wide
              audience and we fully support their message of responsible travel and enjoyment of the
              Scottish natural environment”
            </i>
            <br></br>
            <br></br>
            Look out for future partnerships and collaborations as we encourage you to
            #roamresponsibly while visiting the west coast islands.
            <br></br>
            <br></br>
            More examples and information can be found on{' '}
            <a
              className={'blog-link'}
              href={
                'https://www.calmac.co.uk/corporate/environment/biodiversity-report?utm_medium=influencer&utm_source=website&utm_campaign=roamresponsibly&utm_content=biodiversity%20report'
              }
              target={'_blank'}
            >
              CalMac’s Biodiversity Report
            </a>
            .
          </p>

          <div className={'blog-img , calmac-blog-uist'}></div>
          <p className={'blog-img-caption'}>
            South Uist by{' '}
            <a href={'https://www.instagram.com/jenniferfollis/'} target={'_blank'}>
              @jenniferfollis
            </a>
            .
          </p>

          <p>
            Below is an extract of CalMac's Commitment to the Environment.{' '}
            <a
              className={'blog-link'}
              href={
                'https://www.calmac.co.uk/corporate/environment?utm_medium=influencer&utm_source=website&utm_campaign=roamresponsibly&utm_content=commitment'
              }
              target={'_blank'}
            >
              Click here to find out more.
            </a>
          </p>

          <p>
            <strong>OUR COMMITMENT TO THE ENVIRONMENT</strong>
            <br></br>
            <br></br>
            <i>
              "CalMac Ferries is committed to supporting the aims of Scottish Government to provide
              a wealthier and fairer, smarter, healthier, safer and stronger, and greener Scotland.
              We are a lifeline service provider in the Clyde and Hebrides Regions and are part of
              the DNA of the Highlands and islands, embedded in the local community where we play an
              integral part in the economic sustainability of the area's social and business life.
              We will minimise impact on the marine and terrestrial environments in which we operate
              and wherever possible, enhance biodiversity and the quality of Scotland's natural
              environment for future generations to enjoy.
              <br></br>
              <br></br>
              We are subject to both terrestrial and marine environmental legislation and strive to
              go beyond minimum compliance wherever possible. We operate under the requirements of
              our ISO 14001:2015 Environmental Management System which identifies and mitigates the
              environmental risk of our operations. Our environmental performance is managed by the
              Environmental Manager with support from across the organisation."
            </i>
          </p>

          <div className={'blog-img , calmac-blog-eigg-two'}></div>
          <p className={'blog-img-caption'}>
            Isle of Eigg by{' '}
            <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
              @elsaannukka
            </a>
            .
          </p>

          <h3>
            Click the links below to find out more or to book your trip to visit the lovely Scottish
            islands.
          </h3>
          <ul>
            <li>
              <a className={'blog-link'} href={'https://www.calmac.co.uk/'} target={'_blank'}>
                CalMac
              </a>
            </li>
            <li>
              <a
                className={'blog-link'}
                href={'https://www.calmac.co.uk/corporate/environment'}
                target={'_blank'}
              >
                CalMac’s Commitment to the Environment
              </a>
            </li>
            <li>
              <a
                className={'blog-link'}
                href={'https://www.calmac.co.uk/corporate/environment/biodiversity-report'}
                target={'_blank'}
              >
                CalMac Biodiversity Report
              </a>
            </li>
          </ul>

          <div className={'blog-img , calmac-blog-bernera'}></div>
          <p className={'blog-img-caption'}>
            Great Bernera by{' '}
            <a href={'https://www.instagram.com/katstewart01/'} target={'_blank'}>
              @katstewart01
            </a>
            .
          </p>

          <div className={'blog-button-container'}>
            <button
              className={'blog-button'}
              onClick={() => appState.setCurrentBlogPage(BlogPage.BLOGLIST)}
            >
              {'<'} RETURN TO BLOG POSTS
            </button>
          </div>
        </article>
      </div>
    );
  }
}
