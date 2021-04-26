import { observer } from 'mobx-react';
import React from 'react';

import { BlogPostInfo } from '../BlogPostInfo';

import './blog-post-comp.scss';

interface SurfAndTurfProps {
  blogPostInfo: BlogPostInfo;
}

@observer
export class SurfAndTurf extends React.PureComponent<SurfAndTurfProps> {
  render() {
    const { blogPostInfo } = this.props;

    return (
      <div className={'blog-post-container'}>
        <div className={'blog-content'}>
          <button>Return to Blog Posts</button>
          <section>
            <p>Published: {blogPostInfo.date}</p>
            <p>Author: {blogPostInfo.author}</p>
          </section>
        </div>
      </div>
    );
  }
}
