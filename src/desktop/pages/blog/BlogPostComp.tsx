import { observer } from 'mobx-react';
import React from 'react';
import { BlogPostInfo } from './BlogPostInfo';

import './blog-post-comp.scss';

interface BlogPostCompProps {
  blogPostInfo: BlogPostInfo;
}

@observer
export class BlogPostComp extends React.PureComponent<BlogPostCompProps> {
  render() {
    const { blogPostInfo } = this.props;
    return (
      <div className={'blog-post-comp'}>
        <div className={'blog-post-comp-img ' + blogPostInfo.image}></div>
        <div className={'blog-post-comp-date'}>{blogPostInfo.date}</div>
        <div className={'blog-post-comp-title'}>{blogPostInfo.title}</div>
        <div className={'blog-post-comp-subtitle'}>{blogPostInfo.subtitle}</div>
        <div className={'blog-post-comp-blurb'}>{blogPostInfo.blurb}</div>
        <button className={'blog-post-comp-btn'}>READ MORE...</button>
      </div>
    );
  }
}
