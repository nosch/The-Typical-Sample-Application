<?php

/**
 * Definition and configuration of the silex application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

use Company\Controller\EmployeeControllerProvider;

use Silex\Application;
use Silex\Provider\MonologServiceProvider;
use Silex\Provider\DoctrineServiceProvider;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

// Instantiate the silex application
$app = new Application();

// Set debug mode
$app['debug'] = false;

// Register Monolog logger
$app->register(new MonologServiceProvider(), array(
    'monolog.logfile' => __DIR__ . '/../log/application.log',
    'monolog.name' => 'CompanyAPI'
));

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
// Test index route
$app->get('/index', function() use ($app) {
   return new Response('Main API route', 200);
});

// Test exception route
$app->get('/error', function() use ($app) {
   throw new \Exception('', 503);
});

// Test post route
$app->post('/post', function() use ($app) {
    if (!$app['request']->get('param')) {
        throw new \Exception('', 501);
    }

    return $app->json(array(
        'postData' => array(
            'yourParam' => $app['request']->get('param')
        )
    ));
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
