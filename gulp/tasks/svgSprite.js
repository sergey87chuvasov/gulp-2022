import svgSprite from 'gulp-svg-sprite'

export const svgSprite = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SVG",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: `../icons/icons.svg`,
                // create  a page with list of icons
                example: true
            }
        },
    }))
    .pipe(app.gulp.dest(`${app.path.build.images}`))
}