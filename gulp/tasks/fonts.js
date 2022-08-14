import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  // search files fonts .otf
  return (
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.otf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'FONTS',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      // convert to .ttf
      .pipe(
        fonter({
          formats: ['ttf'],
        })
      )
      // выгружаем в исходную папку
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
  );
};
