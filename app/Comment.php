<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    function comments(){
        return $this->hasMany('App\Comment');
    }
}
