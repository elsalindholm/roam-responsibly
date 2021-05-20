import { observer } from 'mobx-react';
import React from 'react';

import { BlogPostInfo } from '../../../appData/BlogPostInfo';

import './blog-post-comp.scss';
import '../../../appStyles/desktop-app.scss';

interface BlogPostCompProps {
  blogPostInfo: BlogPostInfo;
}

@observer
export class BlogPostComp extends React.PureComponent<BlogPostCompProps> {
  render() {
    const { blogPostInfo } = this.props;

    return (
      <div className={'blog-post-container'}>
        <div className={'blog-content'}>
          <button>Return to Blog Posts</button>
          <section></section>
        </div>
      </div>
    );
  }
}
