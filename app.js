var app = require('./config/express')();
require('./config/database')('mongodb://localhost:27017/cursos');
module.exports = app;