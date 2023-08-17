const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const folderPath = __dirname;
const folderName =  folderPath.substring(folderPath.lastIndexOf('\\') + 1); 


// SCSS ----------------------
const skinScssPath = ['./_src/scss/skin.scss'];
const scssWatchPath = ['./_src/**/*.scss','./opencontent/templates/**/*.scss'];

function buildScss() { // Parse only the Skin.less file
  // 1. What less files to parse?
  return gulp.src(skinScssPath)
  
 
   // 2. Parse Less
   .pipe(sass.sync().on('error', sass.logError))  
   
   // 3. Write File
   //.pipe(gulp.dest('../skin.css'))
   
   // 4. Compress CSS
   .pipe(cleanCSS({inline: ['none']}))
   
   // 5. Rename to min
   //.pipe(rename({ extname: '.min.css' }))
   
   // 6. Write minified CSS
   .pipe(gulp.dest('./'))
   
}

// Containers ----------------------
const containerSource = ['_src/containers/**/*.*'];
const containersTarget = ['../../containers/' + folderName];


function copyContainers() { // Parse only the Skin.less file

  // 1. clean the DNN Container folder
  gulp.src(containersTarget + '**/*.*', {read: false})
  .pipe(clean({force: true}));
  
  // 2. Get containers
  return gulp.src(containerSource)
  
   // 3. Move to container folder
   .pipe(gulp.dest(containersTarget))  
	;
}




function styleTask(){
	buildScss();
}


// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    gulp.watch(containerSource, { delay: 1000 }, copyContainers);
    gulp.watch(scssWatchPath, buildScss);
}

exports.copyContainers = copyContainers;
exports.buildScss = buildScss;
exports.style = styleTask;

exports.default = watchTask;

