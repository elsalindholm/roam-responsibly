import { observer } from 'mobx-react';
import React from 'react';

import { AppState } from '../AppState';

import './header.scss';

interface HeaderProps {
  appState: AppState;
}

@observer
export class Header extends React.PureComponent<HeaderProps> {
  render() {
    return (
      <div className={'header-container'}>
        <div className={'navbar-container'}>
          <div className={'navbar-logo'}>LOGO</div>
          <div className={'navbar-button-container'}>
            <button>Home</button>
            <button>About</button>
            <button>Charter</button>
            <button>Scottish Outdoor Access Code</button>
            <button>Blog</button>
            <button>Spread The Word</button>
          </div>
        </div>
        <div className={'header-banner'}>
          <div className={'small-banner-heading'}></div>
          <div className={'large-banner-heading'}></div>
        </div>
      </div>
    );
  }
}
