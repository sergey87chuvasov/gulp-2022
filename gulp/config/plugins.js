import replace from 'gulp-replace' // search and replace
import plumber from 'gulp-plumber' // error processing
import notify from 'gulp-notify'  // hint messages
import browsersync from 'browser-sync' // local server


// export object

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync
}