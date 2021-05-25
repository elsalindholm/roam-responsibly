import { observer } from 'mobx-react';
import React from 'react';

import { AppState } from '../../AppState';

import './mobile-navbar.scss';

interface MobileNavbarProps {
  appState: AppState;
}

@observer
export class MobileNavbar extends React.PureComponent<MobileNavbarProps> {
  render() {
    return (
      <div className={'mnavbar'}>
        <div className={'mnavbar-close-button'}></div>
        <div className={'mnav'}>
          <button className={'mnav-button'}>HOME</button>
        </div>
        <div className={'mnav'}>
          <button className={'mnav-button'}>ABOUT</button>
        </div>

        <div className={'mnav'}>
          <button className={'mnav-button'}>CHARTER</button>
        </div>
        <div className={'mnav'}>
          <button className={'mnav-button'}>SCOTTISH OUTDOOR ACCESS CODE</button>
        </div>
        <div className={'mnav'}>
          <button className={'mnav-button'}>BLOG</button>
        </div>
        <div className={'mnav'}>
          <button className={'mnav-button'}>SPREAD THE WORD</button>
        </div>
      </div>
    );
  }
}
