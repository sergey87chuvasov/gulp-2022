// main modul
import gulp from "gulp";

// import pathes
import { path } from "./gulp/config/path.js";

// import common plugins
import { plugins } from "./gulp/config/plugins.js"

// send data in global variable
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js"

// file change watcher
function watcher () {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}


const mainTasks = gulp.parallel(copy, html);

// building scenarios for executing tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// default script execution
gulp.task('default', dev);
