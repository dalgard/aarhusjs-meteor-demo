// Create new SubsManager if it doesn't exists
if (typeof AjsSubs === "undefined")
  AjsSubs = new SubsManager;


// Reusable properties for routes
AjsMessagesController = RouteController.extend({
  waitOn: function () {
    return AjsSubs.subscribe("messages");
  },

  fastRender: true
});


Router.route("/", {
  name: "ajsMessages",  // Name of route and default template
  controller: AjsMessagesController,

  // Context for template
  data: function () {
    // Collection cursor that can be iterated over
    return AjsMessages.find();
  }
});


Router.route("/:_id", {
  name: "ajsMessagesDetails",
  controller: AjsMessagesController,

  data: function () {
    return AjsMessages.findOne(this.params._id);
  }
});
