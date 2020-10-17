<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    function member(){
        return $this->belongsTo('App\Member');
    }
}
