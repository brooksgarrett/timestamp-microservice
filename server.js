var express = require('express');
var moment = require('moment');

const PORT = process.env.PORT || 3000;

var app = express();

function sendError (res) {
    res.status(200).send({
        unix: null,
        natural: null
    });
}

app.get('/:date', (req, res) => {
    if (moment(req.params.date).isValid()) {
        var date = moment(req.params.date);
        res.send({
            unix: date.format('x'),
            natural: date.format('MMMM D, YYYY')
        })
    } else {
        sendError(res);
    }
});


app.listen(PORT, () => {
    console.log('Server started');
});