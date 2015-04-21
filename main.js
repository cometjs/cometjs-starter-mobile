Meteor.startup (function () {
  // Example: WebApp.addHtmlAttributeHook( function (request) { return {'lang' : 'pt-BR', 'dir' : 'ltr'} });
  WebApp.addHtmlAttributeHook( function (request) { return {'lang' : '', 'dir' : ''} });
});