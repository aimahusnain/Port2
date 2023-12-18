import siteMetadata from "./utils/siteMetaData";

const AlexioHead = () => {
  return (
    
    <head>
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
