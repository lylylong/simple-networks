const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/date-fns");

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent thought's _id field
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdTime: {
      type: Date,
      default: Date.now,
      get: (date) => dateFormat(date),
    },
  },
  // we need to tell the schema that it can use getters
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// create the Thought model using the ReactionSchema
// const Reaction = model("Reaction", ReactionSchema);

// export the ReactionSchema
module.exports = ReactionSchema;
