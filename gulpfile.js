const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const assetCache = require('gulp-asset-cache')

gulp.task('imagemin', () =>
    gulp.src('docs/.vuepress/dist/assets/img/*.{jpg,jpeg,png,gif,svg}')
        .pipe(assetCache.filter('.image-cache'))
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(gulp.dest('docs/.vuepress/dist/assets/img/'))
        .pipe(assetCache.cache())
)
