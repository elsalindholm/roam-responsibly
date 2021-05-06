import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from '../../AppState';

import './mobile-header.scss';

interface MHeaderProps {
  appState: AppState;
}

@observer
export class MobileHeader extends React.PureComponent<MHeaderProps> {
  render() {
    return (
      <header className={'mheader-container'}>
        <div className={'mheader-filter'}></div>
        <div className={'mnavbar-container'}>
          <div className={'mnavbar-logo'}></div>
          <div className={'mburger-menu-container'}>
            <div className={'mburger-menu-line'}></div>
            <div className={'mburger-menu-line'}></div>
            <div className={'mburger-menu-line'}></div>
          </div>
        </div>
      </header>
    );
  }
}
