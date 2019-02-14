let mongoose = require('mongoose');

// create a model class
let favouriteSchema = mongoose.Schema({
    name: String,
    description: String
},
{
   // collection: "favouriteThings"
   collection: "projects"
});
                                                                                        
module.exports = mongoose.model('sidharth', favouriteSchema);