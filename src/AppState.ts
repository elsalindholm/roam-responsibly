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

export class AppState {
  @observable public curPage: Page = Page.BLOG;
  @observable public curAboutPage: AboutPage = AboutPage.CAMPAIGN;
  @observable public curBlogPage: BlogPage = BlogPage.MCS;

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
}
