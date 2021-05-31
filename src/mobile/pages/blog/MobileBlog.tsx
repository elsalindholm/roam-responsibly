import { observer } from 'mobx-react';
import React from 'react';

import { AppState, BlogPage } from '../../../AppState';
import { MobileBlogList } from './MobileBlogList';

import { MobileSurfAndTurfBlog } from './2018/surfAndTurf/MobileSurfAndTurfBlog';
import {
  calMac,
  collBeachClean,
  hiddenScotland,
  johnMuirTrust,
  marineConSoc,
  surfAndTurf,
} from '../../../appData/BlogPostInfo';
import { MobileHiddenScotlandBlog } from './2018/hiddenScotland/MobileHiddenScotlandBlog';
import { MobileMcsBlog } from './2018/mcs/MobileMcsBlog';
import { MobileJMTInstameetBlog } from './2018/jmt/MobileJmtBlog';
import { MobileCollBlog } from './2018/coll/MobileCollBlog';
import { MobileCalMacBlog } from './2018/calMac/MobileCalmacBlog';

import './mobile-blog.scss';
import '../../../appStyles/mobile-app-styles.scss';

interface MobileBlogProps {
  appState: AppState;
}

@observer
export class MobileBlog extends React.PureComponent<MobileBlogProps> {
  render() {
    const { appState } = this.props;

    let blogPage: JSX.Element;
    switch (appState.curBlogPage) {
      case BlogPage.BLOGLIST:
        blogPage = <MobileBlogList appState={appState} />;
        break;
      case BlogPage.SURFANDTURF:
        blogPage = <MobileSurfAndTurfBlog blogPostInfo={surfAndTurf} appState={appState} />;
        break;
      case BlogPage.HIDDENSCOTLAND:
        blogPage = <MobileHiddenScotlandBlog blogPostInfo={hiddenScotland} appState={appState} />;
        break;
      case BlogPage.MCS:
        blogPage = <MobileMcsBlog blogPostInfo={marineConSoc} appState={appState} />;
        break;
      case BlogPage.JMT:
        blogPage = <MobileJMTInstameetBlog blogPostInfo={johnMuirTrust} appState={appState} />;
        break;
      case BlogPage.COLL:
        blogPage = <MobileCollBlog blogPostInfo={collBeachClean} appState={appState} />;
        break;
      case BlogPage.CALMAC:
        blogPage = <MobileCalMacBlog blogPostInfo={calMac} appState={appState} />;
        break;
    }

    return <main className={'mblog-page'}>{blogPage}</main>;
  }
}
