import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from '../AppState';
import { MobileHeader } from './header/MobileHeader';

import './mobile-app.scss';

interface MobileAppProps {
  appState: AppState;
}

@observer
export class MobileApp extends React.PureComponent<MobileAppProps> {
  public render() {
    return (
      <div className={'app-container'}>
        <MobileHeader appState={this.props.appState} />
      </div>
    );
  }
}
