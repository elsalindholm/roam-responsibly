import { observer } from 'mobx-react';
import React from 'react';

import {
  calMac,
  collBeachClean,
  hiddenScotland,
  johnMuirTrust,
  marineConSoc,
  surfAndTurf,
} from '../../../appData/BlogPostInfo';
import { AppState, BlogPage } from '../../../AppState';
import { MobileBlogSummaryComp } from './MobileBlogSummaryComp';

interface MobileBlogPostListProps {
  appState: AppState;
}

@observer
export class MobileBlogList extends React.PureComponent<MobileBlogPostListProps> {
  render() {
    const { appState } = this.props;

    return (
      <main>
        <section>
          <MobileBlogSummaryComp
            blogPostInfo={surfAndTurf}
            onClick={() => appState.setCurrentBlogPage(BlogPage.SURFANDTURF)}
          />
          <MobileBlogSummaryComp
            blogPostInfo={hiddenScotland}
            onClick={() => appState.setCurrentBlogPage(BlogPage.HIDDENSCOTLAND)}
          />
          <MobileBlogSummaryComp
            blogPostInfo={marineConSoc}
            onClick={() => appState.setCurrentBlogPage(BlogPage.MCS)}
          />
          <MobileBlogSummaryComp
            blogPostInfo={collBeachClean}
            onClick={() => appState.setCurrentBlogPage(BlogPage.COLL)}
          />
          <MobileBlogSummaryComp
            blogPostInfo={johnMuirTrust}
            onClick={() => appState.setCurrentBlogPage(BlogPage.JMT)}
          />
          <MobileBlogSummaryComp
            blogPostInfo={calMac}
            onClick={() => appState.setCurrentBlogPage(BlogPage.CALMAC)}
          />
        </section>
      </main>
    );
  }
}
