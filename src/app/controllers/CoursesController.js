const Course = require('../models/Course');
const { convertMongooseToObject } = require('../../utils/mongoose');

class CoursesController {
    //GET /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: convertMongooseToObject(course),
                }),
            )
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
            .catch(next);
    }

    //GET detail /:id/edit
    detail(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: convertMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //PUT /:id
    edit(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        Course.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/posts'))
            .catch(next);
    }

    //DELETE /:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/posts'))
            .catch(next);
    }

    //DELETE /:id
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/posts'))
            .catch(next);
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/recently-deleted'))
            .catch(next);
    }
}

module.exports = new CoursesController();
