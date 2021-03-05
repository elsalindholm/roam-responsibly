import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import './input-component.scss';

interface InputProps {
  appState: AppState;
}


@observer
export class InputComponent extends React.PureComponent<InputProps> {
  public render() {
    const { appState } = this.props;
    return (
    <div className={'input-component'}>
      
        <input placeholder={'write here'} value={appState.inputText} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => appState.setInputText(event.target.value)} />
      
        <button> Add +</button>
    </div>
    );
  }
}