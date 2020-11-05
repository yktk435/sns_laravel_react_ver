<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\LoginCheckMiddleware;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// ひとまずテストのために
Route::group(['middleware' => ['api']], function () {
    Route::resource('/test', 'RestTestController');
});

Route::group(['middleware' => ['api']], function () {
    Route::resource('/article', 'RestArticleController')->middleware(LoginCheckMiddleware::class);
});


// ログイン用
Route::group(['middleware' => ['api']], function () {
    Route::resource('/login', 'LoginController');
});

Route::group(['middleware' => ['api']], function () {
    Route::resource('/member', 'RestMemberController')->middleware(LoginCheckMiddleware::class);
});

// フォローフォロワー習得
Route::group(['middleware' => ['api']], function () {
    Route::resource('/friend', 'RestFriendController')->middleware(LoginCheckMiddleware::class);
});

Route::group(['middleware' => ['api']], function () {
    Route::resource('/comment', 'RestCommentController')->middleware(LoginCheckMiddleware::class);
});

Route::group(['middleware' => ['api']], function () {
    Route::resource('/good', 'RestGootController')->middleware(LoginCheckMiddleware::class);
});

Route::group(['middleware' => ['api']], function () {
    Route::resource('/message', 'RestMessageController')->middleware(LoginCheckMiddleware::class);
});

