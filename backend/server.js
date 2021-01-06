
// require the use of express in the project
const express = require('express')
// use express
const app = express()
// run server on port:4000
const port = 4000
// require the use of cors to allow resources from mongo database
const cors = require('cors');
// require body parser to parse the incoming requests
const bodyParser = require('body-parser');
// require mongoose
const mongoose = require('mongoose');
// require path
const path = require('path');

// sends files from the server and is on port:4000
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())


// connection to Mongo Database using the URL
const fruitandvegConnectionString = 'mongodb+srv://g00359320:g00359320@cluster0.6uhnv.mongodb.net/fruitandveg?retryWrites=true&w=majority';
mongoose.connect(fruitandvegConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

// fruitandveg schema for the database
var fruitandvegSchema = new Schema({
  name:String,
  countryOfOrigin:String,
  image:String,
  productInfo:String
});

var FruitandvegType = mongoose.model("fruitandveg", fruitandvegSchema);
// this is the products array which is displayed in products.js file
app.get('/api/fruitandveg', (req, res)=>{
    FruitandvegType.find((err, data)=>{
    res.json(data);
  })
})

// returns the products with the specific ids
app.get('/api/fruitandveg/:id', (req, res)=>{
  console.log(req.params.id);

  // finds products by the id
  FruitandvegType.findById(req.params.id, (err, data) => {
    res.json(data);
  })
})

// finds a record by ID and updates its string
app.put('/api/fruitandveg/:id', (req, res)=>{
  console.log("Update product: "+req.params.id);
  console.log(req.body);

  FruitandvegType.findByIdAndUpdate(req.params.id,req.body, {new:true}, (err,data)=>{
    res.send(data);
  })
})

// deletes a specific product entry from the database
app.delete('/api/fruitandveg/:id', (req, res)=>{
  console.log(req.params.id);

  FruitandvegType.findByIdAndDelete({_id:req.params.id}, (err, data)=>{
    res.send(data);
  })
})

// returns the products entry details in the terminal
app.post('/api/fruitandveg', (req, res)=>{
  console.log('Product Recieved!');
  console.log(req.body.name);
  console.log(req.body.countryOfOrigin);
  console.log(req.body.image);
  console.log(req.body.productInfo);

  // adds a product entry to the database
  FruitandvegType.create({
    name:req.body.name,
    countryOfOrigin:req.body.countryOfOrigin,
    image:req.body.image,
    productInfo:req.body.productInfo
  });

  // prevents from duplication of entries
  res.send('Product Added');

})

// sends index.html file for all other requests
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
})

app.listen(port, () => {
  console.log(`You can find EcoEats at http://localhost:${port}`)
})