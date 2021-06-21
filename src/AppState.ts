import { action, observable } from 'mobx';

interface UrlParams {
  mainPage: Page;
  aboutPage?: AboutPage;
  blogPage?: BlogPage;
}

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  CHARTER = 'charter',
  SOAC = 'scottish-outdoor-access-code',
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
  SURFANDTURF = 'surf-and-turf-roaming-responsibly-on-the-isle-of-tiree',
  HIDDENSCOTLAND = 'an-interview-with-hidden-scotland',
  MCS = 'marine-conservation-society',
  COLL = 'beach-cleaning-on-coll',
  JMT = 'partnering-up-with-john-muir-trust',
  CALMAC = 'introducing-our-first-partner-calmac-ferries',
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
  @observable public curAboutPage: AboutPage = AboutPage.CAMPAIGN;
  @observable public curBlogPage: BlogPage = BlogPage.BLOGLIST;
  @observable public mobileMenuState: MobileMenuStage = MobileMenuStage.CLOSED;
  @observable public aboutMenuOpen: boolean = false;
  @observable public viewMode: ViewMode = ViewMode.DESKTOP;

  constructor() {
    const urlParams: UrlParams = this.validateUrlParams();
    this.updateHistory(urlParams);
    this.goToUrl(urlParams);
  }

  @action public checkViewMode(w: number) {
    this.viewMode = w < 640 ? ViewMode.MOBILE : ViewMode.DESKTOP;
  }

  @action public scrollPageUp() {
    var myDiv = document.getElementById('app-container');
    if (myDiv) {
      myDiv.scrollTop = 0;
    }
  }

  @action public setCurrentPage(page: Page) {
    this.updateHistory({ mainPage: page });
    this.setPage(page);
  }

  @action private setPage(page: Page) {
    this.scrollPageUp();
    this.curAboutPage = AboutPage.CAMPAIGN;
    this.curBlogPage = BlogPage.BLOGLIST;
    this.curPage = page;
  }

  @action public setCurrentAboutPage(aboutPage: AboutPage) {
    this.curPage = Page.ABOUT;
    this.updateHistory({ mainPage: this.curPage, aboutPage });
    this.setAboutPage(aboutPage);
  }

  @action private setAboutPage(aboutPage: AboutPage) {
    this.curAboutPage = aboutPage;
  }

  @action public setCurrentBlogPage(blogPage: BlogPage) {
    this.curPage = Page.BLOG;
    this.updateHistory({ mainPage: this.curPage, blogPage });
    this.setBlogPage(blogPage);
  }

  @action private setBlogPage(blogPage: BlogPage) {
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

  public goToPreviousHistory() {
    const urlParams: UrlParams = this.validateUrlParams();
    this.goToUrl(urlParams);
  }

  private validateUrlParams(): UrlParams {
    const query = window.location.hash;
    const splQuery: string[] = query.split('/');
    // Get rid of the leading #
    splQuery.shift();

    // No subdomain to check
    if (!splQuery.length) {
      return { mainPage: Page.HOME };
    }

    // Check sub page first
    if (splQuery.length > 1) {
      const secondPage = splQuery[1];

      // About sub pages
      const aboutPages = Object.values(AboutPage);
      const aboutSubPage = aboutPages.find((aPage) => aPage === secondPage);
      if (aboutSubPage) {
        // Url matches an about sub page
        return { mainPage: Page.ABOUT, aboutPage: aboutSubPage };
      }

      // Blog sub pages
      const blogPages = Object.values(BlogPage);
      const blogSubPage = blogPages.find((bPage) => bPage === secondPage);
      if (blogSubPage) {
        return { mainPage: Page.BLOG, blogPage: blogSubPage };
      }
    }

    // Then check first page
    const firstPage = splQuery[0];
    const page = Object.values(Page).find((page) => page === firstPage);
    return { mainPage: page };
  }

  // Update the browser history and URL with new location
  private updateHistory(urlParams: UrlParams) {
    let url = `/#/${urlParams.mainPage}`;

    if (urlParams.aboutPage) {
      url += `/${urlParams.aboutPage}`;
    } else if (urlParams.blogPage) {
      url += `/${urlParams.blogPage}`;
    }

    window.history.pushState(null, urlParams.mainPage, url);
  }

  // Got to Url params location
  @action private goToUrl(urlParams: UrlParams) {
    this.setPage(urlParams.mainPage);

    if (urlParams.aboutPage) {
      this.setAboutPage(urlParams.aboutPage);
    } else if (urlParams.blogPage) {
      this.setBlogPage(urlParams.blogPage);
    }
  }
}
