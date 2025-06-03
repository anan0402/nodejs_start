const newRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me');
const coursesRouter = require('./courses');

function routes(app) {
    app.use('/me', meRouter);

    app.use('/news', newRouter);

    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = routes;
