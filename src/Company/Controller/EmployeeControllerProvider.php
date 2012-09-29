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

        // Route for a list of employees
        $controllers->get('/', function() use ($_app) {
            return $_app->json($_app['employeeService.getAll']);
        });

        // Route for a single employee
        $controllers->get('/{id}', function() use ($_app) {
            return $_app->json($_app['employeeService.getOne']);
        });

        return $controllers;
    }
}
