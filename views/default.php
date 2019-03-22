<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<?=Config::get('siteUrl');?>/public/css/bootstrap.min.css">

    <title><?=Config::get('sitename');?></title>
</head>
<body>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">BeeJee</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <? if(Session::get('role') && Session::get('role') == 'admin') : ?>
                    <a href="<?=Config::get('siteUrl');?>/users/index/" class="nav-link">
                    Список задач
                    </a>
                    <? endif; ?>
                </li>
                <li class="nav-item">

                </li>
            </ul>
            <? if(Session::get('role') && Session::get('role') == 'admin') : ?>
                <a href="<?=Config::get('siteUrl');?>/users/logout/" class="btn btn-outline-success my-2 my-sm-0 mx-sm-1">Выйти</a>
            <? endif; ?>
            <? if(Session::get('role') != 'admin') : ?>
                <a href="<?=Config::get('siteUrl');?>/users/login/" class="btn btn-outline-success my-2 my-sm-0 mx-sm-1">Вход</a>
            <? endif; ?>
        </div>
    </nav>
</div>
<div id="container" class="container">

    <?=$data['content'] ?>

</div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="<?=Config::get('siteUrl');?>/public/js/bootstrap.min.js"></script>
<script src="<?=Config::get('siteUrl');?>/public/js/vue.min.js"></script>
<script src="<?=Config::get('siteUrl');?>/public/js/vue.custom.js"></script>
</body>
</html>

