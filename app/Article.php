<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    function photo(){
        return $this->hasOne('App\Photo');
    }
}
