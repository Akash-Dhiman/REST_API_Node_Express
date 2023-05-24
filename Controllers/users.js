
const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync("./data.json", 'utf-8')).users;


exports.staticFileRender = (req, res) => {
    res.status(200).json(JSON.stringify(jsonData));
}

exports.getUniqueProduct = (req, res) => {
    let id = +req.params.id;
    let uniqueProduct = jsonData.find(x => x.id === id);
    res.status(200).json(JSON.stringify(uniqueProduct));
}

exports.createProduct = (req, res) => {
    let productData = req.body;
    jsonData.push(productData);
    res.status(201).send(productData);
}

exports.replaceProduct = (req, res) => {
    let id = +req.params.id;
    // let data = req.body;
    let uniqueProduct = jsonData.findIndex(id => id === id);
    jsonData.slice(uniqueProduct, 1, { ...req.body, id });
    res.status(201).send(req.body);
}

exports.updateProduct = (req, res) => {
    let id = +req.params.id;
    let uniqueProduct = jsonData.findIndex(id => id === id);
    let product = jsonData[uniqueProduct]
    jsonData.slice(uniqueProduct, 1, { ...product, ...req.body });
    res.sendStatus(201).json(req.body);
}

exports.deleteProduct = (req, res) => {
    let id = +req.params.id;
    let productIndex = jsonData.findIndex(_id => _id == id);
    let deleteItem = json.slice(productIndex, 1);
    res.status(200).json(deleteItem);
}