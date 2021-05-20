import { observer } from 'mobx-react';
import React from 'react';

import { AppState, BlogPage } from '../../../AppState';
import { MobileBlogList } from './MobileBlogList';

import './mobile-blog.scss';

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
    }

    return <main className={'mblog-page'}>{blogPage}</main>;
  }
}
