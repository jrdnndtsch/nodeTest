var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var snacksSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('snacks', snacksSchema);