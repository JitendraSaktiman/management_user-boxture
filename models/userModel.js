// const mongoose = require('mongoose')
// const uuid = require('uuid');
// const userSchema = new mongoose.Schema({

//     id: {
//         type: uuid
//     },
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     age: {
//         type: Number,
//         required: true,
//         trim: true
//     },
//     hobbies: {
//         type:  [String],
//     },

// }, { timestamps: true })


// module.exports = mongoose.model("User", userSchema);


const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  hobbies: {
    type: [String],
    default: [],
    required: true,
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
