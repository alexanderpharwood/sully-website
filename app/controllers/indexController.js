/**
 * Register a controller.
 * @param string Controller name
 * @param object The controller -- an object of methods.
 */

 function IndexController(){

         this.constructor = function(request){

         }

         this.index = function (request) {

             // var view = Sully.getView("index").buildView({test: "Alex"});
             //
             // return Sully.renderView(view);
             //
             return Sully.serveView("index");

         }

         this.gettingStarted = function (request) {

             return Sully.serveView("getting-started", null, function(){
                 PR.prettyPrint();
             });

         }

         this.releases = function (request) {

             return Sully.serveView("releases");

         }

         this.docs = function (request) {

             var template;

             switch(request.feature){

                 case "controllers":

                 template = Sully.getView("docs-controllers").buildView();

                 break;

                 case "cli":

                 template = Sully.getView("docs-cli").buildView();

                 break;

                 case "middleware":

                 template = Sully.getView("docs-middleware").buildView();

                 break;

                 case "views":

                 template = Sully.getView("docs-views").buildView();

                 break;

                 case "routing":

                 template = Sully.getView("docs-routing").buildView();

                 break;

                 case "request-object":

                 template = Sully.getView("docs-request").buildView();

                 break;

                 case "init-method":

                 template = Sully.getView("docs-init").buildView();

                 break;

                 default:

                 template = Sully.getView("docs").buildView();

                 break;
             }

             return Sully.renderView(template, function(){
                 PR.prettyPrint();
             });

         }

 }

Sully.registerController('index', new IndexController());
