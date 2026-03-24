<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Set up writable /tmp/storage for Vercel's read-only filesystem
$tmpStorage = '/tmp/storage';
foreach ([
    $tmpStorage . '/framework/views',
    $tmpStorage . '/framework/cache/data',
    $tmpStorage . '/framework/sessions',
    $tmpStorage . '/logs',
] as $dir) {
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
}

if (file_exists($maintenance = $tmpStorage . '/framework/maintenance.php')) {
    require $maintenance;
}

require __DIR__ . '/../vendor/autoload.php';

$app = require_once __DIR__ . '/../bootstrap/app.php';

$app->useStoragePath($tmpStorage);

$app->handleRequest(Request::capture());