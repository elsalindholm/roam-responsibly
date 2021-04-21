import { observer } from 'mobx-react';
import React from 'react';

import './blog.scss';

@observer
export class Blog extends React.PureComponent {
  render() {
    return (
      <main className={'blog-page'}>
        <section>
          <h2>Welcome to the #RoamResponsibly blog</h2>
          <p>This page is still under construction...</p>
        </section>
      </main>
    );
  }
}
