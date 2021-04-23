import { action, observable } from 'mobx';

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  CHARTER = 'charter',
  SOAC = 'soac',
  BLOG = 'blog',
  SPREADWORD = 'spread-the-word',
}

export enum AboutPage {
  CAMPAIGN = 'campaign',
  INSTAGRAMMERS = 'instagrammers',
  PARTNERS = 'partners',
  CONTACT = 'contact',
}

export class AppState {
  @observable public curPage: Page = Page.BLOG;
  @observable public curAboutPage: AboutPage = AboutPage.CAMPAIGN;

  @action public setCurrentPage(page: Page) {
    this.curPage = page;
  }

  @action public setCurrentAboutPage(aboutPage: AboutPage) {
    this.curAboutPage = aboutPage;
  }
}
