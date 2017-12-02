'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');
const strip = require('gulp-strip-css-comments');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minifier');

var isProduction = false;

/* ===================== STYLES =====================*/
gulp.task('styles', function () {
    gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(strip())
        .pipe(gulpif(isProduction, minify({
            minify: true,
            minifyCSS: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            getKeptComment: function (content, filePath) {
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
            }
        })))
        .pipe(gulp.dest('./public/assets/styles'))
});


/*/////////////////////////////////////////////////////
                         UTILS
/////////////////////////////////////////////////////*/

gulp.task("makeBuildCompilation", function () { isProduction = true; })
gulp.task("build", ["makeBuildCompilation", 'styles'])

gulp.task('watch', function () {
    gulp.watch('./source/styles/*.scss', ['styles']);
});
gulp.task("dev", ['styles', 'watch']);
gulp.task('default', ['styles']);