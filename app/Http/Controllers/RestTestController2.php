<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Article;
use App\Member;
use App\Token;

class RestTestController2 extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $data=$request->toArray();
        // $keyword=$data['keyword'];
        $keyword='カンガルー';
        
        // $memberid=$data['member_id'];
        $resArticle=[];
        $resMember=[];
        $articles=DB::table('articles')->where('content','like','%'.$keyword.'%')->get();
        if(count($articles)){
            $articles=$articles->toarray();
            foreach ($articles as $article ) {
                var_dump($article->member_id);
                
                $membertable=Member::find($article->member_id)->first()->toArray();
                $resArticle[]=[
                    'article_id'=>$article->id,
                    'content'=>$article->content,
                    'created_at'=>$article->created_at,
                    'member_id'=>$article->member_id,
                    'userName'=>$membertable['name'],
                    'userId'=>$membertable['user_id'],
                    'iconUrl'=>$membertable['icon'],
                ];
                
            }
            
        }
        $members=DB::table('members')->where('name','like','%'.$keyword.'%')->get();
        var_dump($members);
        if(count($members)){
            foreach ($members as $member ) {
                
                $resMember[]=[
                    'member_id'=>$member->id,
                    'userName'=>$member->name,
                    'userId'=>$member->user_id,
                    'iconUrl'=>$member->icon,
                ];
            }
        }
        $searchRes=[
            'members'=>$resMember,
            'articles'=>$resArticle,
        ];
        dd($searchRes);
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
        $request->file('av')->move('kamonohasi','agonaoki');
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
}
