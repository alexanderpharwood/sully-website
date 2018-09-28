
function ErrorController(){

    this['404'] = function () {

        return Sully.renderView({

            template: template = Sully.getViewTemplate("404"),

            viewDidLoad: function () {

            }

        });

    }

}

Sully.registerController('error', new ErrorController());
