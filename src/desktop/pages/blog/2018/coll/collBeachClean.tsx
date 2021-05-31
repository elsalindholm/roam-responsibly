import { observer } from 'mobx-react';
import React from 'react';

import { AppState, BlogPage } from '../../../../../AppState';
import { BlogPostInfo } from '../../../../../appData/BlogPostInfo';

import './coll-beach-clean.scss';
import '../../../../../appStyles/desktop-app.scss';

interface CBCProps {
  blogPostInfo: BlogPostInfo;
  appState: AppState;
}

@observer
export class CollBeachCleanBlog extends React.PureComponent<CBCProps> {
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

          <p>
            Both{' '}
            <a
              className={'blog-link'}
              href={'https://www.instagram.com/berriestagram/'}
              target={'_blank'}
            >
              @berriestagram
            </a>{' '}
            and I (
            <a
              className={'blog-link'}
              href={'https://www.instagram.com/elsaannukka/'}
              target={'_blank'}
            >
              @elsaannukka
            </a>
            ) love the Scottish Islands - we have been on many island trips. Last summer we went to
            visit Isle of Eigg together and just a couple of weeks ago we visited Isle of Coll for
            the first time. The plan was to explore the island and take part in the Isle of Coll
            Bird Festival, which is a one-weekend event in May (this year 18th - 20th May) organised
            by{' '}
            <a className={'blog-link'} href={'https://ancridhe.com/'} target={'_blank'}>
              An Cridhe
            </a>{' '}
            and{' '}
            <a className={'blog-link'} href={'https://collbunkhouse.com/'} target={'_blank'}>
              Coll Bunkhouse
            </a>{' '}
            management team with considerable input and support from{' '}
            <a
              className={'blog-link'}
              href={'https://www.rspb.org.uk/reserves-and-events/reserves-a-z/coll/'}
              target={'_blank'}
            >
              RSPB team
            </a>
            .
          </p>
          <div className={'blog-img , coll-clansman'}></div>
          <p className={'blog-img-caption'}>
            The Clansman approaching Coll. Photo by{' '}
            <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
              @elsaannukka
            </a>
            .
          </p>

          <p>
            We ended up arriving to the island on Saturday evening. Despite the amber weather
            warning earlier in the day, our sailing with{' '}
            <a className={'blog-link'} href={'https://www.calmac.co.uk/'} target={'_blank'}>
              CalMac Ferries
            </a>{' '}
            was actually very comfortable and smooth. However, the weather forecast did not look
            promising for the rest of the weekend. We were shattered from our long travel to Coll
            and so glad to check in to our holiday apartment.
          </p>

          <div className={'blog-img , coll-beach'}></div>
          <p className={'blog-img-caption'}>
            Photo by{' '}
            <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
              @elsaannukka
            </a>
            .
          </p>

          <p>
            The next morning, we got up and ready for a stroll around the island. Our destination
            for the afternoon was a beach clean event organised by An Cridhe and Coll Bunkhouse
            management team with considerable input and support from RSPB team, which was going to
            take place in the vast Crossapol beach in the south west tip of Coll. We were probably a
            bit less than an hour's walk from the beach when a car stopped behind us and two ladies
            offered us a lift to the event. This is when we met Jane, one of the organisers of the
            event and one of the lovely people who run An Cridhe and Coll Bunkhouse.
          </p>

          <div className={'coll-two-columns'}>
            <p>
              With this blog post, I am pleased to introduce you to our newest partners:{' '}
              <a className={'blog-link'} href={'https://ancridhe.com/'} target={'_blank'}>
                An Cridhe
              </a>{' '}
              and{' '}
              <a className={'blog-link'} href={'https://collbunkhouse.com/'} target={'_blank'}>
                Coll Bunkhouse
              </a>
              . Together, we had very inspiring conservations about sustainable travel and the
              #RoamResponsibly campaign and both organisations were thrilled to get involved. An
              Cridhe is Coll's recently built community centre and Coll Bunkhouse is a very
              affordably-priced 5-star hostel right next to it in the centre of Coll's main village
              Arinagour. Both are managed by lovely and hospitable staff and housed in beautiful new
              buildings, which have been built to a high environmentally friendly standard. They
              provide income, facilities and fun activities for the local community and visitors.
              Both An Cridhe and Coll Bunkhouse are owned and operated by the Coll community through
              their development trust and charity{' '}
              <a className={'blog-link'} href={'https://developmentcoll.org.uk/'} target={'_blank'}>
                Development Coll Limited
              </a>
              .
            </p>
            <div className={'coll-img-column'}>
              <div className={'blog-img , coll-an-cridhe-logo'}></div>
              <div className={'blog-img , coll-bunkhouse-logo'}></div>
            </div>
          </div>

          <div className={'blog-img , coll-seals'}></div>
          <p className={'blog-img-caption'}>
            A group of seals were following us along the beach. Photo by{' '}
            <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
              @elsaannukka
            </a>
            .
          </p>

