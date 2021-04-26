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

export enum BlogPost {
  SURFANDTURF = 'surf-and-turf',
  HIDDENSCOTLAND = 'hidden-scotland',
  MSC = 'msc',
  COLL = 'coll',
  JMT = 'jmt',
  CALMAC = 'calmac',
  BLOGLIST = 'blog-list',
}

export class AppState {
  @observable public curPage: Page = Page.BLOG;
  @observable public curAboutPage: AboutPage = AboutPage.CAMPAIGN;
  @observable public curBlogPost: BlogPost = BlogPost.BLOGLIST;

  @action public setCurrentPage(page: Page) {
    this.curPage = page;
  }

  @action public setCurrentAboutPage(aboutPage: AboutPage) {
    this.curAboutPage = aboutPage;
  }

  @action public setCurrentBlogPost(blogPost: BlogPost) {
    this.curBlogPost = blogPost;
  }
}
