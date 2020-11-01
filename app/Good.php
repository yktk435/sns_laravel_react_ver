<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Good extends Model
{
    function member(){
        return $this->hasMany('App\Comment');
    }
}
