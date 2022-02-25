const express = require('express');
const app = express();

const goods = [
    {id: 1, name: "good 1", price: 10},
    {id: 2, name: "good 2", price: 20},
    {id: 3, name: "good 3", price: 30},
    {id: 4, name: "good 4", price: 40},
    {id: 5, name: "good 5", price: 50},
    {id: 6, name: "good 6", price: 60},
    {id: 7, name: "good 7", price: 70},
    {id: 8, name: "good 8", price: 80},
    {id: 9, name: "good 9", price: 90},
    {id: 10, name: "good 10", price: 100},
];

app.get("/goods", function(req, res) {
    console.log(req.query.count)
    if(!req.query.count && !req.query.offset){
      res.send(goods);
    } else {
      const count = parseInt(req.query.count);
      const offset = parseInt(req.query.offset);
      res.send({ goods: goods.slice(offset, offset + count), count: goods.length });
    }
  })

  app.get('/goods/:id', function (req, res) {
    const idOfGood = parseInt(req.params.id);
    const good = goods.find((good) => good.id == idOfGood);
    if (!good) {
        res.status(404).send('error');
    }
    res.status(200).json(good);
  });

app.listen(3000, function() {
    console.log('Example app listenning on port 3000!');
})