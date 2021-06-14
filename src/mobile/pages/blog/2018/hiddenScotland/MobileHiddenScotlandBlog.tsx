import { observer } from 'mobx-react';
import React from 'react';

import { AppState, BlogPage } from '../../../../../AppState';
import { BlogPostInfo } from '../../../../../appData/BlogPostInfo';

import './mobile-hidden-scotland-blog.scss';
import '../../../../../appStyles/mobile-app-styles.scss';

interface MobileHiddenScotlandProps {
  blogPostInfo: BlogPostInfo;
  appState: AppState;
}

@observer
export class MobileHiddenScotlandBlog extends React.PureComponent<MobileHiddenScotlandProps> {
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
              {'<'} BLOG POSTS
            </button>
          </div>

          <div className={'mblog-post-title-container'}>
            <h2 className={'mblog-post-title'}>{blogPostInfo.title}</h2>
            <p className={'mblog-post-date'}>{blogPostInfo.date}</p>
            <p className={'mblog-post-author'}>BY: {blogPostInfo.author}</p>
          </div>

          <p>
            This week we welcome Hidden Scotland as our newest parter. Like me, many of you might
            have come across the beautiful{' '}
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/hiddenscotland/'}
              target={'_blank'}
            >
              @hiddenscotland
            </a>{' '}
            Instagram feed, which fully embraces the dramatic beauty of Scotland. But there is more
            to it. Jack Cairney (
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/jackcairney/'}
              target={'_blank'}
            >
              @jackcairney
            </a>
            ), the founder of Hidden Scotland, describes the idea behind his venture:{' '}
            <i>
              "Since launching in 2016, Hidden Scotland started out by inspiring the inner adventure
              seeker in all of us through exquisite imagery from some of Scotland’s finest
              photographers via our social media channels."
            </i>
          </p>

          <div className={'mblog-img , mhs-storr'}></div>
          <p className={'mblog-img-caption'}>
            Photo by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://hiddenscotland.co/'}
              target={'_blank'}
            >
              Hidden Scotland
            </a>
            .
          </p>

          <p>
            Hidden Scotland has since also set up a beautiful website{' '}
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/jackcairney/'}
              target={'_blank'}
            >
              @jackcairney
            </a>
            :{' '}
            <i>
              "Our aim is to show the visitors to Scotland and people living in Scotland the best
              places to eat, sleep and visit. We have built an Itinerary Generator and Day Trip
              Planner to help visitors to our site plan their dream trip.
            </i>
          </p>

          <div className={'mblog-img , mhs-tours'}></div>
          <p className={'mblog-img-caption'}>
            Photo by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://hiddenscotland.co/'}
              target={'_blank'}
            >
              Hidden Scotland
            </a>
            .
          </p>

          <p>
            <i>
              This month we launched the Hidden Scotland Tour which is a small group adventure where
              you can experience some of the most dramatic landscapes Scotland has to offer. This
              3-day tour guides you on an unforgettable journey from Glasgow, through magnificent
              glens and inspiring mountainscapes all the way to the Isle of Skye. The tour is taken
              by photographer Andrew Alexander. Andrew has an in depth understanding of the
              Highlands and Skye, which he has developed over the last 5 years and he is looking
              forward to sharing his knowledge and vision with you."
            </i>
          </p>

          <div className={'mblog-img , mhs-neist-point'}></div>
          <p className={'mblog-img-caption'}>
            Photo by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://hiddenscotland.co/'}
              target={'_blank'}
            >
              Hidden Scotland
            </a>
            .
          </p>

          <p>
            A couple of weeks ago Jack contacted RoamResponsibly to enquire after a partnership.
            Hidden Scotland was very excited to take part in the campaign to preserve Scotland's
            beauty.
          </p>

          <p>
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/jackcairney/'}
              target={'_blank'}
            >
              @jackcairney
            </a>
            :{' '}
            <i>
              "I discovered the #RoamResonsibly campaign on instagram and after reading over their
              website and charter I instantly wanted to get involved. I think it's important to
              spread awareness of the Scottish Outdoor Access Code and the great work Roam
              Responsibly are doing.
            </i>
          </p>

          <p>
            <i>
              Sustainability is at the very heart of the Hidden Scotland. We are all responsible for
              looking after the environment and we believe that by working together to protect and
              preserve, we can truly make a difference. I believe nature belongs to us all and by
              working together we can preserve it not only for ourselves and future generations, but
              for the wildlife who also call it home. We have a great opportunity with Hidden
              Scotland to spread knowledge of responsible ways of enjoying and spending time
              outdoors in Scotland while inspiring people to take action to protect and preserve the
              Scottish landscapes and fully enjoy this beautiful country."
            </i>
          </p>

          <div className={'mblog-img , mhs-trotternish'}></div>
          <p className={'mblog-img-caption'}>
            Photo by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://hiddenscotland.co/'}
              target={'_blank'}
            >
              Hidden Scotland
            </a>
            .
          </p>

          <p>
            Hidden Scotland is a brilliant example of how a tourism business can incorporate raising
            awareness of responsible outdoor access in what they do. Not only will Hidden Scotland
            be promoting and sharing the message through their website and social media channels,
            but raising awareness will also be a part of their new Hidden Scotland Tour.
          </p>
          <p>
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/jackcairney/'}
              target={'_blank'}
            >
              @jackcairney
            </a>
            :{' '}
            <i>
              "We are delighted to partner with the #roamresponibly campaign and very proud to be an
              advocate."
            </i>
          </p>

          <div className={'mblog-img , mhs-roam-responsibly'}></div>
          <p className={'mblog-img-caption'}>
            An excerpt from{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://hiddenscotland.co/'}
              target={'_blank'}
            >
              the Hidden Scotland Tour
            </a>
            .
          </p>

          <div className={'mblog-img , mhs-wigwam'}></div>
          <p className={'mblog-img-caption'}>
            Photo by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://hiddenscotland.co/'}
              target={'_blank'}
            >
              Hidden Scotland
            </a>
            .
          </p>

          <p>
            <a className={'mblog-link'} href={'https://hiddenscotland.co/'} target={'_blank'}>
              Hidden Scotland Website
            </a>
            <br></br>
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/hiddenscotland/'}
              target={'_blank'}
            >
              Hidden Scotland on Instagram
            </a>
          </p>

          <div className={'mblog-button-container'}>
            <button
              className={'mblog-button'}
              onClick={() => appState.setCurrentBlogPage(BlogPage.BLOGLIST)}
            >
              {'<'} BLOG POSTS
            </button>
          </div>
        </article>
      </div>
    );
  }
}
