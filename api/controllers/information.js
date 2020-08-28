const pjson = require('../../package.json');

exports.information = (req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<b>Quiz-lolipop API Node.js Version ${pjson.version}</b>`);
}