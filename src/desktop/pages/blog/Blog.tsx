import { observer } from 'mobx-react';
import React from 'react';

import './blog.scss';
import { BlogSummaryComp } from './BlogPostSummaryComp';
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
          <BlogSummaryComp blogPostInfo={surfAndTurf} />
          <BlogSummaryComp blogPostInfo={hiddenScotland} />
          <BlogSummaryComp blogPostInfo={marineConSoc} />
          <BlogSummaryComp blogPostInfo={collBeachClean} />
          <BlogSummaryComp blogPostInfo={johnMuirTrust} />
          <BlogSummaryComp blogPostInfo={calMac} />
        </section>
      </main>
    );
  }
}
