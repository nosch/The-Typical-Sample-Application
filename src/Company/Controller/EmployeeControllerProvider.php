<?php

/**
 * Controller provider class for the employee resources.
 *
 * @author Norbert Schmidt <norb.schmidt@gmail.com>
 */

namespace Company\Controller;

use Company\Provider\EmployeeServiceProvider;

use Silex\Application;
use Silex\ControllerProviderInterface;

class EmployeeControllerProvider implements ControllerProviderInterface
{
    /**
     * Returns employee routes to connect to the given application.
     *
     * @param Application $_app An Application instance
     * @return ControllerCollection $controllers A ControllerCollection instance
     */
    public function connect(Application $_app)
    {
        $_app->register(new EmployeeServiceProvider());

        $controllers = $_app['controllers_factory'];

        // Route for CREATING one employee record
        $controllers->post('/', function() use ($_app) {
            return $_app->json($_app['employeeService.create']);
        });

        // Route for READING a list of employee records
        $controllers->get('/', function() use ($_app) {
            return $_app->json($_app['employeeService.read']);
        });

        // Route for READING one employee record
        $controllers->get('/{id}', function() use ($_app) {
            return $_app->json($_app['employeeService.readOne']);
        });

        // Route for UPDATING one employee record
        $controllers->put('/{id}', function() use ($_app) {
            return $_app->json($_app['employeeService.update']);
        });

        // Route for DELETING one employee record
        $controllers->delete('/{id}', function() use ($_app) {
            return $_app->json($_app['employeeService.delete']);
        });

        return $controllers;
    }
}
