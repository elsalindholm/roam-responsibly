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

export enum ViewMode {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

export class AppState {
  @observable public curPage: Page = Page.HOME;
  @observable public curAboutPage: AboutPage = AboutPage.CONTACT;
  @observable public curBlogPage: BlogPage = BlogPage.CALMAC;
  @observable public mobileMenuState: MobileMenuStage = MobileMenuStage.CLOSED;
  @observable public aboutMenuOpen: boolean = false;
  @observable public viewMode: ViewMode = ViewMode.DESKTOP;

  @action public checkViewMode(w: number) {
    this.viewMode = w < 760 ? ViewMode.MOBILE : ViewMode.DESKTOP;
  }

  public checkRoute() {
    const query = window.location.hash;
    console.log('query: ', query);
    // '#/ - remove the leading hash & slashes
    const splQuery: string[] = query.split('/');
    splQuery.shift();
    console.log('split query: ', splQuery);

    // Check first level - home/about/charter etc
    if (splQuery.length) {
      const firstLevelQuery = splQuery[0];
      switch (firstLevelQuery) {
        case Page.HOME:
          this.setCurrentPage(Page.HOME);
          break;
        case Page.ABOUT:
          this.setCurrentPage(Page.ABOUT);
          this.checkAboutSubRoute(splQuery);
          break;
      }
    }
  }

  public checkAboutSubRoute(splQuery: string[]) {
    if (splQuery.length > 1) {
      const secondLevelQuery = splQuery[1];
    }
  }

  @action public scrollPageUp() {
    var myDiv = document.getElementById('app-container');
    if (myDiv) {
      myDiv.scrollTop = 0;
    }
  }

  @action public setCurrentPage(page: Page) {
    this.scrollPageUp();
    this.curAboutPage = AboutPage.CAMPAIGN;
    this.curBlogPage = BlogPage.BLOGLIST;
    this.curPage = page;
    // Update the url and tab title
    window.history.replaceState(null, page, '/#/' + page);
  }

  @action public setCurrentAboutPage(aboutPage: AboutPage) {
    this.curAboutPage = aboutPage;
  }

  @action public setCurrentBlogPage(blogPage: BlogPage) {
    this.scrollPageUp();
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
