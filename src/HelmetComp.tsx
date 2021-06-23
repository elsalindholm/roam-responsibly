import React from 'react';
import { Helmet } from 'react-helmet';
import { PageMetaData } from './appData/PageMeta';

export interface HelmetCompProps {
  pageMetaData: PageMetaData;
}

export class HelmetComp extends React.PureComponent<HelmetCompProps> {
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
