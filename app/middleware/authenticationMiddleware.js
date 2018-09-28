/**
 * Register a controller.
 * @param string Controller name
 * @param object The controller -- an object of methods.
 */

 function authenticationMiddleware(){

         this.run = function (request) {

             console.log('Authentication middleware');

         }

 }

Sully.registerMiddleware('authentication', new authenticationMiddleware());
