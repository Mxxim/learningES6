
const gulp = require('gulp');
const babel = require('gulp-babel');

// 执行 gulp 时的默认任务
gulp.task('default',() => {
    // 默认任务代码
    return gulp.src('src/*/*.es6')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('dist-gulp'));

});