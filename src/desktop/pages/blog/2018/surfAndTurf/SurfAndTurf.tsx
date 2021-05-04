import { observer } from 'mobx-react';
import React from 'react';
import { AppState, BlogPage } from '../../../../../AppState';

import { BlogPostInfo } from '../../BlogPostInfo';

import './surf-and-turf-blog.scss';

interface SurfAndTurfProps {
  blogPostInfo: BlogPostInfo;
  appState: AppState;
}

@observer
export class SurfAndTurfBlog extends React.PureComponent<SurfAndTurfProps> {
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
            <p className={'blog-post-author'}>GUEST BLOG BY: {blogPostInfo.author}</p>
          </div>

          <div className={'saf-intro'}>
            <p>
              For the Isle of Tiree, roaming responsibly is kind of a big deal. On a blustery
              January morning in 2017, I rolled off MV Clansman to become the island’s new community
              ranger (to those of you who only visit during the summer jollies - yes, those waxed
              paper bags are there with good reason). It is a post that I occupy alone; supported by
              my colleagues at Tiree Community Development Trust.
            </p>
            <div className={'saf-intro-img'}>
              <div className={'blog-img , saf-stephanie-cope'}></div>
              <p className={'blog-img-caption'}>Stephanie Cope</p>
            </div>
          </div>

          <p>
            Tiree Ranger Service is supported by: Scottish Natural Heritage; Tiree Community
            Development Trust; Discover Tiree and our own fundraising activities. As ranger, I serve
            community members and island guests. This includes access management, the provision of
            heritage leaflets,{' '}
            <a
              className={'blog-link'}
              href={'http://www.isleoftiree.com/tiree-books/'}
              target={'_blank'}
            >
              printed books
            </a>
            , evening talks, daytime events,{' '}
            <a
              className={'blog-link'}
              href={'http://www.isleoftiree.com/out-about/walks/<'}
              target={'_blank'}
            >
              guided walks
            </a>
            ,{' '}
            <a
              className={'blog-link'}
              href={'http://www.isleoftiree.com/out-about/ranger-service-1/'}
              target={'_blank'}
            >
              the use of off-road wheelchairs
            </a>{' '}
            and{' '}
            <a
              className={'blog-link'}
              href={'http://www.isleoftiree.com/out-about/camping-and-campervans/'}
              target={'_blank'}
            >
              the option to camp on traditional island crofts
            </a>
            . It’s a busy job.{' '}
          </p>

          <p>
            I hadn’t visited Tiree prior to my interview - though I had been living and working on
            the Isle of Mull, which served as a half-way-house to this more isolated existence.
            Six-hundred and fifty people live on Tiree; a largely agricultural island of just under
            80km2. I was very anxious about working away from my partner and home in Tobermory.
            Because of the ferry route, I sailed past our house on that first trip - with my
            belongings packed into the car below. When you’re full of doubt and you have tears in
            your eyes, it takes something very special to change your mind. Tiree is special. This
            is why I’m so passionate about helping people to enjoy it responsibly.{' '}
          </p>

          <div className={'blog-img , saf-view-of-tiree'}></div>
          <p className={'blog-img-caption'}>
            Looking out towards Coll and Tiree from north-west Mull. Photo by Stephanie Cope.
          </p>

          <p>
            Looking West from Mull, Tiree and its neighbouring island of Coll are nothing more than
            a thickening of the horizon. Tiree is the most low-lying of the two; barely peeking out
            above our legendary Hebridean waves. If you haven’t yet experienced the
            adrenaline-fueled insanity of{' '}
            <a className={'blog-link'} href={'http://tireewaveclassic.co.uk/'} target={'_blank'}>
              Tiree Wave Classic
            </a>{' '}
            (our very own windsurfing competition, which is the longest running professional
            windsurfing event in the world) then trust me, you need to.
          </p>

