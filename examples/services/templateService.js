const baseTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <!-- Theme style -->
    <link rel="stylesheet" href="static/AdminLTE/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="static/AdminLTE/css/skins/_all-skins.min.css">
  </head>
  <body>
  {{htmlCode}}
  <script src="//cdn.bootcss.com/vue/2.4.2/vue.js"></script>
  <script src="/lib/vue-lte-ui.js"></script>
  <script>
    {{jsCode}}
  </script>
  </body>
</html>
`;

export const templateService = {
  buildHtmlForPreview(htmlCode, jsCode) {
    let html = baseTemplate;
    return html.replace('{{htmlCode}}', htmlCode).replace('{{jsCode}}', jsCode);
  }
};
