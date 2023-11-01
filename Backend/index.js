const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pdf = require("html-pdf");
const multer = require("multer");
const nodemailer = require("nodemailer");
const { } = require("mongodb");
const { connectToDb, getDb } = require("./mongodb");
const fs = require("fs");

// Init
const port = 8085;
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Povezivanje sa bazom podataka.
let database;
connectToDb((err) => {
  if (!err) {
    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
    database = getDb();
  }
});

// Rute za kategorije
app.get('/api/categories', (req, res) => {
  database.collection('categories').find().toArray().then((data) => {
    res.send(data);
  }).catch((error) => console.log(error));
});
app.get('/api/categories/:id', (req, res) => {
  if (req.params.id) {
    database.collection('categories').findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    }).catch((error) => console.log('Node error while fetching specified doc: ', error));
  } else {
    console.log('Error occured in _id param.');
  }
});
app.post('/api/categories/add', (req, res) => {
  database.collection('categories').insertOne(req.body).then((data) => {
    res.send(data);
  }).catch((error) => console.log('Post error node: ', error));
});
app.put('/api/categories/update/:id', (req, res) => {
  let updates = { ...req.body, _id: req.params.id };
  if (req.params.id) {
    database.collection('categories').updateOne({ _id: req.params.id }, { $set: updates }).then((data) => {
      res.send(data);
    }).catch((error) => console.log('Node error when updating a doc: ', error));
  } else {
    console.log('Error occured in _id param.');
  }
});
app.delete('/api/categories/delete/:id', (req, res) => {
  if (req.params.id) {
    database.collection('categories').findOne({ _id: req.params.id }).then((data) => {
      fs.unlink(`../Frontend/src/${data.image}`, (err) => {
        if (err) {
          console.log('Error when removing image in delete request: ', err);
        } else {
          database.collection('categories').deleteOne({ _id: req.params.id }).then((data) => {
            res.send(data);
          }).catch((error) => console.log("Node error while deleting a doc: ", error));
        }
      });
    });
  } else {
    console.log('Error occured in _id param');
  }
});
const storage = multer.diskStorage({
  destination: '../Frontend/src/assets/categories',
  filename: (req, file, cb) => {
    let unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
    cb(null, unique + '.' + file.mimetype.split('/')[1]);
  }
});
const upload = multer({ storage: storage });
app.post('/api/categories/image-upload', upload.single('file'), (req, res) => {
  res.send({ data: req.file.filename });
});
///////////////////////////////////////////////////////////////////////////////////

// Rute za Inventory(Products)
// database.collection('products')
app.get('/api/products', (req, res) => {
  database.collection('products').find().toArray().then((data) => {
    res.send(data);
  }).catch((error) => console.log('Error when sending GET to products: ', error));
});
app.post('/api/products/add', (req, res) => {
  database.collection('products').insertOne(req.body).then((data) => {
    res.send(data);
  }).catch((error) => console.log('Error when sending POST to products: ', error));
});
app.delete('/api/products/delete/:id', (req, res) => {
  if (req.params.id) {
    database.collection('products').findOne({ _id: req.params.id }).then((data) => {
      for (let i in data.images) {
        fs.unlink(`../Frontend/src/${data.images[i]}`, (err) => {
          if (err) {
            console.log('Error when removing images of product: ', err);
          }
        });
      }
      database.collection('products').deleteOne({ _id: req.params.id }).then((data) => {
        res.send(data)
      }).catch((err) => console.log('Error when deleting single doc in products: ', err))

    });
  }
});
app.put('/api/products/update/:id', (req, res) => {
  let updates = { ...req.body, _id: req.params.id }
  if (req.params.id) {
    database.collection('products').updateOne({ _id: req.params.id }, { $set: updates }).then((data) => {
      res.send(data);
    }).catch((error) => console.log('Error when sending PUT to products: ', error));
  }
});

const productsStorage = multer.diskStorage({
  destination: '../Frontend/src/assets/products',
  filename: (req, file, cb) => {
    let unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, unique + '.' + file.mimetype.split('/')[1])
  }
});
const productsUpload = multer({ storage: productsStorage });
app.post('/api/products/images', productsUpload.array("files"), (req, res) => {
  let modFiles = [];
  for (let file of req.files) {
    modFiles.push(`assets/products/${file.filename}`);
  }
  res.send(modFiles);
});


// Routes for users.
app.get('/api/users', (req, res) => {
  database.collection('users').find().toArray().then((data) => {
    res.send(data);
  }).catch((error) => console.log('Node error when sending GET to users collection: ', error));
});

app.post('/api/users/post', (req, res) => {
  database.collection('users').insertOne(req.body).then((data) => {
    res.send(data);
  }).catch((error) => console.log('Node error when sending POST to users collection: ', error));
});

app.put('/api/users/put/:id', (req, res) => {
  const updates = { ...req.body, _id: req.params.id };
  if (req.params.id) {
    database.collection('users').updateOne({ _id: req.params.id }, { $set: updates }).then((data) => {
      res.send(data);
    }).catch((error) => console.log('Node error when sending PUT to users collection: ', error));
  }
});

app.delete('/api/users/delete/:id', (req, res) => {
  if (req.params.id) {
    database.collection('users').deleteOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    }).catch((error) => console.log('Node error when sending DELETE to users collection: ', error));
  }
});

// ORDERS SECTION: Routes
app.get('/api/orders', (req, res) => {
  database.collection('orders').find().toArray().then((data) => {
    res.send(data);
  }).catch((error) => console.log('Node error when sending GET to orders collection: ', error));
});

app.post('/api/orders/post', (req, res) => {
  database.collection('orders').insertOne(req.body).then((data) => {
    res.send(data);
  }).catch((error) => console.log('Node error when sending POST to orders collection: ', error));
});

app.put('/api/orders/put/:id', (req, res) => {
  const updates = { ...req.body, _id: req.params.id };
  if (req.params.id) {
    database.collection('orders').updateOne({ _id: req.params.id }, { $set: updates }).then((data) => {
      res.send(data);
    }).catch((error) => console.log('Node error when sending PUT to orders collection: ', error));
  }
});

app.delete('/api/orders/delete/:id', (req, res) => {
  if (req.params.id) {
    database.collection('orders').deleteOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    }).catch((error) => console.log('Node error when sending DELETE to orders collection: ', error))
  }
});
// ORDERS SECTION: Sending email to customer.
app.post('/api/send-email', (req, res) => {
  // Konstante sa vrednostima iz req.body.

  // Pdf dimenzije (konstanta "options");

  // Html za sadrzaj pdf predracuna u mejlu (konstanta "html").

  // Kreiranje pdf predracuna - pdf.create(html, options).toFile(itd...).
});



// Proba
app.get('/api/delivery-service', (req, res) => {
  database.collection('deliveryservice').find().toArray().then((data) => {
    res.send(data);
  }).catch((err) => console.log('Node error when sending GET to deliveryservice collection.', err));
});
app.post('/api/delivery-service/post', (req, res) => {
  database.collection('deliveryservice').insertOne(req.body).then((data) => {
    res.send(data);
  }).catch((err) => console.log('Node error when sending POST to deliveryservice collection.', err));
});
// --------

app.get('/api/products/:id', (req, res) => {
  if (req.params.id) {
    database.collection('products').findOne({ _id: req.params.id }).then((data) => {
      res.send(data);
    }).catch((error) => console.log('Node error while fetching specified doc: ', error));
  } else {
    console.log('Error occured in _id param.');
  }
});