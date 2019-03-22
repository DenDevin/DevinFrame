<? if (Session::hasFlash()) : ?>
    <div class="row">
        <div class="col-md-12 my-1">
            <div class="alert alert-info" role="alert">
                <? Session::flash(); ?>
            </div>
        </div>
    </div>
<? endif; ?>






<form enctype="multipart/form-data" method="post" action="#">
    <div class="form-group">
        <label for="name">Логин</label>
        <input v-model="name" name="login" type="text" class="form-control" id="name" placeholder="" required>
    </div>

    <div class="form-group">
        <label for="email">Пароль</label>
        <input v-model="email" name="password" type="password" class="form-control" id="email" placeholder="" required>
    </div>
    <button class="btn btn-success my-2 my-sm-0" type="submit">Войти</button>
</form>



