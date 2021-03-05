import { action, observable } from 'mobx';

export class AppState {
  @observable public inputText = "";

  @action public setInputText(text: string) {
    this.inputText = text;
  }
}
