
<? if (Session::hasFlash()) : ?>
<div class="row">
    <div class="col-md-12 my-1">
        <div class="alert alert-info" role="alert">
            <? Session::flash(); ?>
        </div>
    </div>
</div>
<? endif; ?>


<div class="container">
    <div class="row my-3">
        <? foreach($data['tasks'] as $tasks) : ?>
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><?=$tasks['name']; ?></h5>
                    <p class="card-text">Price: <?=$tasks['email']; ?> $</p>
            <? if(Session::get('role') && Session::get('role') == 'admin') : ?>
                    <a @click.prevent="buyProduct" href="#" class="btn btn-sm btn-success float-right">Add to Cart</a>
                    <a @click.prevent="plusItem(<?=$tasks['id'] ?>)" href="#" class="btn btn-sm btn-success">+</a>
                    <a @click.prevent="minusItem(<?=$tasks['id'] ?>)" href="#" class="btn btn-sm btn-success">-</a>
                    <span class="badge badge-danger"> {{ countItem(<?=$tasks['id'] ?>) }} items</span>
                    <span class="badge badge-warning">Price {{ countPrice(<?=$tasks['id'] ?>) }} $</span>
                    <a href="/users/edit/<?=$tasks['id'] ?>" class="btn btn-sm btn-warning">Edit</a>
            <? endif; ?>
                </div>
            </div>
        </div>
        <? endforeach; ?>
    </div>
    </div>






<nav aria-label="Pages">
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







