const Course = require('../models/Course');
const { convertMongooseToObject } = require('../../utils/mongoose');

class CoursesController {
    //GET /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: convertMongooseToObject(course),
                });
            })
            .catch(next);
    }

    //GET show create form
    create(req, res, next) {
        res.render('courses/create');
    }

    //POST create new post
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
}

module.exports = new CoursesController();
