const path = require('path');
const express = require('express');
const handlebar = require('express-handlebars');
var morgan = require('morgan');
const routes = require('./routes');
const db = require('./config/db');
const app = express();
const port = 3000;

//Connect to db
db.connect();
//using middleware to handle data from body using post method
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'resources', 'scss')));

//Http logger
app.use(morgan('combined'));

app.engine(
    '.hbs',
    handlebar.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
