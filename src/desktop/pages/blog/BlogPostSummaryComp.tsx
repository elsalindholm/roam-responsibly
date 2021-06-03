import { observer } from 'mobx-react';
import React from 'react';

import { BlogPostInfo } from '../../../appData/BlogPostInfo';
import { AppState } from '../../../AppState';

import './blog-summary-comp.scss';
import '../../../appStyles/desktop-app-styles.scss';

interface BlogSummaryCompProps {
  blogPostInfo: BlogPostInfo;
  onClick: () => void;
}

@observer
export class BlogSummaryComp extends React.PureComponent<BlogSummaryCompProps> {
  render() {
    const { blogPostInfo, onClick } = this.props;
    return (
      <div className={'blog-post-comp'} onClick={() => onClick()}>
        <div className={'blog-post-comp-img ' + blogPostInfo.image}></div>
        <div className={'blog-post-comp-date'}>{blogPostInfo.date}</div>
        <div className={'blog-post-comp-title'}>{blogPostInfo.title}</div>
        <div className={'blog-post-comp-subtitle'}>{blogPostInfo.subtitle}</div>
        <div className={'blog-post-comp-blurb'}>{blogPostInfo.blurb}</div>
        <button className={'blog-post-comp-btn'} onClick={() => onClick()}>
          READ MORE...
        </button>
      </div>
    );
  }
}
