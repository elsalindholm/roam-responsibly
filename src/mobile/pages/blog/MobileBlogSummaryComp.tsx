import { observer } from 'mobx-react';
import React from 'react';

import { BlogPostInfo } from '../../../appData/BlogPostInfo';

import './mobile-blog-summary-comp.scss';
import '../../../appStyles/mobile-app-styles.scss';

interface MobileBlogSummaryCompProps {
  blogPostInfo: BlogPostInfo;
  onClick: () => void;
}

@observer
export class MobileBlogSummaryComp extends React.PureComponent<MobileBlogSummaryCompProps> {
  render() {
    const { blogPostInfo, onClick } = this.props;
    return (
      <div className={'mblog-post-comp'} onClick={() => onClick()}>
        <div className={'mblog-post-comp-img ' + blogPostInfo.image}></div>
        <div className={'mblog-post-comp-date'}>{blogPostInfo.date}</div>
        <div className={'mblog-post-comp-title'}>{blogPostInfo.title}</div>
        <div className={'mblog-post-comp-subtitle'}>{blogPostInfo.subtitle}</div>
        <div className={'mblog-post-comp-blurb'}>{blogPostInfo.blurb}</div>
        <button className={'mblog-post-comp-btn'} onClick={() => onClick()}>
          READ MORE...
        </button>
      </div>
    );
  }
}
