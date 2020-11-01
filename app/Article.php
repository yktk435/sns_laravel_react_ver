<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    function photo(){
        return $this->hasOne('App\Photo');
    }
    function comments(){
        return $this->hasMany('App\Comment','to_article_id');
    }
}
