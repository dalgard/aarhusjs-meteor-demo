Meteor.publish("messages", function () {
  // Publish all documents in messages collection
  return AjsMessages.find();
});
