// ����
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
// ѹ��css
gulp.task('minifyCss', function () {
    gulp.src('./css/*.css') // ָ��Ŀ¼
        .pipe(concat('style.css')) // ��ȡ���ϲ�
        .pipe(minifyCss()) // ѹ��css
        .pipe(rename({suffix: '.min'})) //������
        .pipe(gulp.dest('desk')) // ���Ŀ¼
        .pipe(notify({message: 'ok'})) // ��ʾ��Ϣ
})
// ѹ��js
gulp.task('mini-js', function () {
    gulp.src('./js/*.js') // ָ��Ŀ¼
        .pipe(concat('script.js'))// ��ȡ���ϲ�
        .pipe(uglify()) // ѹ��js
        .pipe(rename({suffix: '.min'})) // ������
        .pipe(gulp.dest('desk')) // ���Ŀ¼
        .pipe(notify({message: 'ok'})) // ��ʾ��Ϣ
})
