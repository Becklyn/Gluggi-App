"use strict";

var gulp    = require("gulp");
var becklyn = require("becklyn-gulp");
var fs      = require("fs");

var sassTask = becklyn.scss("layout/assets/scss/**/*.scss");
var jsTask = becklyn.js_simple("layout/assets/js/*.js");


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

gulp.task("css",
    function ()
    {
        sassTask(false);
    }
);

gulp.task("js",
    function ()
    {
        jsTask(false);
    }
);

gulp.task("dev",
    function ()
    {
        sassTask(true);
        jsTask(true);
    }
);

gulp.task("default", ["css", "js"]);
gulp.task("release", ["default"]);
