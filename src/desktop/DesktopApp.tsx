import { observer } from 'mobx-react';
import React from 'react';

import './desktop-app.scss';

import { AppState, Page } from '../AppState';
import { Header } from './header/Header';
import { Home } from './pages/home/Home';
import { SpreadWord } from './pages/spreadTheWord/SpreadTheWord';
import { Blog } from './pages/blog/Blog';
import { Soac } from './pages/soac/Soac';
import { Charter } from './pages/charter/Charter';

export interface DesktopAppProps {
  appState: AppState;
}

@observer
export class DesktopApp extends React.PureComponent<DesktopAppProps> {
  public render() {
    const { appState } = this.props;

    let page: JSX.Element;
    switch (appState.curPage) {
      case Page.HOME:
        page = <Home />;
        break;
      case Page.CHARTER:
        page = <Charter />;
        break;
      case Page.SOAC:
        page = <Soac />;
        break;
      case Page.BLOG:
        page = <Blog />;
        break;
      case Page.SPREADWORD:
        page = <SpreadWord />;
    }

    return (
      <div className={'app-container'}>
        <Header appState={appState} />
        <div className={'body'}>
          <div className={'main-page-container'}>{page}</div>
        </div>
      </div>
    );
  }
}
