<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Token;
use App\Member;
use App\Article;
use Illuminate\Support\Str;

class RestMemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $data = $request->toArray();
        $keyword = $data['keyword'];
        // $keyword='keanu';

        // $memberid=$data['member_id'];
        $resArticle = [];
        $resMember = [];
        $articles = DB::table('articles')->where('content', 'like', '%' . $keyword . '%')->get();
        if (count($articles)) {
            $articles = $articles->toarray();
            foreach ($articles as $article) {


                $membertable = Member::find($article->member_id)->first()->toArray();
                $resArticle[] = [
                    'article_id' => $article->id,
                    'content' => $article->content,
                    'created_at' => $article->created_at,
                    'member_id' => $article->member_id,
                    'userName' => $membertable['name'],
                    'userId' => $membertable['user_id'],
                    'iconUrl' => $membertable['icon'],
                ];
            }
        }
        $members = DB::table('members')->where('name', 'like', '%' . $keyword . '%')->get();

        if (count($members)) {
            foreach ($members as $member) {

                $resMember[] = [
                    'member_id' => $member->id,
                    'userName' => $member->name,
                    'userId' => $member->user_id,
                    'iconUrl' => $member->icon,
                ];
            }
        }
        $searchRes = [
            'members' => $resMember,
            'articles' => $resArticle,

        ];

        return $searchRes;
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
        $accessToken = Str::random(60);
        $data = $request->toArray();
        $userName = array_key_exists('userName', $data) ? $data['userName'] : null;
        $userId = array_key_exists('userId', $data) ? $data['userId'] : null;
        $pass = array_key_exists('pass', $data) ? $data['pass'] : null;
        $mail = array_key_exists('mail', $data) ? $data['mail'] : null;

        $accountExist = DB::table('members')->where('user_id', $userId)->first();
        if ($accountExist == null) {
            // アカウント作成
            $param = [
                'created_at' => date("Y-m-d H:i:s"),
                'name' => $userName,
                'user_id' => $userId,
                'password' => $pass,
                'email' => $mail,
                'icon' => 'http://localhost:8000/images/profile.png',
                'header' => 'http://localhost:8000/images/user_header.jpg'
            ];
            DB::table('members')->insert($param);

            DB::table('tokens')->insert([
                "member_id" => Member::where('user_id', $userId)->first()->toArray()['id'],
                'created_at' => date("Y-m-d H:i:s"),
                "access_token" => $accessToken
            ]);

            $array = [
                "userName" => $userName,
                "userId" => $userId,
                "iconUrl" => 'http://localhost:8000/images/profile.png',
                "headerUrl" => 'http://localhost:8000/images/user_header.jpg',
                "accessToken" => $accessToken,
                "mail" => $mail,
            ];
            return $array;
        } else {
            return ['error' => 'すでに作成済みのアカウントがあります'];
        }
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
    public function edit(Request $request, $userId)
    {
        // $userId=$request->all()['userId'];
        // $userId='keanu';
        if ($userId == 'CHANGE_USERNAME') {
        } else {
            $member = Member::where('user_id', $userId)->first();

            if ($member == NULL) return ['error' => 'そんなアカウントはありません'];
            else {
                $member = $member->toArray();
            }

            $articles = Member::find($member['id'])->articles->sortByDesc('id')->toArray();
            foreach ($articles as $article) {
                $sortArticles[] = $article;
            }

            foreach ($sortArticles as &$article) {
                $article['postImageUrl'] = Article::find($article['id'])->photo ? Article::find($article['id'])->photo->toArray()['url'] : null;
            }

            return  [
                'articles' => $sortArticles,
                'member' => $member,
                "goodArticleIds" => RestGootController::getGoodArticlesAndMembers($member['id']),
                "commentArticleIds" => RestCommentController::getCommentArticleIdsAndMembers($member['id']),
                "photoArticleIds"=>RestPhotoController::getPhotoArticleIds($member['id'])
            ];
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
        // return $request;
        $data = $request->toArray();

        $input = $data['input'];

        $memberid = $data['member_id'];



        switch ($id) {
            case 'userid':
                DB::table('members')->where('id', $memberid)->update(['user_id' => $input]);
                break;
            case 'pass':
                DB::table('members')->where('id', $memberid)->update(['password' => $input]);
                break;
            case 'mail':
                DB::table('members')->where('id', $memberid)->update(['email' => $input]);
                break;
            case 'username':
                DB::table('members')->where('id', $memberid)->update(['name' => $input]);
                break;

            default:
                return ['error' => 'urlが「コントローラ/番号」の形式じゃない'];
                break;
        }

        $accessToken = Token::where('member_id', $memberid)->first();
        $memberTable = Member::find($memberid);

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
