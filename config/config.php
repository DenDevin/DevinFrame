<?php
require_once(ROOT.DS.'lib'.DS.'config.class.php');

Config::set('sitename', 'BeeJee Projects');
Config::set('siteUrl', 'http://www.beejee.dendevin.xyz');
Config::set('languages', array('ru', 'en'));
Config::set('routes', array(
    'default' => '',
    'admin'   => 'admin'

));

Config::set('default_route', 'default');
Config::set('default_language', 'ru');
Config::set('default_controller', 'tasks');
Config::set('default_action', 'index');

Config::set('db.host', 'dendev.mysql.tools');
Config::set('db.user', 'dendev_beejee');
Config::set('db.password', 'qazwsx8099');
Config::set('db.name', 'dendev_beejee');