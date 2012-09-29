<?php

/**
 * Definition and configuration of the silex application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

use Company\Controller\EmployeeControllerProvider;

use Silex\Application;
use Silex\Provider\DoctrineServiceProvider;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

// Instantiate the silex application
$app = new Application();

// Set debug mode
$app['debug'] = false;

// Register doctrine DBAL provider
$app->register(new DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'    => 'pdo_mysql',
        'host'      => 'localhost',
        'dbname'    => 'company',
        'user'      => 'root',
        'password'  => '',
    )
));

// Define routes
$app->get('/', function() use ($app) {
   return new Response('Main API route', 200);
});

$app->get('/error', function() use ($app) {
   throw new Exception('', 503);
});

// Mount routes
$app->mount('/employee', new EmployeeControllerProvider());

// Define error handler: not-found exception
$app->error(function (NotFoundHttpException $e) use ($app) {
    if (true === $app['debug']) {
        return;
    }

    return new Response('', 404);
});

// Define error handler: all other exceptions
$app->error(function (\Exception $e) use ($app) {
    if (true === $app['debug']) {
        return;
    }

    return new Response('', $e->getCode() ?: 500);
});

// Return the silex application
return $app;
