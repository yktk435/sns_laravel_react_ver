<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    function getImage($filename){
        
        
        
        $path="/Users/yokotsukahiroki/work/samurai/lesson/sns/sns_laravel_react/public/images/".$filename;
        $type = "image/jpeg"; 
        header('Content-Type:'.$type); 
        header('Content-Length: ' . filesize($path)); 
        readfile($path); 
        var_dump($path);
    }
}
