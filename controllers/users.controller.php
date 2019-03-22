<?

class UsersController extends Controller

{

    public function __construct($data = array())
    {
        parent::__construct($data);
        $this->model = new User();
        $this->model_task = new Task();
    }



    public function login(){
       if($_POST &&
       isset($_POST['login']) &&
       isset($_POST['password']))
        {
            $user = $this->model->getbyLogin($_POST['login']);
            $hash = md5($_POST['password']);

        if($user && $user['password'] == $hash)
        {
            Session::set('login', $user['login']);
            Session::set('role', $user['role']);
            Router::redirect('/users/index/date/1');
        }

        else
        {
            Session::setFlash('Логин или пароль неверный');
        }


        }
    }

    public function index()
    {
      if(Session::get('role') != 'admin')
       {
         Router::redirect('/users/login/');
       }


        $params = $this->data['params'] = App::getRouter()->getParams();
        if(isset($params[0]) && !empty($params[0]))
        {

            $itemsPerPage = 3;
            $this->data['tasks'] = $this->model_task->getTasks($params, $itemsPerPage);
            $this->data['count'] = $this->model_task->getTasksCount($params[1]);
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
            $this->data['tasks'] = $this->model_task->getTasks($params, $itemsPerPage);
            $this->data['count'] = $this->model_task->getTasksCount($params[1]);
            $totalItems = $this->data['count'];
            $this->data['current_page'] = $currentPage = $params[1];
            $urlPattern = '/tasks/index/'.$params[0].'/(:num)';
            $this->data['pages'] = new Paginator($totalItems, $itemsPerPage, $currentPage, $urlPattern);
        }

    }


    public function edit()
    {
        if(Session::get('role') != 'admin')
        {
            Router::redirect('/users/login/');
        }

        $params = $this->data['params'] = App::getRouter()->getParams();
        $id = $params[0];
        if(isset($_POST) && !empty($id) && $this->model_task->save($_POST, $id))
        {

            Session::setFlash(
                'Задача обновлена!'
            );


        }




        $params = App::getRouter()->getParams();
        if(isset($params[0]))
        {
         $id = (int)$params[0];
        }

        $this->data['task'] = $this->model_task->editById($id);


    }

    public function logout()
    {
      Session::destroy();
        Router::redirect('/tasks/index/');
    }

}