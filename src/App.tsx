import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';

import { DesktopApp } from './desktop/DesktopApp';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  public render() {
    return (
      <div>
        <DesktopApp appState={this.appState} />
      </div>
    );
  }
}
