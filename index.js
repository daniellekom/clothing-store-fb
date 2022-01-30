
const {
    initializeApp,
    applicationDefault,
    cert,
  } = require("firebase-admin/app");
  const {
    getFirestore,
    Timestamp,
    FieldValue,
  } = require("firebase-admin/firestore");
  
  // import credentials "./" means my own file
  const credentials = require("./credentials.json");
  
  //connect to firebase
  initializeApp({
    credential: cert(credentials),
  });
  
  //connect to firestore
  const db = getFirestore();

  //create a variable

  const storeProducts = db.collection("products")
  const storeCustomers = db.collection("customers")
  const storeOrders =db.collection("orders")

  //create a new customer

  storeOrders.doc('200')
  .set({
  "trackingNumber": "12345",
  "orderDate":"January 5th 2022",
  "deliveryDate":"January 10 2022",
  "totalAmount":120,
  "paymentType":"credit card",
  "productsArray": [{"price":40, "productId":"1","qty":2,"subtotal":80},{"price":40,"productId":"2","qty":1,"subtotal":40}],
  "custId":"100"

  })
  .then(()=>{
        console.log('Added order')
     }).catch(console.error)




// read an order info for clothing store

storeOrders
.doc("200")
.get()
.then((doc) => {
  console.log(doc.id, " => ", doc.data());
})
.catch(console.error);


 // read a collection 
storeCustomers.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  })
  .catch(console.error)


  // update and add field in your collection


const products = db.collection('products')
products.doc('1').update({brand:'louis vuitton', inStock:20})