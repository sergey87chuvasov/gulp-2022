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
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js"

// file change watcher
function watcher () {
    gulp.watch(path.watch.files, copy);
}

// building scenarios for executing tasks
const dev = gulp.series(reset, copy, watcher);

// default script execution
gulp.task('default', dev)
