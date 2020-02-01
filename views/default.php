<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="<?=Config::get('siteUrl');?>/public/css/bootstrap.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title><?=Config::get('sitename');?></title>
</head>
<body>
<div id="app" class="container">
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">ABC Hosting</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">

                </li>
                <li class="nav-item">

                </li>
            </ul>
            <? if(Session::get('role') && Session::get('role') == 'admin') : ?>
                <a href="#" class="btn btn-outline-success my-2 my-sm-0 mx-sm-1"><i class="fa fa-user"></i> <?=Session::get('role');?></a>
                <a href="#" class="btn btn-outline-success my-2 my-sm-0 mx-sm-1">Balance {{ balance }} $</a>
            <? endif; ?>
            <? if(Session::get('role') && Session::get('role') == 'admin') : ?>
                <a class="btn btn-outline-success my-2 my-sm-0 mx-sm-1"><i class="fa fa-shopping-cart"></i><span class="badge badge-secondary">{{ totalCount }}</span></a>
                <a class="btn btn-outline-success my-2 my-sm-0 mx-sm-1"><i class="fa fa-money"></i><span class="badge badge-secondary">{{ totalSumm }}</span></a>
                <a @click="buyCart" class="btn btn-outline-success my-2 my-sm-0 mx-sm-1">Buy Products</a>
            <? endif; ?>

            <? if(Session::get('role') && Session::get('role') == 'admin') : ?>
                <a href="<?=Config::get('siteUrl');?>/users/logout/" class="btn btn-outline-success my-2 my-sm-0 mx-sm-1">Logout</a>
            <? endif; ?>
            <? if(Session::get('role') != 'admin') : ?>
                <a href="<?=Config::get('siteUrl');?>/users/login/" class="btn btn-outline-success my-2 my-sm-0 mx-sm-1">Login</a>
            <? endif; ?>
        </div>
    </nav>
</div>


    <?=$data['content'] ?>

</div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="<?=Config::get('siteUrl');?>/public/js/bootstrap.min.js"></script>
<script src="<?=Config::get('siteUrl');?>/public/js/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1/dist/vue-resource.min.js"></script>
<script src="<?=Config::get('siteUrl');?>/public/js/vue.custom.js"></script>
</body>
</html>

