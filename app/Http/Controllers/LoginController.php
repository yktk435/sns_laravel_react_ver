<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;
use App\Token;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Http\Controllers\RestCommentController;
use App\Http\Controllers\RestPhotoController;
class LoginController extends Controller
{
    static function env(){
        // return  "//localhost:8000/images";
        return "//www.yktk435.live-on.net/images";
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $headerToken = $request->header('access_token');
        $accessToken = Str::random(60);

        // var_dump($headerToken);
        $tokenTable = Token::where('access_token', $headerToken)->first();
        // $tokenTable = Token::where('access_token', 'wJgWiUsdWwJkde1E1VKFRUOMXeIQx3JQBj9EFcgJR84yWWo9FPTBjN6QhZJV')->first();

        if ($headerToken == null || $tokenTable == null) return ['error' => 'アクセストークンをヘッダにつけていないか、アクセストークンが間違ってる'];

        $memberTable = $tokenTable->member->toArray();
        // ここから同じコード
        return $this->sameCode($memberTable,$accessToken);
        // ここから同じコード ここまで
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $env = $this->env();
        $data = $request->all();
        $userId = $data['userId'];
        $pass = $data['pass'];
        $accessToken = Str::random(60);

        $memberTable = Member::where('user_id', $userId)->first();
        $pass = Member::where('password', $pass)->first();

        if ($memberTable == null || $pass == null) return ['error' => 'ユーザ名、もしくはパスワードが間違っている'];
        $memberTable = $memberTable->toArray();
        // ここから同じコード
        return $this->sameCode($memberTable,$accessToken);
        // ここから同じコード ここまで

    }
    function sameCode($memberTable,$accessToken){
        $tokenTable = Token::where('member_id', $memberTable['id']);
        if ($tokenTable != null) {
            DB::table('tokens')->where('member_id', $memberTable['id'])->update(["access_token" => $accessToken]);
        } else {
            DB::table('tokens')->insert([
                "member_id" => $memberTable['id'],
                'created_at' => date("Y-m-d H:i:s"),
                "access_token" => $accessToken
            ]);
        }
        $array = [
            "userName" => $memberTable['name'],
            "userId" => $memberTable['user_id'],
            "iconUrl" => $memberTable['icon'],
            "headerUrl" => $memberTable['header'],
            "accessToken" => $accessToken,
            "mail" => $memberTable['email'],

            "member"=>Member::find($memberTable['id'])->toArray(),
            "goodArticleIds"=>RestGootController::getGoodArticlesAndMembers($memberTable['id']),
            "commentArticleIds"=>RestCommentController::getCommentArticleIdsAndMembers($memberTable['id']),
            "photoArticleIds"=>RestPhotoController::getPhotoArticleIds($memberTable['id'])
        ];
        return $array;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    private function createTokenAndReturnUserInfo($memberTable, $accessToken)
    {
        $tokenTable = Token::where('member_id', $memberTable['id']);
        if ($tokenTable != null) {

            DB::table('tokens')->where('member_id', $memberTable['id'])->update(["access_token" => $accessToken]);
        } else {
            DB::table('tokens')->insert([
                "member_id" => $memberTable['id'],
                'created_at' => date("Y-m-d H:i:s"),
                "access_token" => $accessToken
            ]);
        }

        $array = [
            "userName" => $memberTable['name'],
            "userId" => $memberTable['user_id'],
            "iconUrl" => $memberTable['icon'],
            "headerUrl" => $memberTable['header'],
            "accessToken" => $accessToken,
            "mail" => $memberTable['email'],
        ];
        return $array;
    }
}
