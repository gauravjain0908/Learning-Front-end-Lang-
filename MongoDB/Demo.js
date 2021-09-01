// Insert data in mongo db
//common abbreviation in MongoDB

// 1. gt - greater than 
// 2. lt - less than 
// 3. gte - greater than or equal to 


//use gauravKart


// To find the database
db.items.find()

db.items.insertOne({
    // name:"Samsung", price:2000, rating:4.5, qty:233})
    name:"RealMe", price:1000, rating:4.1, qty:24})

db.items.insertMany([{name:
    "Micromax", price:1000, rating:4.1, qty:23},  
    {name:"Apple", price:100000, rating:5, qty:2325},
    {name:"RealMe", price:1000, rating:4.1, qty:24}])

// Want To ADD Another Data items
db.anotherCollection.insertOne({a:56})

// Making a New database
use newDb  // newDb is the name of database that 


// How to search data in MongoDB 
// This query will give all the object with rating 4.5

db.items.find({rating: 4.5}) //{rating: 4.5} is called filter object is filter all object whose rating grater than or equal to 4.5
db.items.find({rating: {$gte:4.5}})

//And Operator It gives 
db.items.find({rating: {$gt:4.5}, price:{$gt:4000}})

db.items.find({rating: {$lt:4.5}, price:{$gt:4000}})

// OR Operator :- It will give me all object whose rating is less than 4.5 and price greater than 4000
db.items.find({

    $or:[{rating: {$lt:4.5}}, {price:{$gt:4000}}]})

// In this it will give me all rating which is less than 4.5
db.items.find({

    $or:[{rating: {$lt:4.5}}, {price:{$gt:4000}}, {rating: 1}]})


 //Delete items from MongoDb database
//It will delete the matching entry and delete one entry in multi document match
 db.items.deleteOne({price:1000})


 // All documents delete
 db.items.deleteMany({price:1000})

//How to update the data single in MongoDB
db.items.updateOne({name:"Micromax"}, {$set:{price:500}})

//update multiple data
db.items.updateMany({name:"Micromax"}, {$set:{price:500, rating:1}})
























