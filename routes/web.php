<?php

use App\Http\Middleware\LoginCheckMiddleware;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::resource('test','RestTestController');
Route::get('/', function(){
    return view('index');
});
Route::get('/{any}', function(){
    return view('index');
})->where('any', '[^(images)(test)(storage)].*'); //補足：.*は、正規表現で0文字以上の任意の文字列を意味する

Route::get('/images/{file}','ImageController@getImage');
Route::resource('/test','RestTestController2');


