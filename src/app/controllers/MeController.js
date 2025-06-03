const Course = require('../models/Course');
const { convertMultiMongooseToObject } = require('../../utils/mongoose');

class CoursesController {
    posts(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/posts', {
                    courses: convertMultiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new CoursesController();
