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
    function member(){
        return $this->hasOne('App\Member','id');
    }
    function belongsTomember(){
        return $this->belongsTo('App\Member','member_id');
    }
}
