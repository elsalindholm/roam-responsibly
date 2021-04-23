import { observer } from 'mobx-react';
import React from 'react';

import './blog.scss';
import { BlogPostComp } from './BlogPostComp';
import {
  calMac,
  collBeachClean,
  hiddenScotland,
  johnMuirTrust,
  marineConSoc,
  surfAndTurf,
} from './BlogPostInfo';

@observer
export class Blog extends React.PureComponent {
  render() {
    return (
      <main className={'blog-page'}>
        <section>
          <BlogPostComp blogPostInfo={surfAndTurf} />
          <BlogPostComp blogPostInfo={hiddenScotland} />
          <BlogPostComp blogPostInfo={marineConSoc} />
          <BlogPostComp blogPostInfo={collBeachClean} />
          <BlogPostComp blogPostInfo={johnMuirTrust} />
          <BlogPostComp blogPostInfo={calMac} />
        </section>
      </main>
    );
  }
}
