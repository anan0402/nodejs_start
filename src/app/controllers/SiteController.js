const Course = require('../models/Course');
const { convertMultiMongooseToObject } = require('../../utils/mongoose');

class SiteController {
    //GET method
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: convertMultiMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //GET method
    search(req, res) {
        res.send('Hello world');
    }
}

module.exports = new SiteController();
