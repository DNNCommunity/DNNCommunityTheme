const gulp = require('gulp');
const { parallel } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');



const folderPath = __dirname;
const folderName =  folderPath.substring(folderPath.lastIndexOf('\\') + 1); 


// SCSS ----------------------
const skinScssPath = ['./_src/skin.scss'];
const scssWatchPath = ['./_src/**/*.scss','./opencontent/templates/**/*.scss'];

function buildScss() { // Parse only the Skin.scss file
  // 1. What SCSS  files to parse?
  return gulp.src(skinScssPath)
  
 
   // 2. Parse SCSS 
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


function copyContainers() { 

  // 1. clean the DNN Container folder
  gulp.src(containersTarget + '**/*.*', {read: false})
  .pipe(clean({force: true}));
  
  // 2. Get containers
  return gulp.src(containerSource)
  
   // 3. Move to container folder
   .pipe(gulp.dest(containersTarget))  
	;
}

const jsWatchPath = '_src/theme/js/**/*.js'
const jsSource = ['_src/theme/js/menu.js', '_src/theme/js/menu-hover.js', '_src/theme/js/mark-empty-panes.js', '_src/theme/js/scroll-class.js'];
const jsDest = ['vendors/theme/js'];

function jsBundle(cb){

  gulp.src(jsSource)
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(jsDest));

  cb();

}


function styleTask(){
	buildScss();
}

function getVendors(cb){

  // FontAwesome 5 CSS
  const faCSS = ['node_modules/@fortawesome/fontawesome-free/css/all.css', '_src/theme/css/FontAwesome-4-shim/v4-shims.min.css']; // Unfortunately the v4 Shim is not available through npm
  const faCSSDest = 'vendors/fontawesome/css';

  gulp.src(faCSS)
  .pipe(gulp.dest(faCSSDest));

    // FontAwesome 5 Fonts
    const faFonts = ['node_modules/@fortawesome/fontawesome-free/webfonts/*'];
    const faFontsDest = 'vendors/fontawesome/webfonts';
  
    gulp.src(faFonts)
    .pipe(gulp.dest(faFontsDest));

    // Bootstrap JS
    const bootsJS = ['node_modules/bootstrap/dist/js/*'];
    const bootsJSDest = 'vendors/bootstrap/js';
  
    gulp.src(bootsJS)
    .pipe(gulp.dest(bootsJSDest));

  cb();

}


// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    gulp.watch(containerSource, { delay: 1000 }, copyContainers);
    gulp.watch(scssWatchPath, buildScss);
    gulp.watch(jsWatchPath, jsBundle);
}


exports.copyContainers = copyContainers;
exports.buildScss = buildScss;
exports.style = styleTask;
exports.jsbundle = jsBundle;
exports.vendors = getVendors;

exports.setup = parallel(getVendors, copyContainers, buildScss, jsBundle);

exports.default = watchTask;

