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
                    <a href="#" class="nav-link">
                        Список задач
                    </a>
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
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="<?=Config::get('siteUrl');?>/public/js/vue.min.js"></script>
<script src="<?=Config::get('siteUrl');?>/public/js/vue.custom.js"></script>
</body>
</html>

