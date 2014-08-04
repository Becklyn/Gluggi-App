<?php

require_once '../vendor/autoload.php';

//region Load Config
$configFile = dirname(__DIR__) . "/app/config.yml";

if (!is_file($configFile))
{
    echo "Gluggi: Config does not exist. Please run <code>composer install</code>.";
    exit;
}

$yaml   = new \Symfony\Component\Yaml\Parser();
$config = $yaml->parse(file_get_contents($configFile));

if (!isset($config["parameters"]))
{
    echo "Gluggi: Config file seems invalid. Please remove <code>app/config.yml</code> and run <code>composer install</code>.";
    exit;
}
//endregion


//region Run Application
$app = new \BecklynLayout\Application\LayoutApplication();
$app->bootstrap(__DIR__, $config["parameters"]);
$app["debug"] = true;
$app->run();
//endregion
