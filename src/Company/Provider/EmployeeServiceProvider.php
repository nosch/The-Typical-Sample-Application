<?php

/**
 * Service provider class for the employee resources
 *
 * @author Norbert Schmidt <norb.schmidt@gmail.com>
 */

namespace Company\Provider;

use Silex\Application;
use Silex\ServiceProviderInterface;

class EmployeeServiceProvider implements ServiceProviderInterface
{
    /**
     * Registers services on the given app.
     *
     * @param Application $_app An Application instance
     */
    public function register(Application $_app)
    {
        $_app['employeeService.getAll'] = function() use ($_app) {
            return $this->_getAll(
                $_app['request']->query->all(),
                $_app['db']
            );
        };

        $_app['employeeService.getOne'] = function() use ($_app) {
            return $this->_getOne(
                $_app['request']->get('id'),
                $_app['db']
            );
        };
    }

    /**
     * Bootstraps the application.
     *
     * @param  Application $_app An Application instance
     */
    public function boot(Application $_app)
    {
    }

    /**
     * Gets all employees from database.
     *
     * @param  Doctrine\DBAL\Connection $_db An Doctrine DBAL Connection instance
     * @param  array $_params The request params
     * @return array The results from a database query
     *
     * @todo Check parameters from REQUEST
     * @todo Error handling
     */
    protected function _getAll($_params, $_db)
    {
        $employees = $_db->createQueryBuilder()
            ->select('e.*', 'd.name as "department"')
            ->from('company_employees', 'e')
            ->leftJoin('e', 'company_departments', 'd', 'e.department_id = d.id')
            ->setFirstResult(0)
            ->setMaxResults(5)
            ->execute();

        return $employees->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * Get one employee by id from database.
     *
     * @param  Doctrine\DBAL\Connection $_db An Doctrine DBAL Connection instance
     * @param  array $_id The id of an employee
     * @return array The result from a database query
     *
     * @todo Check parameters from REQUEST
     * @todo Error handling
     */
    protected function _getOne($_id, $_db)
    {
        $employees = $_db->createQueryBuilder()
            ->select('e.*', 'd.name as "department"')
            ->from('company_employees', 'e')
            ->leftJoin('e', 'company_departments', 'd', 'e.department_id = d.id')
            ->andWhere('e.id = :id')
            ->setParameters(array(
                'id' => $_id
            ))
            ->execute();

        return $employees->fetchAll(\PDO::FETCH_ASSOC);
    }
}
