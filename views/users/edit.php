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
            <label for="name">Name</label>
            <input value="<?= $data['task']['name']; ?>" name="name" type="text" class="form-control">
        </div>

        <div class="form-group">
            <label for="email">Price</label>
            <input value="<?= $data['task']['email']; ?>" name="email" class="form-control">
        </div>

        <div class="form-group">
            <label for="text">Product Description</label>
            <textarea name="text" class="form-control" rows="3"><?= $data['task']['text']; ?></textarea>
        </div>

    <div class="form-check">
        <input class="form-check-input" type="checkbox" name="status" <?= ($data['task']['status'] == 1 ? 'checked="checked"' : '') ?> id="status">
        <label class="form-check-label" for="status">
         Active
        </label>
    </div>
    <div class="form-group my-2">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Отправить</button>
    </div>
</form>

