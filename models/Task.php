<?php

class Task extends Model
{
    public function getList()
    {
       $sql = 'select * from messages';
       return $this->db->query($sql);
    }

    public function getTasks($params = null,  $itemsPerPage = null, $direction = 'DESC')
    {
        if($params == null)
        {
            $sql = 'select * from messages';
            return $this->db->query($sql);
        }
        else
        {
            $order = ($params[0] == null ? 'date' : $params[0]);
            $offset = ($params[1] - 1) * $itemsPerPage;
            $sql = 'select * from messages ORDER BY ' . $order . ' ' .$direction. ' LIMIT ' . $offset . ', ' . $itemsPerPage;
        }

        return $this->db->query($sql);
    }

    public function getTasksCount()
    {

        $sql = 'select count(*) from messages';
        $result = $this->db->query($sql);
        return $result[0]['count(*)'];

    }


    public function getById($id)
    {
        $this->db->escape($id);
        $sql = 'select * from messages where `id`='.$id;
        $result = $this->db->query($sql);
        return (isset($result[0]) ? $result[0] : null);
    }


    public function editById($id)
    {
        $this->db->escape($id);
        $sql = 'select * from messages where `id`='.$id;
        $result = $this->db->query($sql);
        return (isset($result[0]) ? $result[0] : null);
    }


    public function save($data, $id = null)
{

    if  (!isset($data['name'])
        || !isset($data['email'])
        || !isset($data['text']))
    {
        return false;
    }

    $name = $this->db->escape($data['name']);
    $email = $this->db->escape($data['email']);
    $text = $this->db->escape($data['text']);
    $status = 0;
    $date = time();





    $id = (int)$id;
    if(!$id)
    {
        $sql = "
    insert into messages
    set 
    name = '{$name}',
    email = '{$email}',
    text = '{$text}',
    status = '{$status}',
    date = '{$date}'
    ";

    }

    else {

        $status = ($data['status'] == 'on' ? 1 : 0);
        $sql = "
    update messages
    set 
    name = '{$name}',
    email = '{$email}',
    text = '{$text}',
    status = '{$status}',
    date = '{$date}'
    where id = {$id}
    ";


    }

    return $this->db->query($sql);


}


}