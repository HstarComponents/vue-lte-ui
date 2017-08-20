require('shelljs/global');
const fs = require('fs');
const gulp = require('gulp4');

gulp.task('docs', done => {
  exec('npm run build');
  exec('npm run lib');
  // 复制lib文件
  cp('lib/vue-lte-ui.js', 'docs/lib');
  // 处理index.html文件
  let indexContent = fs.readFileSync('index.html', 'utf8');
  indexContent = indexContent.replace('<base href="/">', '<base href="/vue-lte-ui/">')
    .replace('dist/build.js', 'build.js');
  fs.writeFileSync('docs/index.html', indexContent);
  // 复制和处理build.js
  cp('dist/build.js', 'docs');
  let buildContent = fs.readFileSync('dist/build.js', 'utf8');
  buildContent = buildContent.replace('rootHost:"http://localhost:8080"', 'rootHost:"https://raw.githubusercontent.com/HstarComponents/vue-lte-ui/master"')
    .replace('<base href="/">', '<base href="/vue-lte-ui/">');
  fs.writeFileSync('dist/build.js', buildContent);
  done();
});
