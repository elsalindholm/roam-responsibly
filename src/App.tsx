import { observer } from 'mobx-react';
import React from 'react';
import { Helmet } from 'react-helmet';

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
    let app: JSX.Element;
    switch (this.appState.viewMode) {
      case ViewMode.DESKTOP:
        app = <DesktopApp appState={this.appState} />;
        break;
      case ViewMode.MOBILE:
        app = <MobileApp appState={this.appState} />;
        break;
    }

    return (
      <>
        <Helmet>
          <title>RoamResponsibly</title>
          <meta property={'og:title'} content={'RoamResponsibly'} />
          <meta
            property={'og:description'}
            content={"Scotland's Instagrammers campaign to #RoamResponsibly"}
          />
          <meta property={'og:url'} content={'https://www.roamresponsibly.com/#/about/campaign'} />
          <meta property={'og:image'} content={'../../../dist/assets/bannerImages/about.JPG'} />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta http-equiv='X-UA-Compatible' content='ie=edge' />
          <meta property={'og:type'} content={'website'} />
          <meta property={'og:locale'} content={'en_GB'} />
        </Helmet>
        {app}
      </>
    );
  }

  private readonly onHistoryChange = () => {
    this.appState.goToPreviousHistory();
  };

  private readonly onResizeWindow = () => {
    this.appState.checkViewMode(window.innerWidth);
  };
}
