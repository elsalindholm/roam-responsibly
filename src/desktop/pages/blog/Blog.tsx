import { observer } from 'mobx-react';
import React from 'react';

import './blog.scss';
import { SurfAndTurfBlog } from './2018/surfAndTurf/SurfAndTurf';
import { BlogPostList } from './BlogPostList';
import { collBeachClean, hiddenScotland, marineConSoc, surfAndTurf } from './BlogPostInfo';
import { AppState, BlogPage } from '../../../AppState';
import { HiddenScotlandBlog } from './2018/hiddenScotland/hiddenScotland';
import { McsBlog } from './2018/mcs/mcs';
import { CollBeachCleanBlog } from './2018/coll/collBeachClean';

export interface BlogProps {
  appState: AppState;
}

@observer
export class Blog extends React.PureComponent<BlogProps> {
  render() {
    const { appState } = this.props;

    let blogPage: JSX.Element;
    switch (appState.curBlogPage) {
      case BlogPage.BLOGLIST:
        blogPage = <BlogPostList appState={appState} />;
        break;
      case BlogPage.SURFANDTURF:
        blogPage = <SurfAndTurfBlog blogPostInfo={surfAndTurf} appState={appState} />;
        break;
      case BlogPage.HIDDENSCOTLAND:
        blogPage = <HiddenScotlandBlog blogPostInfo={hiddenScotland} appState={appState} />;
        break;
      case BlogPage.MCS:
        blogPage = <McsBlog blogPostInfo={marineConSoc} appState={appState} />;
        break;
      case BlogPage.COLL:
        blogPage = <CollBeachCleanBlog blogPostInfo={collBeachClean} appState={appState} />;
        break;
    }

    return (
      <main className={'blog-page'}>
        <section>{blogPage}</section>
      </main>
    );
  }
}
