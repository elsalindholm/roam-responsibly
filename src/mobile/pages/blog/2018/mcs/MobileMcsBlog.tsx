import { observer } from 'mobx-react';
import React from 'react';

import { AppState, BlogPage } from '../../../../../AppState';
import { BlogPostInfo } from '../../../../../appData/BlogPostInfo';

import './mobile-mcs-blog.scss';
import '../../../../../appStyles/mobile-app-styles.scss';

interface MobileMcsProps {
  blogPostInfo: BlogPostInfo;
  appState: AppState;
}

@observer
export class MobileMcsBlog extends React.PureComponent<MobileMcsProps> {
  render() {
    const { blogPostInfo, appState } = this.props;

    return (
      <div className={'mblog-post-container'}>
        <article className={'mblog-content'}>
          <div className={'mblog-button-container'}>
            <button
              className={'mblog-button'}
              onClick={() => appState.setCurrentBlogPage(BlogPage.BLOGLIST)}
            >
              {'<'} RETURN TO BLOG POSTS
            </button>
          </div>

          <div className={'mblog-post-title-container'}>
            <h2 className={'mblog-post-title'}>{blogPostInfo.title}</h2>
            <p className={'mblog-post-date'}>{blogPostInfo.date}</p>
            <p className={'mblog-post-author'}>BY: {blogPostInfo.author}</p>
          </div>

          <p>
            Oceans cover roughly about 70% of the Earth's surface and provide a habitat for many
            types of marine wildlife: in the UK alone there are over 15,000 different marine species
            (
            <a
              className={'mblog-link'}
              href={'https://www.mcsuk.org/who-we-are/our-vision'}
              target={'_blank'}
            >
              1
            </a>
            ). The health of the oceans is crucial to our well-being and livelihoods. However,
            pollution and plastic waste are increasingly causing problems for marine wildlife. Of
            the UK's sea and coastline, 60% is found in Scotland and therefore it is not a surprise
            that we can witness the sad consequences of these problems on our shores (
            <a
              className={'mblog-link'}
              href={'https://www.mcsuk.org/who-we-are/our-successes'}
              target={'_blank'}
            >
              2
            </a>
            ).
          </p>

          <p>
            <a className={'mblog-link'} href={'https://www.mcsuk.org/'} target={'_blank'}>
              Marine Conservation Society
            </a>
            , our newest partnering organisation, was founded in 1983 to protect seas, shores and
            wildlife in the UK. The MCS has since become a hugely important player in conservation
            and influecing people to take positive action. Throuhgout its operations MCS has
            successfully increased awareness of marine conservation, influenced decision makers and
            published brilliant guidance like the Good Fish Guide App, which gives advice on
            sustainable seafood, recipes and where to eat out (2).
          </p>
          <div className={'mblog-img , mcs-logo'}></div>

          <h3>
            #SHOREYOUCARE EVENT ORGANISED BY SUSANNE ARBUCKLE{' '}
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/adventuresaroundscotland/'}
              target={'_blank'}
            >
              @ADVENTURESAROUNDSCOTLAND
            </a>
          </h3>

          <p>
            Susanne Arbuckle, a Scottish travel blogger and writer{' '}
            <a
              className={'mblog-link'}
              href={'https://www.adventuresaroundscotland.com/'}
              target={'_blank'}
            >
              Adventures Around Scotland
            </a>{' '}
            (or{' '}
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/adventuresaroundscotland/'}
              target={'_blank'}
            >
              @adventuresaroundscotland
            </a>{' '}
            on Instagram), organised #ShoreYouCare event for content creators to learn more about
            and to get involved in marine conservation. The event, organised in partnership with the
            MCS in North Queensferry on the 1st June, involved a beach clean as well as great talks
            from MCS, marine conservation charity{' '}
            <a className={'mblog-link'} href={'https://www.fidra.org.uk/'} target={'_blank'}>
              Fidra
            </a>{' '}
            and{' '}
            <a
              className={'mblog-link'}
              href={'https://fifecoastandcountrysidetrust.co.uk/'}
              target={'_blank'}
            >
              Fife Coast {'&'} Countryside Trust
            </a>
            . This event is a great example not only of the kind of positive and inspiring action
            that individuals can take but also a demonstration of the power of social media to share
            knowledge, raise awareness and encourage people to take positive action themselves.
          </p>

          <p>
            This is how Susanne Arbuckle summarises the event:{' '}
            <i>
              "After months of planning, it was exciting to finally get our marine conservation
              event for Scottish content creators under way. The event went even better than I hoped
              with lots of social media content being produced on the day to raise awareness of the
              various marine environmental issues discussed by our expert speakers, with future
              blogs and vlogs to follow in a bid to keep the conversation going. During our beach
              clean we picked up over 1200 pieces of rubbish and countless nurdles which really
              highlighted the scale of the problem. There has been so much positive feedback about
              the event and it is a great example of the impact content creators can make when we
              all work together and use our various platforms to highlight the problems our
              environment is facing and what we can do to help."
            </i>
          </p>

          <div className={'mblog-img , mcs-instameet'}></div>
          <p className={'mblog-img-caption'}>
            #ShoreYouCare event in North Queensferry on 1st June 2018. Photo by{' '}
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/adventuresaroundscotland/'}
              target={'_blank'}
            >
              @adventuresaroundscotland
            </a>
            .
          </p>

          <h3>PLASTIC CHALLENGE - #GOPLASTICFREE</h3>

          <p>
            Our <strong>#RoamResponsibly</strong> campaign was launched to promote responsible
            behavoir outdoors and to combat issues like litter in nature. It is important to try,
            whenever possible, to pick up a few pieces of rubbish on your way up a munro or on a
            stroll along a lovely Scottish beach. However, we can also start dealing with this
            litter problem by reducing the amount of waste we produce in our day-to-day lives,
            because unfortunately a lot of it, especially plastics, end up in nature whether
            disposed correctly or not.
          </p>

          <p>
            In July 2018, the Marine Coservation Society will be running their Plastic Challenge and
            encouraging people to <strong>#GoPlasticFree</strong> for a month - and of course to
            continue this forever after. Plastic is everywhere around us and, although a wonderfully
            versatile material, it is grossly overused and not much of it can currently be recycled,
            making it a real problem in terms of disposal. We have all seen sad news about how badly
            plastic is affecting the nature and wildlife all around the world. MCS's Plastic
            Challenge is a great opportunity for you to push yourself out of your comfort zone,
            think about how your could reduce your impact and to start making a real difference by
            reducing single-use plastics. Taking part in the campaign and reducing use of plastics
            will help with global problem with waste and plastic pollution, protecting our seas and
            wildlife and hopefully influence decision makers to steer society towards stronger
            sustinability.
          </p>

          <p>
            Ready to take the challenge? Click{' '}
            <a
              className={'mblog-link'}
              href={'https://www.mcsuk.org/campaigns/plastic-challenge-home#wrapper'}
              target={'_blank'}
            >
              HERE
            </a>{' '}
            to sign up - a few of Scotland's Instagrammer Community already have! By signing up you
            can also receive tips and information on plastic-free lifestyle by email! Document your
            plastic free month through social media, Instagram stories or posts and tag
          </p>
          <ul>
            <li>
              <strong>#GoPlasticFree</strong>
            </li>
            <li>
              <strong>#RoamResponsibly</strong>
            </li>
            <li>
              <a
                className={'mblog-link'}
                href={'https://www.instagram.com/mcs_uk/'}
                target={'_blank'}
              >
                @mcs_uk
              </a>{' '}
              (Instagram),{' '}
              <a className={'mblog-link'} href={'https://twitter.com/mcsuk'} target={'_blank'}>
                @mcsuk
              </a>{' '}
              (Twitter) and{' '}
              <a
                className={'mblog-link'}
                href={'https://www.facebook.com/mcsuk/'}
                target={'_blank'}
              >
                Marine Conservation Society
              </a>{' '}
              (Facebook)
            </li>
            <li>
              <a
                className={'mblog-link'}
                href={'https://www.instagram.com/roamresponsibly/'}
                target={'_blank'}
              >
                @roamresponsibly
              </a>{' '}
              (Instagram),{' '}
              <a
                className={'mblog-link'}
                href={'https://twitter.com/RResponsiblySct'}
                target={'_blank'}
              >
                @RResponsiblySct
              </a>{' '}
              (Twitter) and{' '}
              <a className={'mblog-link'} href={'https://www.facebook.com/roamresponsibly/'}>
                RoamResponsibly
              </a>
              (Facebook)
            </li>
          </ul>

          <p>
            You can also donate to help MCS's{' '}
            <a
              className={'mblog-link'}
              href={'https://www.mcsuk.org/appeal/stop-the-plastic-tide'}
              target={'_blank'}
            >
              Stop The Plastic Tide
            </a>{' '}
            campaign.
            <br></br>
            Find out more about how you can help conserve our seas, shores and wildlife with MCS
            <a
              className={'mblog-link'}
              href={'https://www.mcsuk.org/how-you-can-help/'}
              target={'_blank'}
            >
              {' '}
              here.
            </a>
          </p>

          <div className={'mblog-button-container'}>
            <button
              className={'mblog-button'}
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
