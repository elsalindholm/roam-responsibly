import { observer } from 'mobx-react';
import React from 'react';

import { AppState, Page } from '../AppState';
import { Header } from './header/Header';
import { Home } from './pages/home/Home';

import './desktop-app.scss';
import { SpreadWord } from './pages/spreadTheWord/SpreadTheWord';

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
