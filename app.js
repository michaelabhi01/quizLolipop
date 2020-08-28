const http = require("http");
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const port = process.env.PORT || 6000;
const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.all("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

const informationRoutes = require('./api/routes/information');
const loginRoutes = require('./api/routes/login');


app.use('/', informationRoutes);
app.use('/login', loginRoutes);