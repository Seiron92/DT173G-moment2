/* SETUP for future reference
RUN:
npm init
npm install -g gulp-cli
npm install gulp --save-dev

Don't forget to init git, create .gitignore and add node_modules in this file.

Install all (npm)packages (minify, etc) and declaire them.

execute with: npm run gulp
*/

const { src, dest, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const uglify = require('gulp-uglify-es').default;
const watch = require('gulp-watch');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

// SÖKVÄGAR
const files = {
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    cssPath: "src/**/*.css",
    imgPath: "src/**/images"
};

// TASK: Copy HTML files from src to pub
function copyHTML() {
    return src(files.htmlPath)
        .pipe(dest("pub")
        );
}

// TASK : Concat and minify js-files and copy to pub

function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('pub/js')
        );
}

// TASK : Copy and minify CSS

function cssTask() {
    return src(files.cssPath)
        .pipe(concatCss("css/main.css"))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(dest('pub')
        );
}
// TASK : Minify images and copy from src to pub

function imgsPath() {
    return src(files.imgPath)
        .pipe(imagemin())
        .pipe(dest('pub')
        );
}

// TASK : watcher
function watchTask() {
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imgPath],
        parallel(copyHTML, jsTask, cssTask, imgsPath)
    );
}

exports.default = series(
    parallel(copyHTML, jsTask, cssTask, imgsPath),
    watchTask
);