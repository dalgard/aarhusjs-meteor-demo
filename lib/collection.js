// Create collection on server and client
AjsMessages = new Mongo.Collection("messages");


// Attach schema used for validating documents
AjsMessages.attachSchema(new SimpleSchema({
  "sender": {
    type: String
  },

  "board": {
    type: String,
    allowedValues: [
      "Cool",
      "Uncool"
    ]
  },

  "message": {
    type: String
  }
}));


// Collection behaviours
AjsMessages.timestampable();
AjsMessages.softRemovable();
AjsMessages.trackable("board");


AjsMessages.allow({
  insert: function (user_id, doc) {
    // Always allow inserts
    return true;
  }
});
