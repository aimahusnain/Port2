import siteMetadata from "./utils/siteMetaData";

const AlexioHead = () => {
  return (
    
    <head>
      <meta property="og:image" content="/social-banner.png" />
<meta property="og:image:type" content="png" />
<meta property="og:image:width" content="1898" />
<meta property="og:image:height" content="934" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{siteMetadata.title}</title> 
    
      <link href="static/plugin/nav/css/component.css" rel="stylesheet" />
      <link href="static/css/styles.css" rel="stylesheet" />
      <link href="static/css/color/default.css" rel="stylesheet" />
      <link rel="icon" href="favicon.ico" />
    </head>
  );
};
export default AlexioHead;
