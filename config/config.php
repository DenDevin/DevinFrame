<?php
require_once(ROOT.DS.'lib'.DS.'config.class.php');

Config::set('sitename', 'ABC Hosting');
Config::set('siteUrl', 'http://dendev.zzz.com.ua');
Config::set('languages', array('ru', 'en'));
Config::set('routes', array(
    'default' => '',
    'admin'   => 'admin'

));

Config::set('default_route', 'default');
Config::set('default_language', 'ru');
Config::set('default_controller', 'tasks');
Config::set('default_action', 'index');

Config::set('db.host', 'mysql.zzz.com.ua');
Config::set('db.user', 'dendev');
Config::set('db.password', 'Qazwsx@8099');
Config::set('db.name', 'dendev');