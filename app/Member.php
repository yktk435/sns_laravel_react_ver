<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    function article(){
        return $this->hasOne('App\Article');
    }
    function articles(){
        return $this->hasMany('App\Article');
    }
    function photo(){
        return $this->hasOne('App\Photo');
    }
    function from(){
        return $this->hasMany('App\Friend','from');
    }
    function to(){
        return $this->hasMany('App\Friend','to');
    }
    function scopeGetTileLine($query,$str){
        return $query->where();
    }
    function goods(){
        return $this->hasMany('App\Good');
    }
    function comments(){
        return $this->hasMany('App\Comment');
    }
    function photos(){
        return $this->hasMany('App\Photo');
    }
}
