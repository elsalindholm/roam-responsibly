import { observer } from 'mobx-react';
import React from 'react';
import { Helmet } from 'react-helmet';

import { BlogSummaryComp } from './BlogPostSummaryComp';
import {
  calMac,
  collBeachClean,
  hiddenScotland,
  johnMuirTrust,
  marineConSoc,
  surfAndTurf,
} from '../../../appData/BlogPostInfo';
import { AppState, BlogPage } from '../../../AppState';


interface BlogPostListProps {
  appState: AppState;
}

@observer
export class BlogPostList extends React.PureComponent<BlogPostListProps> {
  render() {
    const { appState } = this.props;

    return (
      <main className={'blog-list'}>
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <section>
          <BlogSummaryComp
            blogPostInfo={surfAndTurf}
            onClick={() => appState.setCurrentBlogPage(BlogPage.SURFANDTURF)}
          />
          <BlogSummaryComp
            blogPostInfo={hiddenScotland}
            onClick={() => appState.setCurrentBlogPage(BlogPage.HIDDENSCOTLAND)}
          />
          <BlogSummaryComp
            blogPostInfo={marineConSoc}
            onClick={() => appState.setCurrentBlogPage(BlogPage.MCS)}
          />
          <BlogSummaryComp
            blogPostInfo={collBeachClean}
            onClick={() => appState.setCurrentBlogPage(BlogPage.COLL)}
          />
          <BlogSummaryComp
            blogPostInfo={johnMuirTrust}
            onClick={() => appState.setCurrentBlogPage(BlogPage.JMT)}
          />
          <BlogSummaryComp
            blogPostInfo={calMac}
            onClick={() => appState.setCurrentBlogPage(BlogPage.CALMAC)}
          />
        </section>
      </main>
    );
  }
}
