import { observer } from 'mobx-react';
import React from 'react';

import { AppState } from '../AppState';
import { Header } from './header/Header';

import './desktop-app.scss';

@observer
export class DesktopApp extends React.PureComponent {
  private readonly appState = new AppState();

  public render() {
    return (
      <div className={'page-container'}>
        <Header appState={this.appState} />
      </div>
    );
  }
}
