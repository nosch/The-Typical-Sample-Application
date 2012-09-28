<?php
/**
 * Definition and configuration of the Silex application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

use Silex\Application;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

// Instantiate Silex application
$app = new Application();

// Set debug mode
$app['debug'] = false;

// Defining routes
$app->get('/', function() use ($app) {
   return new Response('Main API route', 200);
});

$app->get('/error', function() use ($app) {
   throw new Exception('', 503);
});

// Error handler: not-found exception
$app->error(function (NotFoundHttpException $e) use ($app) {
    if (true === $app['debug']) {
        return;
    }

    return new Response('', 404);
});

// Error handler: all other exceptions
$app->error(function (\Exception $e) use ($app) {
    if (true === $app['debug']) {
        return;
    }

    return new Response('', $e->getCode() ?: 500);
});

// Return the Silex application
return $app;
