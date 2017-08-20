const baseTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="static/AdminLTE/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="static/AdminLTE/css/skins/_all-skins.min.css">
    <style>
      body {
        padding: 20px;
      }
    </style>
  </head>
  <body>
  {{htmlCode}}
  <script src="//cdn.bootcss.com/vue/2.4.2/vue.js"></script>
  <script src="/lib/vue-lte-ui.js"></script>
  <script>
    var current_height = document.body.scrollHeight;
    function sendMsg(){
      parent.postMessage({event: 'iframeHeightChange', data: current_height }, '*');
    }
    setInterval(function(){
      var h = document.body.scrollHeight;
      if(h !== current_height){
        current_height = h;
        sendMsg();
      }
    }, 300);
    console.log(current_height, 'out');
    sendMsg();
  </script>
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
