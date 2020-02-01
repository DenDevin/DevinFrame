<? if (Session::hasFlash()) : ?>
    <div class="row">
        <div class="col-md-12 my-1">
            <div class="alert alert-info" role="alert">
                <? Session::flash(); ?>
            </div>
        </div>
    </div>
<? endif; ?>

<? foreach($data['tasks'] as $tasks) : ?>
    <div class="card my-2" style="width: 100%;">
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <h4 class="card-title"><a class="nav-link" href="<?=Config::get('siteUrl');?>/tasks/view/<?=$tasks['id'] ?>"><?= $tasks['name'] ?></a></h4>
                </div>
                <div class="col-md-4">
                    <h5 class="card-title"><?=$tasks['email']; ?></h5>
                </div>
                <div class="col-md-4 text-success">
                    <?= ($tasks['status'] == 1 ? 'Done!' : ''); ?>
                </div>
                <div class="col-md-12">
                    <p class="card-text"><?=$tasks['text']; ?></p>
                </div>
                <div class="col-md-12">
                    <a href="/users/edit/<?=$tasks['id'] ?>" class="btn btn-sm btn-warning float-right">Edit</a>
                </div>
            </div>
        </div>
    </div>
<? endforeach; ?>

<nav aria-label="Страницы">
    <ul class="pagination">
        <?php if ($data['pages']->getPrevUrl()): ?>
            <li class="page-item"><a class="page-link" href="<?php echo $data['pages']->getPrevUrl(); ?>">&laquo; Prev</a></li>
        <?php endif; ?>
        <?php foreach ($data['pages']->getPages() as $page): ?>
            <?php if ($page['url']): ?>
                <li class="page-item <?php echo $page['isCurrent'] ? 'active' : ''; ?>">
                    <a class="page-link" href="<?php echo $page['url']; ?>"><?php echo $page['num']; ?></a>
                </li>
            <?php else: ?>
                <li class="disabled"><span><?php echo $page['num']; ?></span></li>
            <?php endif; ?>
        <?php endforeach; ?>

        <?php if ($data['pages']->getNextUrl()): ?>
            <li class="page-item"><a class="page-link" href="<?php echo $data['pages']->getNextUrl(); ?>">Next &raquo;</a></li>
        <?php endif; ?>
    </ul>
</nav>


<form enctype="multipart/form-data" method="post" action="#">

    <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name" name="name" type="text" class="form-control" id="name" placeholder="" required>
    </div>

    <div class="form-group">
        <label for="email">E-mail</label>
        <input v-model="email" name="email" type="email" class="form-control" id="email" placeholder="" required>
    </div>

    <div class="form-group">
        <label for="text">Product</label>
        <textarea v-model="text" name="text" class="form-control" id="text" rows="3" required></textarea>
    </div>

    <button class="btn btn-success my-2 my-sm-2" type="submit">Save</button>

</form>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="card my-2" style="width: 100%;">
                <div class="card-body">
                    <h4 class="card-title">{{name}}</h4>
                    <h5 class="card-title">{{email}}</h5>
                    <p class="card-text">{{text}}</p>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4"></div>
                    <div class="col-md-4"></div>
                </div>


            </div>

            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>




