const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/date-fns");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please provide a valid email address!"],
    },
    // createdTime: {
    //   type: Date,
    //   default: Date.now,
    //   get: (createdAtVal) => dateFormat(createdAtVal),
    // },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  // we need to tell the schema that it can use virtuals
  {
    toJSON: {
      virtuals: true,
      //   getters: true,
    },
    id: false,
  }
);

// get total count of friends on retrieval
UserSchema.virtual("friendsCount").get(function () {
  return this.friends.length;
});

// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
