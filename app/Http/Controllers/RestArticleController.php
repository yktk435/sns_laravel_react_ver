<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Article;
use App\Member;
use App\Photo;
use Mockery\Undefined;
use App\Http\Controllers\RestGootController;
class RestArticleController extends Controller
{
    static function getArticles($memberId){
        $articles=Member::find($memberId)->articles->toArray();
        foreach($articles as &$article){
            $article['postImageUrl'] = Article::find($article['id'])->photo ? Article::find($article['id'])->photo->toArray()['url'] : null;
        }
        
        return array_reverse($articles);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $request->all();
        $memberId = $data['member_id'];
        $userId = $data['userId'];

        if ($userId === 'undefined') {
            $member = Member::find($memberId);
        } else {
            $member = Member::where('user_id', $userId)->first();
        }

        $userInfo = $member->toArray();

        $articles = $member->articles->toArray();


        foreach ($articles as &$article) {
            $article['user_id'] = $userInfo['user_id'];
            $article['icon'] = $userInfo['icon'];
            $article['header'] = $userInfo['header'];
            $article['name'] = $userInfo['name'];
            $article['url'] = Article::find($article['id'])->photo ? Article::find($article['id'])->photo->toArray()['url'] : null;
        }
        return $articles;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = $request->toArray();
        $memberId = $data['member_id'];
        $repArticleId = $data['articleId'];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $env = "//localhost:8000/";
        $memberId = $request['member_id'];
        $member = Member::find($memberId);
        $userInfo = $member->toArray();
        $data = $request->all();
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
            'content' => $data['text'],
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

        // return [
        //     'id' => $nextId,
        //     'created_at' => date("Y-m-d H:i:s"),
        //     'content' => $data['text'],
        //     'member_id' => $memberId,
        //     'postImageUrl' => isset($url) ? $url : null
        // ];
        
        return  [
            'articles' => $this->getArticles($memberId),
            'member' => Member::find($memberId)->toArray(),
            "goodArticleIds" => RestGootController::getGoodArticlesAndMembers($memberId),
            "commentArticleIds" => RestCommentController::getCommentArticleIdsAndMembers($memberId),
            "photoArticleIds"=>RestPhotoController::getPhotoArticleIds($memberId)
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $articleId = $id;

        // 記事情報取得
        $article = Article::find($articleId)->toArray();
        // その投稿したユーザ情報取得
        $targetMemberId = $article['member_id'];
        $targetMemberInfo = Member::find($targetMemberId)->toArray();
        // 投稿下写真を取得
        $article['postImageUrl'] = Article::find($articleId)->photo ? Article::find($articleId)->photo->toArray()['url'] : null;
        // そのコメント群を取得
        $comments = Article::find($articleId)->comments->toArray();

        $commentedMembers = Article::find($articleId)->comments->mapToGroups(function ($item, $key) {
            return [$item['member_id'] => $item['member_id']];
        })->toArray();
        $commentedMembers = array_keys($commentedMembers);
        $commentedMemberInfo = Member::whereIn('id', $commentedMembers)->get()->toArray();

        $comment=RestCommentController::getComments($articleId);
        return [
            'article'=>[
                'article'=>$article,
                'member'=>$targetMemberInfo,
            ],
            'comment'=>$comment
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $data=$request->all();
        $memberId = $data['member_id'];
        if ($id == 'show') {
            // $memberTable=Member::find($memberId)->from->keyBy('to')->toArray();
            $memberTable = Member::find($memberId)->from;
            $followIds = $memberTable->map(function ($item, $key) {
                return $item->toArray()['to'];
            })->toArray();
            $followIds[] = $memberId;
            $articles = Article::whereIn('member_id', $followIds)->orderBy('id', 'desc')->get()->toArray();
            foreach ($articles as &$article) {
                $article['postImageUrl'] = Article::find($article['id'])->photo ? Article::find($article['id'])->photo->toArray()['url'] : null;
            }
            foreach ($followIds as $memberId) {
                $memberTable = Member::find($memberId);
                $memberInfo = $memberTable->toArray();
                $res['memberIds'][$memberInfo['id']] = $memberInfo;
            }
            $res['articles'] = $articles;
            return $res;
        }else if($id=='good'){
            $articleId=$data['articleId'];

        }
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
