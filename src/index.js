const path = require('path');
const express = require('express');
const handlebar = require('express-handlebars');
var morgan = require('morgan');
const routes = require('./routes');

const app = express();
const port = 3000;

//using middleware to handle data from body using post method
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, 'public')));

//Http logger
app.use(morgan('combined'));

app.engine(
    '.hbs',
    handlebar.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
