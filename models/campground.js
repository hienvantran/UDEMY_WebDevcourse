const mongoose = require('mongoose');

//SCHEMA SETUP
const CmapgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});

module.exports = mongoose.model('Campground', CmapgroundSchema);