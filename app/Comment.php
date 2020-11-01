<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    function articles(){
        return $this->hasMany('App\Comment','to_article_id');
    }
}
