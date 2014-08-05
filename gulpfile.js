var gulp    = require("gulp");
var becklyn = require("becklyn-gulp");
var fs      = require("fs");
var isDebug = !!require("yargs").argv.debug || !!require("yargs").argv.dev;

gulp.task("css", becklyn.scss("layout/assets/**/*.scss", isDebug));
gulp.task("js",  becklyn.js("layout/assets/js/**/*.js", isDebug));

gulp.task("assets", ["css", "js"],
    function ()
    {
        if (fs.existsSync("web/assets"))
        {
            fs.unlinkSync("web/assets");
        }

        fs.symlinkSync("../layout/public", "web/assets");
    }
);

gulp.task("default", ["css", "js"]);
