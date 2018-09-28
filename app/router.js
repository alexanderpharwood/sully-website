/**
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
