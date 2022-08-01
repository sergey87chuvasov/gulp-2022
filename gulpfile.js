// main modul
import gulp from "gulp";

// import pathes
import { path } from "./gulp/config/path.js";

// send data in global variable
global.app = {
    path: path,
    gulp: gulp
}

// import tasks
import { copy } from "./gulp/tasks/copy.js"

// default script execution
gulp.task('default', copy)
