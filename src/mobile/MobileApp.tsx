import { observer } from 'mobx-react';
import React from 'react';

import { AppState, Page } from '../AppState';
import { MobileHeader } from './header/MobileHeader';
import { MobileHome } from './pages/home/MobileHome';

import './mobile-app.scss';
import '../appStyles/mobile-app-styles.scss';
import { MobileFooter } from './footer/MobileFooter';
import { MobileSoac } from './pages/soac/MobileSoac';

interface MobileAppProps {
  appState: AppState;
}

@observer
export class MobileApp extends React.PureComponent<MobileAppProps> {
  public render() {
    const { appState } = this.props;

    let page: JSX.Element;
    switch (appState.curPage) {
      case Page.HOME:
        page = <MobileHome />;
        break;
      case Page.SOAC:
        page = <MobileSoac />;
        break;
    }

    return (
      <div className={'app-container'}>
        <MobileHeader appState={this.props.appState} />
        <div className={'mbody'}>
          <div className={'mmain-page-container'}>{page}</div>
          <MobileFooter />
        </div>
      </div>
    );
  }
}
