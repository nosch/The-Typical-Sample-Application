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
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\HttpKernelInterface;
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

// Parse and decode request body, if content-type is application/json
$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);

        $request->request->replace(is_array($data) ? $data : array());
    }
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
