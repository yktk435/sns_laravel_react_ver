<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Article;
use App\Member;
use App\Photo;
use App\Token;
use App\Friend;
use App\Comment;
use App\Http\Controllers\RestCommentController;
use App\Http\Controllers\RestGootController;

use App\Good;
class RestTestController2 extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $memberId=1;
        // dd(RestGootController::getGoodArticlesAndMembers($memberId));
        // dd(Article::find(10)->belongsTomember->toArray());
        $article=Article::find(1)->toArray();
        $article['postImageUrl']='sss';
        dd($article);
        
    }
    static function sa($memberId){
        
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
        $request->file('av')->move('kamonohasi', 'agonaoki');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $memberId=$request->all()['member_id'];
        $memberId = 1;
        // $memberTable=Member::find($memberId)->from->keyBy('to')->toArray();
        $memberTable = Member::find($memberId)->from;
        $followIds = $memberTable->map(function ($item, $key) {
            return $item->toArray()['to'];
        })->toArray();
        $followIds[] = $memberId;
        dd($followIds);
        $articles = Article::whereIn('member_id', $followIds->toArray())->get()->toArray();
        foreach ($articles as &$article) {
            $article['postImageUrl'] = Article::find($article['id'])->photo ? Article::find($article['id'])->photo->toArray()['url'] : null;
        }
        foreach ($followIds as $memberId) {
            $memberTable = Member::find($memberId);
            $memberInfo = $memberTable->toArray();
            $res['memberIds'][$memberInfo['id']] = $memberInfo;
        }
        $res['articles'] = $articles;
        dd($res);

        // return $res;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        print 'a';
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
}
