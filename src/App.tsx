import { observer } from 'mobx-react';
import React from 'react';
import { AppState, ViewMode } from './AppState';

import { DesktopApp } from './desktop/DesktopApp';
import { MobileApp } from './mobile/MobileApp';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  componentDidMount() {
    window.onresize = this.onResizeWindow;
    this.onResizeWindow();
  }

  componentWillUnmount() {
    window.onresize = undefined;
  }

  public render() {
    let app: JSX.Element;
    switch (this.appState.viewMode) {
      case ViewMode.DESKTOP:
        app = <DesktopApp appState={this.appState} />;
        break;
      case ViewMode.MOBILE:
        app = <MobileApp appState={this.appState} />;
        break;
    }

    return <div id={'app-root'}>{app}</div>;
  }

  private readonly onResizeWindow = () => {
    this.appState.checkViewMode(window.innerWidth);
  };
}
