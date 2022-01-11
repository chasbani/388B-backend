var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bookModel = new Schema({
    title: { type: String   },
    author: { type: String }
})
//export default mongoose.model('book', bookModel)
module.exports = mongoose.model('Book', bookModel)