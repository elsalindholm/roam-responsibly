import { observer } from 'mobx-react';
import React from 'react';

import { AppState, BlogPage } from '../../../../../AppState';
import { BlogPostInfo } from '../../../../../appData/BlogPostInfo';

import './mobile-jmt-blog.scss';
import '../../../../../appStyles/mobile-app-styles.scss';

interface MobileJMTIProps {
  blogPostInfo: BlogPostInfo;
  appState: AppState;
}

@observer
export class MobileJMTInstameetBlog extends React.PureComponent<MobileJMTIProps> {
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

          <div className={'mjmt-blog-quote'}>
            <div className={'mjmt-blog-quote-text'}>
              "Keep close to Nature’s heart... and break clear away, once in awhile, and climb a
              mountain or spend a week in the woods. Wash your spirit clean."
            </div>
            <div className={'mjmt-blog-quote-author'}>- John Muir</div>
          </div>
          <div className={'mblog-img , mjmt-img-logo'}></div>

          <p>
            At the outset of the #RoamResponsibly movement, we contacted a number of organisations
            with a view to collaborating to promote environmental conservation and inspire others to
            take action to preserve Scotland's beauty.{' '}
            <a className={'mblog-link'} href={'https://www.johnmuirtrust.org/'} target={'_blank'}>
              John Muir Trust (JMT)
            </a>
            , a prominent conservation organisation in Scotland, were one of the first to reply and
            we were pleased to be invited along to their Schiehallion estate in July 2017 to hear
            more about the organisation and its ethos. The ‘walk and talk’ format gave us an
            opportunity to have a frank discussion on some of the key issues facing Scotland's wild
            places and the work that the organisation is doing to protect and manage these places.
          </p>
          <div className={'mblog-img , mjmt-img-one'}></div>
          <p className={'mblog-img-caption'}>
            Schiehallion Instameet by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://www.instagram.com/katstewart01/'}
              target={'_blank'}
            >
              @katstewart01
            </a>
            .
          </p>

          <div className={'mblog-img , mjmt-img-two'}></div>
          <p className={'mblog-img-caption'}>
            Schiehallion Instameet by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://www.instagram.com/ruanaich/'}
              target={'_blank'}
            >
              @ruanaich
            </a>
            .
          </p>
          <p>
            John Muir Trust is a charity founded in 1983 and named after John Muir, a Scot who is
            most well-known for founding the modern conservation movement (
            <a
              className={'mblog-link'}
              href={'https://www.johnmuirtrust.org/about-us'}
              target={'_blank'}
            >
              read more about JMT
            </a>
            ). JMT's mission is to protect and conserve Scotland's wild places and manage those by
            rewilding habitats, managing deer and monitoring biodiversity (
            <a
              className={'mblog-link'}
              href={'https://www.johnmuirtrust.org/our-work'}
              target={'_blank'}
            >
              read more about JMT's work
            </a>
            ).
          </p>
          <div className={'mblog-img , mjmt-img-three'}></div>
          <p className={'mblog-img-caption'}>
            Schiehallion Instameet by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://www.instagram.com/katstewart01/'}
              target={'_blank'}
            >
              @katstewart01
            </a>
            .
          </p>

          <div className={'mblog-img , mjmt-img-four'}></div>
          <p className={'mblog-img-caption'}>
            Schiehallion Instameet by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://www.instagram.com/ruanaich/'}
              target={'_blank'}
            >
              @ruanaich
            </a>
            .
          </p>
          <p>
            We are in the unique position of being able to use our collective social media voice to
            open up dialogue with a wide demographic including the harder to reach younger
            demographic. Going forward we hope to organise more walk and talk sessions with JMT,
            raise awareness of the organisation and its work with a younger demographic and use our
            joint voices to promote and inspire everyone to not just visit these beautiful places
            but to also take responsibility for ensuring that future generations will be able to
            derive just as much enjoyment from them as we currently do.{' '}
          </p>

          <div className={'mblog-img , mjmt-img-five'}></div>
          <p className={'mblog-img-caption'}>
            Schiehallion Instameet by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://www.instagram.com/ruanaich/'}
              target={'_blank'}
            >
              @ruanaich
            </a>
            .
          </p>

          <p>
            One of our active campaigners Michael MacDonald (
            <a
              className={'mblog-link'}
              href={'https://www.instagram.com/ruanaich/'}
              target={'_blank'}
            >
              @ruanaich
            </a>
            ), who came along to the Schiehallion instameet with John Muir Trust wrote a brilliant
            blog post{' '}
            <a
              className={'mblog-link'}
              href={'http://ruanaich.com/social-media-impact-environment-responsibility/'}
              target={'blank'}
            >
              'Does social media impact on our environment? Do we have a responsibility?'
            </a>{' '}
            discussing the impact of social media on nature and landscapes, which is something that
            the #RoamResponsibly campaign aims to tackle. In his blog post Michael MacDonald writes:{' '}
            <i>
              'I did listen to a BBC Radio Scotland episode a while ago, where they discussed the
              use of social media by the US National Parks to ‘forecast’ if you like, potential
              hot-spots and manage the levels of visitors. While I hope we never get to that level
              of management here in Scotland it does show that, as well as being a factor in the
              popularity of certain locations, social media may potentially be used to manage and
              reduce harm caused by an upturn in popularity.'
            </i>{' '}
            Read the blog post here.
          </p>

          <div className={'mblog-img , mjmt-img-six'}></div>
          <p className={'mblog-img-caption'}>
            Schiehallion Instameet by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://www.instagram.com/ruanaich/'}
              target={'_blank'}
            >
              @ruanaich
            </a>
            .
          </p>

          <h3>YOU CAN FIND OUT MORE ABOUT JOHN MUIR TRUST HERE:</h3>
          <ul>
            <li>
              <a className={'mblog-link'} href={'https://www.johnmuirtrust.org/'} target={'_blank'}>
                John Muir Trust
              </a>
            </li>
            <li>
              <a
                className={'mblog-link'}
                href={'https://www.instagram.com/johnmuirtrust/'}
                target={'_blank'}
              >
                John Muir Trust on Instagram
              </a>
            </li>
            <li>
              <a
                className={'mblog-link'}
                href={'https://twitter.com/johnmuirtrust'}
                target={'_blank'}
              >
                John Muir Trust on Twitter
              </a>
            </li>
          </ul>

          <div className={'mblog-img , mjmt-img-seven'}></div>
          <p className={'mblog-img-caption'}>
            Schiehallion Instameet by{' '}
            <a
              className={'mblog-link-img-caption'}
              href={'https://www.instagram.com/katstewart01/'}
              target={'_blank'}
            >
              @katstewart01
            </a>
            .
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
