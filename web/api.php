<?php
/**
 * Entry point of the application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

// Include bootstrap file
require_once __DIR__ . '/../app/bootstrap.php';

// Initialize application
$app = require_once __DIR__ . '/../app/app.php';

// Start application
$app->run();
