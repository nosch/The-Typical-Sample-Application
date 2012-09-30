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
        $_app['employeeService.create'] = function() use ($_app) {
            return $this->_create(
                $_app['request']->get('data'),
                $_app['db']
            );
        };

        $_app['employeeService.read'] = function() use ($_app) {
            return $this->_read(
                $_app['request']->query->all(),
                $_app['db']
            );
        };

        $_app['employeeService.readOne'] = function() use ($_app) {
            return $this->_readOne(
                $_app['request']->get('id'),
                $_app['db']
            );
        };

        $_app['employeeService.update'] = function() use ($_app) {
            return $this->_update(
                $_app['request']->get('data'),
                $_app['db']
            );
        };

        $_app['employeeService.delete'] = function() use ($_app) {
            return $this->_delete(
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
     * Creates one employee record in database.
     *
     * @param  Doctrine\DBAL\Connection $_db An Doctrine DBAL Connection instance
     * @param  array $_data The request data
     *
     * @todo Check parameters from REQUEST
     * @todo Error handling
     */
    protected function _create($_data, $_db)
    {
        return array(
            'success' => true,
            'data' => $_data
        );
    }

    /**
     * Reads all employee records from database.
     *
     * @param  Doctrine\DBAL\Connection $_db An Doctrine DBAL Connection instance
     * @param  array $_params The request parameters
     * @return array The results from a database query
     *
     * @todo Check parameters from REQUEST
     * @todo Error handling
     */
    protected function _read($_params, $_db)
    {
        $employees = $_db->createQueryBuilder()
            ->select('e.*', 'd.name as "department"')
            ->from('company_employees', 'e')
            ->leftJoin('e', 'company_departments', 'd', 'e.department_id = d.id')
            ->setFirstResult(0)
            ->setMaxResults(50)
            ->execute();

        return array(
            'success' => true,
            'data' => $employees->fetchAll(\PDO::FETCH_ASSOC)
        );
    }

    /**
     * Reads one employee record from database.
     *
     * @param  Doctrine\DBAL\Connection $_db An Doctrine DBAL Connection instance
     * @param  integer $_id The ID of the employee resource
     * @return array The result from a database query
     *
     * @todo Check parameters from REQUEST
     * @todo Error handling
     */
    protected function _readOne($_id, $_db)
    {
        $employee = $_db->createQueryBuilder()
            ->select('e.*', 'd.name as "department"')
            ->from('company_employees', 'e')
            ->leftJoin('e', 'company_departments', 'd', 'e.department_id = d.id')
            ->andWhere('e.id = :id')
            ->setParameters(array(
                'id' => $_id
            ))
            ->execute();

        return array(
            'success' => true,
            'data' => $employee->fetchAll(\PDO::FETCH_ASSOC)
        );
    }

    /**
     * Updates one employee record in database.
     *
     * @param  Doctrine\DBAL\Connection $_db An Doctrine DBAL Connection instance
     * @param  integer $_data The request data
     *
     * @todo Check parameters from REQUEST
     * @todo Error handling
     */
    protected function _update($_data, $_db)
    {
        return array(
            'success' => true,
            'data' => $_data
        );
    }

    /**
     * Deletes one employee record in database.
     *
     * @param  Doctrine\DBAL\Connection $_db An Doctrine DBAL Connection instance
     * @param  integer $_id The ID of the employee resource
     *
     * @todo Check parameters from REQUEST
     * @todo Error handling
     */
    protected function _delete($_id, $_db)
    {
        return array(
            'success' => true,
            'data' => array(
                'id' => $_id
            )
        );
    }
}
