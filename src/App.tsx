import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { InputComponent } from './InputComponent';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div className={"container"}>
        <div className={"top-bar"}>
          <InputComponent appState={this.appState} />
        </div>
        <div className={"list-box"}>

        </div>
      </div>
    );
  }
}