          <div className={'blog-img , coll-rocky-beach'}></div>
          <p className={'blog-img-caption'}>
            Photo by{' '}
            <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
              @elsaannukka
            </a>
            .
          </p>

          <p>
            Coll has numerous beautiful beaches with tall sand dunes and majesic rocky edges.
            Fortunately, the washed up rubbish is not very noticeable until you start looking more
            carefully. However, this particular weekend, the high winds had brought more plastic to
            the beach. There must have been at least 20 people who turned up for the beach clean and
            we walked along the beach removing all kinds of plastic waste from the sand from milk
            and drinks bottles and bottle tops to cotton bud and lollopop sticks and even a safety
            helmet. A staggering amount of plastic was collected from this one beach and it made me
            wonder, how much plastic each tide brings in and how much must be buried under the sand
            already.
          </p>

          <div className={'blog-img , coll-beach-clean-one'}></div>
          <p className={'blog-img-caption'}>
            Crossapol beach clean. Photo by{' '}
            <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
              @elsaannukka
            </a>
            .
          </p>

          <p>
            During the beach clean, we had fantastic conversations with Jane about waste problems on
            the island. Many small island communities struggle with waste management - their waste
            has to be transported away from the island and this limits the amount of waste they can
            generate, store and transport. On top of this all, they have to deal with plastic waste
            being washed on the shores of the islands. I asked Jane if they did beach cleans often
            on Coll and she said that they try to but she also reminded me that with full-time jobs,
            it is not always easy to find the time for it. Locals, with help from the local RSPB
            team are making it easier for the visitors to the island to pick up and bin any waste
            they find on the beach by utilising existing bins and having new signage. For example,
            there is a bin that visitors can use at the Crossapol carpark.
          </p>

          <div className={'coll-two-columns'}>
            <div className={'blog-img , coll-beach-clean-two'}></div>
            <div className={'blog-img , coll-beach-clean-three'}></div>
          </div>

          <p>
            Earlier in the the day, in the spirit of the beach clean I had picked up plastic bottles
            or other pieces of rubbish on other beaches on the way to Crossapol. Some of the pieces
            were too big for me to move and I felt bad for having to leave them behind, but I
            cleaned up what I could. The RSPB has an information centre on the island about the
            wonderful birds that you can find on Coll. They were encouraging people to do 2-minute
            beach cleans, which practically means picking up a few pieces whenever out and about. I
            have recently been increasingly aware of my impact on the local environment and
            community when I visit places. Perhaps this is one way we tourists and visitors can give
            back and help the local community, environment and wildlife.
          </p>

          <div className={'blog-img , coll-sunset'}></div>
          <p className={'blog-img-caption'}>
            Sunset in Arinagour. Photo by{' '}
            <a href={'https://www.instagram.com/elsaannukka/'} target={'_blank'}>
              @elsaannukka
            </a>
            .
          </p>

          <p>
            The weather was not on our side and we had to spend most of Monday indoors. When the sky
            finally cleared after the rainy day, we were treated to a magnificent sunset. On our
            last day the lovely Alison, who works for An Cridhe and Coll Bunkhouse, was kind enough
            to take us to the other side of the island to spot some Corncrakes before she was headed
            to work. Despite these birds being very shy we actually managed to see one! After a long
            day of walking and a lunch in the Coll Hotel, we went to pick up our bags and started to
            walk towards the ferry. On single-lane roads, you are used to jumping off the road to
            give way to cars as soon as you hear them. I heard a car behind me and jumped off the
            road, but the car stopped. It was Jane, who had seen us leave and she offered to take us
            back to the ferry. Coll is a beautiful place to visit and has a lot of exciting
            wildlife, but what blew me away the most was people's hospitality and openness. Even in
            every car that passed us by the driver greeted us with a wave a big smile on their
            faces. I felt very welcome!
          </p>

          <h3>BELOW ARE SOME USEFUL LINKS:</h3>
          <ul>
            <li>
              <a className={'blog-link'} href={'https://ancridhe.com/'} target={'_blank'}>
                An Cridhe
              </a>
            </li>
            <li>
              <a className={'blog-link'} href={'https://collbunkhouse.com/'} target={'_blank'}>
                Coll Bunkhouse
              </a>
            </li>
            <li>
              <a className={'blog-link'} href={'http://visitcoll.co.uk/'} target={'_blank'}>
                VisitColl
              </a>
            </li>
            <li>
              <a className={'blog-link'} href={'https://www.calmac.co.uk/'} target={'_blank'}>
                CalMac Ferries
              </a>
            </li>
            <li>
              <a
                className={'blog-link'}
                href={'https://www.rspb.org.uk/reserves-and-events/reserves-a-z/coll/'}
                target={'_blank'}
              >
                RSPB Coll
              </a>
            </li>
          </ul>

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
