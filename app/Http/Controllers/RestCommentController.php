<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Article;
use App\Member;
use App\Comment;
use App\Photo;
use Mockery\Undefined;
use App\Http\Controllers\RestArticleController;

class RestCommentController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $data = $request->toArray();
        $memberId = $data['member_id'];
        $repArticleId = $data['articleId'];
        $content = $data['content'];

        /**********************************************/
        // articlesテーブルへレコード追加
        /**********************************************/
        $env = "//localhost:8000/";

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
            'created_at' => date("Y-m-d H:i:s"),
            'content' => $content,
            'member_id' => $memberId,
        ];
        DB::table('articles')->insert($param);

        if (isset($url)) {
            $param = [
                'created_at' => date("Y-m-d H:i:s"),
                'article_id' => $nextId,
                'url' => $url,
            ];

            DB::table('photos')->insert($param);
        }

        /**********************************************/
        // commentsテーブルへレコード追加
        /**********************************************/

        $param = [
            'created_at' => date("Y-m-d H:i:s"),
            'from_article_id' => $nextId,
            'to_article_id' => $repArticleId,

        ];
        DB::table('comments')->insert($param);
        /**********************************************/
        // commentsテーブルへレコード追加 終わり
        /**********************************************/
        /*
               // コメントしている記事のIDを取得
               $articles = Article::find($repArticleId)->comments->mapToGroups(function ($item, $key) {
                return [$item['from_article_id'] => $item['from_article_id']];
            })->toArray();;
            $fromArticleIds = array_keys($articles);
    
            // その記事IDたちの記事情報を取得
            $fromArticles = Article::whereIn('id', $fromArticleIds);
    
            // その記事を投稿しているユーザ情報を取得
            $members = $fromArticles->get()->mapToGroups(function ($item, $key) {
                return [$item['member_id'] => $item['member_id']];
            })->toArray();
    
            $memberIds = array_keys($members);
            $members = Member::whereIn('id', $memberIds)->get()->toArray();
    
            return [
                'articles' => $fromArticles->get()->toArray(),
                'members' => $members,
            ];
            */
        return $this->getComments($repArticleId);
    }
    /**
     * 引数の記事IDのコメント群とそのユーザを下の形にして返す
     *
     * [
     *      'articles' => ,
     *     'members' => ,
     * ];
     */
    static function getComments($articleId)
    {
        // コメントしている記事のIDを取得
        $articles = Article::find($articleId)->comments->mapToGroups(function ($item, $key) {
            return [$item['from_article_id'] => $item['from_article_id']];
        })->toArray();;
        $fromArticleIds = array_keys($articles);

        // その記事IDたちの記事情報を取得
        $fromArticles = Article::whereIn('id', $fromArticleIds);


        // その記事を投稿しているユーザ情報を取得
        $members = $fromArticles->get()->mapToGroups(function ($item, $key) {
            return [$item['member_id'] => $item['member_id']];
        })->toArray();

        $memberIds = array_keys($members);
        $members = Member::whereIn('id', $memberIds)->get()->toArray();
        $articles = array_reverse($fromArticles->get()->toArray());
        foreach ($articles as $key => &$article) {
            $article['postImageUrl'] = Article::find($article['id'])->photo ? Article::find($article['id'])->photo->toArray()['url'] : null;
        }

        return [
            'articles' => $articles,
            'members' => array_reverse($members),
        ];
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
    static function getCommentArticleIds($memberId)
    {
        $articleIds = Member::find($memberId)->articles->map(function ($item) {
            return $item['id'];
        });
        $commentArticleIds = Comment::whereIn('from_article_id', $articleIds)->get();
        if ($commentArticleIds->isEmpty()) {
            return [];
        }

        $commentArticleIds = $commentArticleIds->map(function ($item) {
            return $item['from_article_id'];
        })->toArray();
        return $commentArticleIds;
    }
    static function getCommentArticleIdsAndMembers($memberId)
    {
        $articleIds = Member::find($memberId)->articles->map(function ($item) {
            return $item['id'];
        });
        // fromとすることで自分がコメントした記事を抽出
        $commentArticleIds = Comment::whereIn('from_article_id', $articleIds)->get();
        
        if ($commentArticleIds->isEmpty()) {
            return [];
        }
        $memberIds=$commentArticleIds->map(function($item){
            return [
                "articleId"=>$item['from_article_id'],
                "userId"=>Article::find($item['to_article_id'])->belongsTomember->toArray()['user_id']
            ];
        })->toArray();
        return ($memberIds);
        
        
        
        
    }
}
