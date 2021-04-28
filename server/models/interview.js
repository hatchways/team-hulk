let mongoose = require("mongoose");

let Interview = new mongoose.Schema(
  {
    owner: {
      type: mongoose.ObjectId,
      required: true,
      ref: "users",
    },
    guest: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    date: {
      type: Date,
      required: true,
    },
    theme: {
      type: String,
    },
    questions: {
      type: [mongoose.ObjectId],
    },
    isFinished: {
      type: Boolean,
      default: false,
    },
    difficulty: {
      type: Number,
      enum: [0, 1, 2, 3, 4], // 0 - Beginer, 1 - Junior, 2 - Intermediate, 3 - Senior, 4 - Expert
      required: true,
    },
  },
  {
    collection: "interviews",
  }
);

module.exports = mongoose.model("Interview", Interview);
// let mongoose = require("mongoose");

// let Interview = new mongoose.Schema(
//     {
//         participants: {
//             type: [mongoose.ObjectId],
//             required: true
//         },
//         date: {
//             type: Date,
//             required: true
//         },
//         theme: {
//             type: String
//         },
//         questions: {
//             type: [mongoose.ObjectId]
//         },
//         isFinished: {
//             type: Boolean,
//             default: false
//         },
//         difficult: {
//             type: Number,
//             enum: [0, 1, 2, 3, 4], // 0 - Beginer, 1 - Junior, 2 - Intermediate, 3 - Senior, 4 - Expert
//             required: true
//         }
//     },
//     {
//         collection: "interviews"
//     }
// );

module.exports = mongoose.model("Interview", Interview);