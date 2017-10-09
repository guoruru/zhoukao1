// 引入
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
// 压缩css
gulp.task('minifyCss', function () {
    gulp.src('./css/*.css') // 指定目录
        .pipe(concat('style.css')) // 读取并合并
        .pipe(minifyCss()) // 压缩css
        .pipe(rename({suffix: '.min'})) //重命名
        .pipe(gulp.dest('desk')) // 输出目录
        .pipe(notify({message: 'ok'})) // 提示信息
})
// 压缩js
gulp.task('mini-js', function () {
    gulp.src('./js/*.js') // 指定目录
        .pipe(concat('script.js'))// 读取并合并
        .pipe(uglify()) // 压缩js
        .pipe(rename({suffix: '.min'})) // 重命名
        .pipe(gulp.dest('desk')) // 输出目录
        .pipe(notify({message: 'ok'})) // 提示信息
})
