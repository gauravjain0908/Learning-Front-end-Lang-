var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gauravKart', {useNewUrlParser:true, useUnifiedTopology:true});

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

    console.log("We are Connected...");
});

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function()
{
    var greeting = this.name
    ? "Meow name is "+this.name
    : "I don't have a name";
    console.log(greeting);
}

var kitten = mongoose.model('gauravKitty', kittySchema)


var gauravkitty = new kitten({name:"Gaurav Jain"});
console.log(gauravkitty.name);
gauravkitty.speak();

gauravkitty.save(function (err, gauravkitty)
{
    if(err)return console.error(err);
    gauravkitty.speak();
})