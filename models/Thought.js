const { Schema, model } = require("mongoose");
const ReactionSchema = require("./Reaction");
const dateFormat = require("../utils/date-fns");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdTime: {
      type: Date,
      default: Date.now,
      get: (date) => dateFormat(date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  // we need to tell the schema that it can use virtuals & getters
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of thoughts on retrieval
ThoughtSchema.virtual("reactionsCount").get(function () {
  return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// export the Thought model
module.exports = Thought;
