var gulp    = require("gulp");
var becklyn = require("becklyn-gulp");
var isDebug = !!require("yargs").argv.debug || !!require("yargs").argv.dev;

gulp.task("css", becklyn.scss("layout/assets/**/*.scss", isDebug));
gulp.task("js",  becklyn.js("layout/assets/js/**/*.js", isDebug));


gulp.task("default", ["css", "js"]);
