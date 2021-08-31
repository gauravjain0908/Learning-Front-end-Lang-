// Insert data in mongo db
use gauravKart

db.items.insertOne({name:
"Samsung", price:2000, rating:4.5, qty:233})


db.items.insertMany([{name:
    "Micromax", price:1000, rating:4.1, qty:23},  
    {name:"Apple", price:100000, rating:5, qty:2325}])