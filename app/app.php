<?php
/**
 * Definition and configuration of the Silex application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

use Silex\Application;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

// Instantiate Silex application
$app = new Application();

// Set debug mode
$app['debug'] = false;

// Error route: NotFound error
$app->error(function (NotFoundHttpException $e, $code) use ($app) {
    if (true === $app['debug']) {
        return;
    }

    return $app->json(array('Page not found.'), $code);
});

// Error route: all other errors
$app->error(function (\Exception $e, $code) use ($app) {
    if (true === $app['debug']) {
        return;
    }

    return $app->json(array($e->getMessage()), $code);
});

// Return the Silex application
return $app;
