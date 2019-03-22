<?php

class TasksController extends Controller {


    public function __construct($data = array())
    {
        parent::__construct($data);
        $this->model = new Task();
    }




    public function index()
    {

        if(isset($_POST) && $this->model->save($_POST))
        {

              Session::setFlash(
                  '���� ������� ���������!'
              );


        }


        $params = $this->data['params'] = App::getRouter()->getParams();
        if(isset($params[0]) && !empty($params[0]))
         {

             $itemsPerPage = 3;
             $this->data['tasks'] = $this->model->getTasks($params, $itemsPerPage, 'ASC');
             $this->data['count'] = $this->model->getTasksCount($params[1]);
             $totalItems = $this->data['count'];
             $this->data['current_page'] = $currentPage = $params[1];
             $urlPattern = '/tasks/index/'.$params[0].'/(:num)';
             $this->data['pages'] = new Paginator($totalItems, $itemsPerPage, $currentPage, $urlPattern);

         }

         else
             {


                 $this->data['params'][0] = $params[0] = 'date'; /* Default sorting */
                 $params[1] = 1; /* Default page */
                 $itemsPerPage = 3;
                 $this->data['tasks'] = $this->model->getTasks($params, $itemsPerPage, 'DESC');
                 $this->data['count'] = $this->model->getTasksCount($params[1]);
                 $totalItems = $this->data['count'];
                 $this->data['current_page'] = $currentPage = $params[1];
                 $urlPattern = '/tasks/index/'.$params[0].'/(:num)';
                 $this->data['pages'] = new Paginator($totalItems, $itemsPerPage, $currentPage, $urlPattern);
         }



    }

    public function view()
    {
      $params = App::getRouter()->getParams();
      if(isset($params[0])){
          $id = (int)$params[0];
      }
        $this->data['task'] = $this->model->getById($id);


    }


}