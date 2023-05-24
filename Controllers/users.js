const fs = require('fs');
let userData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));


exports.getAllUser = (req, res) => {
    res.status(200).json(JSON.stringify(userData));
}