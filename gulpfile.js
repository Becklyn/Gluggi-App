var gulp    = require("gulp");
var becklyn = require("becklyn-gulp");
var isDebug = !!require("yargs").argv.debug || !!require("yargs").argv.dev;

gulp.task("css", becklyn.scss("layout/assets/**/*.scss", isDebug));
gulp.task("js",  becklyn.js("layout/assets/js/**/*.js", isDebug));

gulp.task("link", ["css", "js"],
    function ()
    {
        if (fs.existsSync("web/assets"))
        {
            fs.unlinkSync("web/assets");
        }

        fs.symlinkSync("../layout/public", "web/assets");


        if (fs.existsSync("web/content"))
        {
            fs.unlinkSync("web/content");
        }

        fs.symlinkSync("../layout/content", "web/content");
    }
);

gulp.task("default", ["css", "js"]);
