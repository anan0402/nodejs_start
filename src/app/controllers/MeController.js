const Course = require('../models/Course');
const { convertMultiMongooseToObject } = require('../../utils/mongoose');

class CoursesController {
    posts(req, res, next) {
        Promise.all([
            Course.find({}),
            Course.countDocumentsDeleted({ deletedAt: { $ne: null } }),
        ])
            .then(([courses, documentsDeleted]) =>
                res.render('me/posts', {
                    documentsDeleted,
                    courses: convertMultiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
    recentlyDelete(req, res, next) {
        Course.findDeleted({ deletedAt: { $ne: null } })
            .then((courses) => {
                res.render('me/recently-deleted', {
                    courses: convertMultiMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
