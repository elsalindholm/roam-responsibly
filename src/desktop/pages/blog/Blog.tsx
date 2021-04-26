import { observer } from 'mobx-react';
import React from 'react';

import './blog.scss';
import { BlogPostComp } from './BlogPostComp';
import { surfAndTurf } from './BlogPostInfo';
import { BlogPostList } from './BlogPostList';

@observer
export class Blog extends React.PureComponent {
  render() {
    return (
      <main className={'blog-page'}>
        <section>
          <BlogPostComp blogPostInfo={surfAndTurf} />
        </section>
      </main>
    );
  }
}
