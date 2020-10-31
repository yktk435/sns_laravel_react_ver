<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Article;
use App\Member;
use App\Token;
use App\Friend;
use App\Comment;

class RestTestController2 extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $data = $request->toArray();
        // $memberId = $data['member_id'];
        // $repArticleId = $data['articleId'];
        // $content = $data['content'];
        $memberId = 1;
        $repArticleId = 7;
        $content = '返信内容';

        // commentsテーブルにレコード追加
        $param = [
            // 'id'=>1,
            'created_at' => date("Y-m-d H:i:s"),
            // 'content' => $content,
            'article_id' => $repArticleId,
            'member_id' => $memberId,
        ];
        DB::table('comments')->insert($param);
        /**********************************************/
        // articlesテーブルへレコード追加
        /**********************************************/
        $env = "http://localhost:8000/";
        
        $member = Member::find($memberId);
        $userInfo = $member->toArray();
        $nextId = DB::table('articles')->max('id') + 1;

        $files = $request->file();

        foreach ($files as $file) {
            // $file->store('images/memberId_'.$memberId);
            $hashName = $file->hashName();
            $file->move('images/memberId_' . $memberId, $file->hashName(), $hashName);
            // $url= Storage::disk('local')->path('images/memberId_'.$memberId.'/'.$file->hashName());
            $url = $env . 'images/memberId_' . $memberId . '/' . $hashName;
        }

        $param = [
            // 'id'=>1,
            'created_at' => date("Y-m-d H:i:s"),
            'content' => $content,
            'member_id' => $memberId,
        ];
        DB::table('articles')->insert($param);

        if (isset($url)) {
            $param = [
                // 'id'=>1,
                'created_at' => date("Y-m-d H:i:s"),
                'article_id' => $nextId,
                'url' => $url,
            ];

            DB::table('photos')->insert($param);
        }
        /**********************************************/
        // articlesテーブルへレコード追加 終わり
        /**********************************************/


        $comments = Article::find($repArticleId)->comments->toArray();
        $members = Article::find($repArticleId)->comments->mapToGroups(function ($item, $key) {
            return [$item['member_id'] => $item['member_id']];
        })->toArray();
        $members = array_keys($members);
        $memberInfo = Member::whereIn('id', $members)->get()->toArray();
        return [
            'comments' => array_reverse($comments),
            'members' => $memberInfo,
        ];
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