          <div className={'blog-img , saf-finn-mellon'}></div>
          <p className={'blog-img-caption'}>
            Finn Mellon, competing at Tiree Wave Classic 2017. Photo by Stephanie Cope.
          </p>
          <div className={'blog-img , saf-traigh-thodhrasdail'}></div>
          <p className={'blog-img-caption'}>
            Gearing up for a full day on Traigh Thodhrasdail. Photo by Stephanie Cope.
          </p>

          <p>
            The island’s slim profile creates its most precious and spectacular habitat: machair.
            Tiny fragments of shell, battered against offshore reefs and blown far inland from
            pristine beaches, provide a calcium influence that counters the naturally acidic
            substrate. Each April, our machair is a fried-egg medley of white daisies and yellow
            buttercups. Sometimes the daisy carpet grows so thick, it could be mistaken for snowfall
            (which we rarely get, thanks to our maritime climate).
          </p>

          <div className={'blog-img , saf-first-machair'}></div>
          <p className={'blog-img-caption'}>
            The first machair flowers in April. Photo by Stephanie Cope.
          </p>
          <div className={'blog-img , saf-machair-evening'}></div>
          <p className={'blog-img-caption'}>
            Tiree machair on a late summer evening. Photo by Stephanie Cope.
          </p>

          <p>
            As the days lengthen purple orchids, perfumed clover and bright trefoil create a
            kaleidoscope of smell and colour; chock full of tiny wader chicks and rare bumblebees.
            On traditionally managed croft land, the in-bye rasps with Corncrakes all summer
            (approximately a third of the UK population) and is swept by the cool grace of wildfowl
            throughout winter. These systems are achingly beautiful, and they are fragile.
          </p>

          <div className={'blog-img , saf-corncrake'}></div>
          <p className={'blog-img-caption'}>
            Crofting on Tiree supports a third of our UK Corncrake population. Photo by Stephanie
            Cope.
          </p>
          <div className={'blog-img , saf-brown-hare'}></div>
          <p className={'blog-img-caption'}>
            Tiree is famous for its population of introduced Brown Hares. Photo by Stephanie Cope.
          </p>

          <p>
            One of my first jobs was to install new signage and interpretation. Digging down into
            the ‘soil’ at our beach parking areas, I was horrified to discover nothing more than
            sand - with a smudge of greyish organic colour, barely a hand deep. If the binding
            surface vegetation wears away, this sand is exposed to our howling winds and quickly
            erodes. Thus, vehicles can be an incredibly damaging influence, and off-road access must
            be managed to ensure sustainability. Machair plains provide essential winter grazing for
            the crofting sector, so any damage represents a loss to small-scale agriculture and a
            loss to our threatened wildlife.
          </p>

          <p>
            On Tiree, we ask our guests to use marked parking areas to access beaches; rather than
            driving freely over unfenced land. We also ask that our guests use approved overnight
            camping pitches instead of camping informally from their vehicles (see more{' '}
            <a
              className={'blog-link'}
              href={'http://www.isleoftiree.com/out-about/camping-and-campervans/'}
              target={'_blank'}
            >
              here
            </a>
            ). Both actions have mitigated damage and improved outcomes for crofting and
            conservation. Historically, this management of vehicle access proved controversial -
            though a good level of understanding and acceptance has now taken root, thanks to
            engagement and education. The main issue, in my view, is a lack of clarity in the
            Scottish Outdoor Access Code.
          </p>

          <p>
            For the casual traveller (and, it has to be said, particularly for my fellow Englishmen
            and women) the distinction between true Wild Camping and camping informally from a
            vehicle is not sufficiently clear. A significant proportion of guests genuinely and
            innocently believe that Wild Camping includes the use of a vehicle; that Wild Camping
            rights therefore extend to vehicle users; and that they have a right under Scottish law
            to access open land, with a vehicle, for the purpose of camping. This includes the use
            of roadside locations such as old stone quarries or unmarked pull-in points. These
            guests are naturally surprised when asked to adhere to the requests above - either
            through Tiree’s visitor guidance or in person. I am regularly assured that such access
            is ‘allowed everywhere else’. It isn’t, and this is an awkward conversation to have for
            all parties. Guests may be left feeling a little unsure or even put out; and I must
            intrude on their holiday to request a change in behaviour. Not something I enjoy.
          </p>

