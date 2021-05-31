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

export enum BlogPage {
  SURFANDTURF = 'surf-and-turf',
  HIDDENSCOTLAND = 'hidden-scotland',
  MCS = 'mcs',
  COLL = 'coll',
  JMT = 'jmt',
  CALMAC = 'calmac',
  BLOGLIST = 'blog-list',
}

export enum MobileMenuStage {
  OPEN = 'open',
  CLOSED = 'closed',
}

export class AppState {
  @observable public curPage: Page = Page.ABOUT;
  @observable public curAboutPage: AboutPage = AboutPage.PARTNERS;
  @observable public curBlogPage: BlogPage = BlogPage.CALMAC;
  @observable public mobileMenuState: MobileMenuStage = MobileMenuStage.CLOSED;
  @observable public aboutMenuOpen: boolean = false;

  @action public setCurrentPage(page: Page) {
    var myDiv = document.getElementById('app-root');
    myDiv.scrollTop = 0;

    this.curAboutPage = AboutPage.CAMPAIGN;
    this.curBlogPage = BlogPage.BLOGLIST;
    this.curPage = page;
  }

  @action public setCurrentAboutPage(aboutPage: AboutPage) {
    this.curAboutPage = aboutPage;
  }

  @action public setCurrentBlogPage(blogPage: BlogPage) {
    var myDiv = document.getElementById('app-root');
    myDiv.scrollTop = 0;
    this.curBlogPage = blogPage;
  }

  @action public setMobileMenuOpen() {
    this.mobileMenuState = MobileMenuStage.OPEN;
  }

  @action public setMobileMenuClosed() {
    this.mobileMenuState = MobileMenuStage.CLOSED;

    setTimeout(() => (this.aboutMenuOpen = false), 500);
  }

  @action public toggleAboutMenu() {
    this.aboutMenuOpen = !this.aboutMenuOpen;
  }
}
