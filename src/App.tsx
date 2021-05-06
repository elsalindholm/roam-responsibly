import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';

import { DesktopApp } from './desktop/DesktopApp';
import { MobileApp } from './mobile/MobileApp';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  public render() {
    return (
      <div>
        <MobileApp appState={this.appState} />
      </div>
    );
  }
}
