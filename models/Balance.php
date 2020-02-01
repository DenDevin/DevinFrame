<?php

class Balance extends Model
{
    public function getBalance()
    {
        $sql = 'select * from balance';
        return $this->db->query($sql);
    }



    public function save($data, $id = null)
    {

        if  (!isset($data))

        {
            return false;
        }

        $balance = $this->db->escape($data);

        $date = time();





        $id = (int)$id;
        if(!$id)
        {
            $sql = "
    insert into balance
    set 
    name = '{$balance}',
    date = '{$date}'
    ";

        }



        return $this->db->query($sql);


    }


}