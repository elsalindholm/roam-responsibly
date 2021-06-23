import React from 'react';
import { Helmet } from 'react-helmet';
import { PageMetaData } from './appData/PageMeta';

export interface PageHelmetProps {
  pageMetaData: PageMetaData;
}

export class PageHelmet extends React.PureComponent<PageHelmetProps> {
  render() {
    const { pageMetaData } = this.props;

    return (
      <Helmet>
        <title>{pageMetaData.title}</title>
        <link rel="canonical" href={pageMetaData.link} />
        <meta name="description" content={pageMetaData.description} />
        <meta property={"og:title"} content={pageMetaData.ogTitle} />
        <meta property={"og:description"} content={pageMetaData.ogDescription}/>
        <meta property={"og:url"} content={pageMetaData.ogUrl} />
        <meta property={"og:image"} content={pageMetaData.ogImage} />
        <meta property={"og:type"} content={pageMetaData.ogType} />
        <meta property={"og:locale"} content={"en_GB"}/>
      </Helmet>
    );
  }
}
