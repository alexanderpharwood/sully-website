(function(){/**
 * Sully routeProvider
 * Note: all routes should have a preceding slash.
 */


/**
 * Register the controller and method to use when a route is not found (404).
 * @param string Controller name
 * @param string Method name
 */
Sully.registerNotFound('error', '404');

/**
 * Register a route
 * Routes will be matched in the order they are set.
 * @param string Route URI
 * @param string Controller name
 * @param string Method name
 */

Sully.registerRoute({
    name: 'index',
    route: '/',
    controller: 'index',
    method: 'index',
    middleware: ['authentication']
});

Sully.registerRoute({
    name: 'getting-started',
    route: '/getting-started',
    controller: 'index',
    method: 'gettingStarted'
});

Sully.registerRoute({
    name: 'docs',
    route: '/docs{}',
    controller: 'index',
    method: 'docs'
});

Sully.registerRoute({
    name: 'docs',
    route: '/docs/{feature}',
    controller: 'index',
    method: 'docs'
});
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
Sully.registerView('404', '{{view:header}}<div id="view-404" class="row">    <div class="landing-center text-center">        <h1 class="text-white"><i>Woops!</i></h1>        <h4 class="text-white">We couldn&apos;t find that (404).</h4>    </div></div>');

Sully.registerView('header', '<!-- Navigation --><nav class="navbar navbar-expand-lg navbar-dark text-white fixed-top">  <div class="container">    <a class="navbar-brand" href="/">        <img class="brand" src="app/assets/images/logo-white.svg">    </a>    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">      <span class="navbar-toggler-icon"></span>    </button>    <div class="collapse navbar-collapse" id="navbarResponsive">      <ul class="navbar-nav ml-auto">        <li class="nav-item">          <a class="nav-link" href="/getting-started">Getting started</a>        </li>        <li class="nav-item">          <a class="nav-link" href="/docs">Documentation</a>        </li>      </ul>    </div>  </div></nav>');

Sully.registerView('footer', '<footer class="sully footer">    <div class="sully flex-row text-center">        <div class="sully col">            <p class="text-center text-light">                <a href="contact">CONTACT</a>                &nbsp;|&nbsp;                <a href="submissions">SUBMISSIONS</a>                <br>                <br>                <small>© 2018 COPYRIGHT - ALL RIGHTS RESERVED</small>            </p>          </div>    </div></footer>');

Sully.registerView('index', '{{view:header}}<div id="view-index" class="row">    <div class="landing-center text-center">        <img class="landing-logo" src="app/assets/images/logo-white.svg">        <p>A tiny yet ambitious framework for building applications in JavaScript.</p>        <pre class="npm">$ npm i sully -g</pre>        <a href="/getting-started" class="btn btn-outline-light">Getting started</a>    </div></div>');

Sully.registerView('about', '{{view:header}}<div id="view-about" class="sully flex-row">    <div class="sully col gutters-auto">        <h1 class="sec-header text-center">ABOUT</h1>        <hr>        <p>            TO VÉRA is a literary journal which focuses on writers without representation            or a large presence within the publishing industry.            <br>        </p>        <p>            Our aim is to give talented writers a voice and a chance to build their portfolio.            <br>        </p>    </div></div>{{view:footer}}');

Sully.registerView('docs', '{{view:header}}<div class="page-content">    <div id="view-docs" class="container">        <div class="row">            <div class="col-sm">                <h1>Documentation</h1>                <hr>            </div>        </div>        <div class="row">            {{view:docs-sidebar}}            <div class="col-sm">                <h3>Introduction</h3>                <p>This is an introduction.</p>            </div>        </div>    </div></div>');

Sully.registerView('docs-sidebar', '<div class="col-sm-3">    <ul class="docs-sidebar">        <li>            <a href="/docs">Introduction</a>        </li>        <li>            <a href="/docs/cli">CLI tool</a>        </li>        <li>            <a href="/docs/controllers">Controllers</a>        </li>        <li>            <a href="/docs/middleware">Middleware</a>        </li>        <li>            <a href="/docs/routing">Routing</a>        </li>        <li>            <a href="/docs/views">Views</a>        </li>        <li>            <a href="/docs/request-object">Request object</a>        </li>        <li>            <a href="/docs/init-method">Init method</a>        </li>    </ul></div>');

Sully.registerView('docs-controllers', '{{view:header}}<div class="page-content">    <div id="view-docs-controllers" class="container">        <div class="row">            <div class="col-sm">                <h1>Documentation</h1>                <hr>            </div>        </div>        <div class="row">            {{view:docs-sidebar}}            <div class="col-sm">                <h3>Controllers</h3>                <p>Your controllers will handle most of your logic. Here&apos;s an example:</p><pre class="prettyprint">function IndexController(){<br>    <br>    this.constructor = function(request){<br>        <br>    }<br><br>    this.index = function (request) {<br><br>    //Some data manipulation<br>    <br>        return Sully.renderView({<br>            view: Sully.getViewTemplate("index"),<br>            data: request,<br>            viewDidLoad: function () {<br>                <br>                //Some DOM manipulation<br>                <br>            }<br>        });<br><br>    }<br>}<br><br>Sully.registerController(&apos;index&apos;, new IndexController());<br></pre>            <p>This is a barebones controller. It will receive a call to its index method,                and render a view for the user.                This might, for example, be the landing page of your application.</p>            </div>        </div>    </div></div>');

Sully.registerView('docs-cli', '{{view:header}}<div class="page-content">    <div id="view-docs-controllers" class="container">        <div class="row">            <div class="col-sm">                <h1>Documentation</h1>                <hr>            </div>        </div>        <div class="row">            {{view:docs-sidebar}}            <div class="col-sm">                <h3>The CLI tool</h3>                <p><b>Creating a new project</b></p>                <pre class="prettyprint lang-bash">$ sully new &lt;project-name&gt; &lt;template&gt;</pre>                <p>The new command will pull a project template and extract it and ensure you are all ready to go.                We reccomend using "starter" (without the quotes) as your template; however, you can pop any url in here                which points to a Sully template (zipped).</p>                <p><b>Building a project</b></p>                <pre class="prettyprint lang-bash">$ sully build &lt;options&gt;</pre>                <p>The build command will compile your controllers, middleware, and views. The "--prod" flag is optional,                    and will minify and compile the build to your specified production location. If the "--prod" flag is not specified,                the build will not be minified and will be compiled to your specified development location.</p>            </div>        </div>    </div></div>');

Sully.registerView('docs-middleware', '{{view:header}}<div class="page-content">    <div id="view-docs-middleware" class="container">        <div class="row">            <div class="col-sm">                <h1>Documentation</h1>                <hr>            </div>        </div>        <div class="row">            {{view:docs-sidebar}}            <div class="col-sm">                <h3>Middleware</h3>                <p>The middleware run nethod is called before your controller. It&apos;s a convenient way to handle things like                    authentication and permissions:<pre class="prettyprint">function AuthenticationMiddleware(){<br><br>        this.run = function (request) {<br><br>            if (!User.authenticated){<br>                return Sully.routeTo(&apos;/login&apos;);<br>            }<br><br>            if (!User.canAccess(request.id)){<br>                return Sully.routeTo(&apos;/dashboard&apos;);<br>            }<br>        }<br><br>}<br><br>Sully.registerMiddleware(&apos;authentication&apos;, new AuthenticationMiddleware());</pre>                    <p>Middleware classes should have only one invocable method -- run.</p>            </div>        </div>    </div></div>');

Sully.registerView('docs-views', '{{view:header}}<div class="page-content">    <div id="view-docs-middleware" class="container">        <div class="row">            <div class="col-sm">                <h1>Documentation</h1>                <hr>            </div>        </div>        <div class="row">            {{view:docs-sidebar}}            <div class="col-sm">                <h3>Views</h3>                <p><b>Basic views</b></p>                <p>Your views are html template files:</p><pre class="prettyprint">&lt;div class="row"&gt;<br>    &lt;div class="col-md-6"&gt;<br>        &lt;p>Some content...&lt;/p&gt;<br>    &lt;/div&gt;<br>    &lt;div class="col-md-6"&gt;<br>        &lt;p&gt;Some more content...&lt;/p&gt;<br>    &lt;/div&gt;<br>&lt;/div&gt;</pre>                <p><b>Partials</b></p>                <p>Other views can be included as partials like this:</p><pre class="prettyprint">&lbrace;&lbrace;view:header&rbrace;&rbrace;</pre>                <p><b>Building & rendering views</b></p>                <p>The below method will return a raw template.</p><pre class="prettyprint">var raw = Sully.getView("index");</pre>                <p>Now you have a few options. If you are using something like Moustache or Handlebars                you can do your parsing here.</p>                <p>But Sully, of course, comes with a built in view builder:</p><pre class="prettyprint">var data = {<br>    someContent: "This is some content...",<br>    someMoreContent: "This is some more content..."<br>}<br><br>var built = Sully.buildView(raw, data);</pre>                <p>To make this quicker, you can attach the buildView method to the getView method like so:<pre class="prettyprint">var built = Sully.getView("index").buildView(data);</pre>                <p>You can insert data into a view like so:</p><pre class="prettyprint">&lt;div class="row"&gt;<br>    &lt;div class="col-md-6"&gt;<br>        &lt;p>&lbrace;&lbrace;someContent&rbrace;&rbrace;&lt;/p&gt;<br>    &lt;/div&gt;<br>    &lt;div class="col-md-6"&gt;<br>        &lt;p&gt;&lbrace;&lbrace;someMoreContent&rbrace;&rbrace;&lt;/p&gt;<br>    &lt;/div&gt;<br>&lt;/div&gt;</pre>                <p>You can now render the built template to the dom:</p><pre class="prettyprint">return Sully.renderView(built, function () {<br><br>}, true);<br></pre>            <p>The first parameter is the pre-built view (data inserted, partials rendered, etc.). The second parameter is            a function which will fire after the view has safely been loaded into the DOM. Any dom manipulation you wish            to perform should be done here. The third parameter is whether or not to scroll back to the top of the window            when the view is rendered. The first is the only required parameter, and the third will default to true.</p>            <p>There is an alias available to call getView, buildView, and renderView - all in one:</p><pre class="prettyprint">return Sully.serveView("index", data, function () {<br><br>}, true);<br></pre>            <p>The renderView and serveView methods share some parameters. The second parameter here, however, is the data for building the view. Also, serveView expects a view&apos;s                name as its first parameter, wheras renderView expects a pre-build view. The first is the only required parameter.</p>            </div>        </div>    </div></div>');

Sully.registerView('docs-routing', '{{view:header}}<div class="page-content">    <div id="view-docs-middleware" class="container">        <div class="row">            <div class="col-sm">                <h1>Documentation</h1>                <hr>            </div>        </div>        <div class="row">            {{view:docs-sidebar}}            <div class="col-sm">                <h3>Routing</h3>                <p><b>A basic route</b></p>                    <p>Your router will decide where requests to your application are sent. Here is a basic root registration:</p><pre class="prettyprint">Sully.registerRoute({<br>    name: &apos;index&apos;,<br>    route: &apos;/&apos;,<br>    controller: &apos;index&apos;,<br>    method: &apos;index&apos;,<br>});<br></pre>                <p>The route "/" will be the landing/home page of your application.</p>                <p><b>Adding parameters</b></p>                <p>You may need a url which contains parameters, for example https://example.com/book/31.                    This should be defined like so:</p><pre class="prettyprint">Sully.registerRoute({<br>    name: &apos;book&apos;,<br>    route: &apos;/book/{id}&apos;,<br>    controller: &apos;book&apos;,<br>    method: &apos;show&apos;,<br>});<br></pre>            <p>The request object in your controller will look like this:<pre class="prettyprint">{ id : "31" }</pre>            <p>For more information on the request object, see the <a href="/docs/request-object">request object docs</a>.</p>            <p><b>Redirects and programatic routing</b></p>                <p>You can redirect a request like this. Note that when redirecting from a controller you should return the redirect                to stop the script from continuing.</p><pre class="prettyprint">return Sully.routeTo("/dashboard");</pre>            <p>If you want to get the route by name, you can access it through the routeProvider:</p><pre class="prettyprint">var route = Sully.routeProvider.dashboard.route;<br>//or<br>var route = Sully.routeProvider["dashboard"].route;</pre>            <p><b>Adding middleware</b></p>            <p>There might be, for example, an area only authenticated users should be able to access, in which case it would be appropriate                to add a middleware to the route:</p><pre class="prettyprint">Sully.registerRoute({<br>    name: &apos;dashboard&apos;,<br>    route: &apos;/dashboard&apos;,<br>    controller: &apos;dashboard&apos;,<br>    method: &apos;index&apos;,<br>    middleware: [&apos;authenticated&apos;],<br>});<br></pre class="prettyprint">            <p>Each element in the middleware array will be run - in that order - before the controller method or the controller&apos;s constructor.            For more information on middleware, see the <a href="/docs/middleware">middleware docs</a>.</p>            <p><b>Handling errors</b></p>            <p>Sully is a client side framework, so we cannot return http responses. We can, however, display an approptiate message to the user.            The starter project comes with an error controller and a 404 method. Your router should contain a line like this:</p><pre class="prettyprint">Sully.registerNotFound(&apos;error&apos;, &apos;404&apos;);</pre>            <p>The first parameter is the controller and the second is the method. Sully will automatically invoke the given controller method            when a route is requested which does not exist. Any additional error routes - to represent a 403, for example - should be registered            in the conventionl way - to which you can manually redirected the user from a controller or middleware.</p>            <p><b>HTML5 vs hashtag routing</b></p>            <p><b>Query data</b></p>            <p>The use of query data is only supported in HTML5 routing.</p>            <p><b>Configuring your server</b></p>            <p>There are some slight serverside tweaks needed to use the router. If you are using Apache, we provide you with a suitable .htaccess file.            But a similar thing can be configured in nginx or node or whatever server you choose. The idea is simply to point all request, except to            scripts and images, etc., to your index.html, where the Sully router will take over.</p>            </div>        </div>    </div></div>');

Sully.registerView('docs-request', '{{view:header}}<div class="page-content">    <div id="view-docs-request" class="container">        <div class="row">            <div class="col-sm">                <h1>Documentation</h1>                <hr>            </div>        </div>        <div class="row">            {{view:docs-sidebar}}            <div class="col-sm">                <h3>The request object</h3>                            </div>        </div>    </div></div>');

Sully.registerView('docs-init', '{{view:header}}<div class="page-content">    <div id="view-docs-init" class="container">        <div class="row">            <div class="col-sm">                <h1>Documentation</h1>                <hr>            </div>        </div>        <div class="row">            {{view:docs-sidebar}}            <div class="col-sm">                <h3>The init method</h3>            </div>        </div>    </div></div>');

Sully.registerView('getting-started', '{{view:header}}<div class="page-content">    <div id="view-docs" class="container">        <div class="row">            <div class="col-sm">                <h1>Getting started</h1>            </div>        </div>        <div class="row">            <div class="col-sm">                <p>Sully is a "WVC" (Whatever View Controller) framework. We make no assumptions about your data layer,                    whilst providing a structure for logic and templating.</p>            </div>        </div>        <hr>        <div class="row">            <div class="col-sm">                <h3>Creating a project</h3>            </div>        </div>        <div class="row">            <div class="col-sm">                <p>The CLI tool provides an interface for creating new Sully projects and compiling builds.                You can get it from npm:</p>                <pre class="prettyprint lang-bash">$ npm i sully -g</pre>                <p>Because the tool is only for creating and building projects, it&apos;s appropriate and more convenient to install it globally.</p>                <p>Please follow the <a href="/docs">docs</a> from here.</p>            </div>        </div>    </div></div>');

})();