/**
 * Register a controller.
 * @param string Controller name
 * @param object The controller -- an object of methods.
 */

 function IndexController(){

         this.constructor = function(request){

         }

         this.index = function (request) {

             return Sully.serveView("index");

         }

         this.gettingStarted = function (request) {

             return Sully.serveView("getting-started", null, function(){
                 PR.prettyPrint();
             });

         }

         this.code = function (request) {

             return Sully.serveView("code");

         }

         this.docs = function (request) {

             var template;

             console.log(request.feature);


             switch(request.feature){

                 case "":

                 template = Sully.getView("docs").buildView();

                 break;

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

                 case "server-config":

                 template = Sully.getView("docs-server-config").buildView();

                 break;

                 case "build-json":

                 template = Sully.getView("docs-build-json").buildView();

                 break;

                 default:

                 template = Sully.getView("404").buildView();

                 break;
             }

             return Sully.renderView(template, function(){
                 PR.prettyPrint();
             });

         }

 }

Sully.registerController('index', new IndexController());
