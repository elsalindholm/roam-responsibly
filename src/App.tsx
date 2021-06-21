import { observer } from 'mobx-react';
import React from 'react';

import { AppState, ViewMode } from './AppState';
import { DesktopApp } from './desktop/DesktopApp';
import { MobileApp } from './mobile/MobileApp';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  componentDidMount() {
    window.onpopstate = this.onHistoryChange;
    window.onresize = this.onResizeWindow;
    this.onResizeWindow();
  }

  componentWillUnmount() {
    window.onpopstate = undefined;
    window.onresize = undefined;
  }

  public render() {
    this.appState.checkRoute();

    let app: JSX.Element;
    switch (this.appState.viewMode) {
      case ViewMode.DESKTOP:
        app = <DesktopApp appState={this.appState} />;
        break;
      case ViewMode.MOBILE:
        app = <MobileApp appState={this.appState} />;
        break;
    }

    return <>{app}</>;
  }

  private readonly onHistoryChange = () => {
    this.appState.checkRoute();
  };

  private readonly onResizeWindow = () => {
    this.appState.checkViewMode(window.innerWidth);
  };
}
