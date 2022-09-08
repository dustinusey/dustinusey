const { src, dest, series, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const cssMin = require('gulp-clean-css');
const jsMin = require('gulp-terser');

const config = {
    styles: {
        src: './frontend/src/styles/**/*.scss',
        dest: './frontend/dist/styles/',
    },
    scripts: {
        src: './frontend/src/scripts/**/*.js',
        dest: './frontend/dist/scripts/',
    }
}

const handleStyles = () => {
    return src(config.styles.src)
        .pipe(scss())
        .pipe(autoPrefixer('last 2 versions'))
        .pipe(cssMin())
        .pipe(dest(config.styles.dest));
}
const handleScripts = () => {
    return src(config.scripts.src)
        .pipe(jsMin())
        .pipe(dest(config.scripts.dest));
}
const handleWatchTask = () => {
    watch(
        [config.styles.src, config.scripts.src],
        series(handleStyles, handleScripts)
        );
}

exports.default = series(
    handleStyles,
    handleScripts,
    handleWatchTask
);