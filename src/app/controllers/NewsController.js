class NewsController {
    //GET method
    index(req, res) {
        res.render('news');
    }

    //GET method
    show(req, res) {
        res.send('Hello world');
    }
}

module.exports = new NewsController();
