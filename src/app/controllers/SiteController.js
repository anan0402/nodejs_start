class SiteController {
    //GET method
    index(req, res) {
        res.render('home');
    }

    //GET method
    search(req, res) {
        res.send('Hello world');
    }
}

module.exports = new SiteController();
