const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () =>
    gulp.src('docs/.vuepress/dist/assets/img/*.{jpg,jpeg,png,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('docs/.vuepress/dist/assets/img/'))
);
