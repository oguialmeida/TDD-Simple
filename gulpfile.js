const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const Jasmine = require('jasmine');

const caminhoFonte = 'index.js';

gulp.task('testar', function (done) {
    const jasmine = new Jasmine();
    jasmine.loadConfigFile('jasmine.json');
    jasmine.exitOnCompletion = false;
    jasmine.execute().then((success) => {
        if (success) {
            done();
        } else {
            done(new Error('Tests failed'));
        }
    });
});

gulp.task('tdd-continuo', gulp.series('testar', function () {
    gulp.watch(caminhoFonte, gulp.series('testar'));
}));

process.on('uncaughtException', function (e) {
    console.error(e.stack);
});