          <p>
            Because Tiree has taken measures to promote compliance with the Scottish Outdoor Access
            Code, there is a perception that a ‘right’ to camp informally with vehicles is being
            withheld. In fact, the above restrictions apply across Scotland; it’s just that in many
            communities, informal camping is tolerated because it hasn’t reached damaging levels.
            Informal camping is not sustainable on Tiree and we have had to take steps to manage it;
            in part because of this lack of clarity. Therefore, I argue that this distinction needs
            to be made more explicit in Scottish Outdoor Access Code guidance. We welcome more than
            twenty thousand guests per year (and remember, the island is less than 80km2). Our
            machair simply cannot withstand that kind of unchecked vehicle pressure. Or at least,
            not without squashing quite a few lapwing chicks.
          </p>

          <div className={'blog-img , saf-redshank'}></div>
          <p className={'blog-img-caption'}>
            This Redshank chick is just one of the many groundnesting birds that breed on Tiree.
            Photo by Stephanie Cope.
          </p>
          <div className={'blog-img , saf-highland-cow'}></div>
          <p className={'blog-img-caption'}>
            Small-scale, traditional crofting underpins Tiree's incredible biodiversity. Photo by
            Stephanie Cope.
          </p>

          <p>
            The good news is, when fully informed about the reasons and rational behind this
            management, guests are incredibly supportive. They engage readily with the ethos of our
            community, and visitor behaviour is almost universally excellent. If any of our guests
            are reading, I would like to thank them warmly for this.
          </p>

          <p>
            Like so much of Scotland, Tiree is breathtakingly lovely. Guests are a very welcome part
            of our remote rural economy - and we can offer a unique setting in which to enjoy a
            sense of remoteness and escape; sublime wildlife; quality family time on the beach;
            activities such as SUP, surfing, windsurfing and kitesurfing; plus, the chance to
            explore Scottish ancestry and archaeology. Contemporary events like{' '}
            <a className={'blog-link'} href={'https://tireemusicfestival.co.uk/'} target={'_blank'}>
              Tiree Music Festival
            </a>{' '}
            have opened up our island and our culture to new audiences - representing a fabulous
            opportunity to engage young people with all that the Hebridean environment and way of
            life has to offer. It’s what we’re all about. It’s what I’m all about.
          </p>

          <p>
            We only ask that you #RoamResponsibly when you visit.
            <br></br>
            <br></br>
            Stephanie Cope
            <br></br>
            Tiree Ranger Service
          </p>
          <p>
            Follow us on Twitter{' '}
            <a
              className={'blog-link'}
              href={'https://twitter.com/Nadair_Thiriodh'}
              target={'_blank'}
            >
              @Nadair_Thiriodh
            </a>
            <br></br>
            Find us on{' '}
            <a
              className={'blog-link'}
              href={'https://www.facebook.com/TireeRangerService/'}
              target={'_blank'}
            >
              Facebook
            </a>
            <br></br>
            Visit our{' '}
            <a
              className={'blog-link'}
              href={'https://friendsoftiree.org.uk/blog/'}
              target={'_blank'}
            >
              Blog
            </a>
          </p>

          <div className={'blog-img , saf-wildflowers'}></div>
          <p className={'blog-img-caption'}>
            Wildflower vereges along Traigh Sorobidh. Photo by Stephanie Cope.
          </p>
          <div className={'blog-img , saf-traigh-caolas'}></div>
          <p className={'blog-img-caption'}>
            Traigh Caolas, with Ben More of Mull in the distance. Photo by Stephanie Cope.
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
