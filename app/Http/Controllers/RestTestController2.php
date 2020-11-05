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
use App\Http\Controllers\RestMessageController;
use App\Message;

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

        $r=Message::where('from_id',$memberId)->orWhere('to_id',$memberId);
        // ユーザごとにグルーピング
        $r=$r->get()->groupBy('to_id')->toArray();
        
        foreach ($r[$memberId] as $key => $rr) {
            $r[$rr['from_id']][]=$rr;
        }
        unset($r[$memberId]);
        $r=array_values($r);
        
        foreach ($r as $key => $rr) {
            foreach ($rr as $key2 => $rrr) {
                $id[$key][]=$rrr['id'];
            }
        }
        foreach ($r as $key => &$rr) {
            array_multisort($id[$key],SORT_DESC,$rr); 
            $rr=array_reverse($rr);
            $sort[$rr[count($rr)-1]['id']]=$rr;
        }
        
        
        krsort($sort);
        
        $sort=array_values($sort);
        dd($sort);

        $r=Message::where('from_id',$memberId)->orWhere('to_id',$memberId);
        $from=$r->get()->map(function($item){return $item['from_id'];});
        $to=$r->get()->map(function($item){return $item['to_id'];});
        $memberIds=array_merge($from->toArray(),$to->toArray());
        $memberIds=array_unique($memberIds);
        
        unset($memberIds[array_search($memberId,$memberIds)]);
        $memberIds=array_values($memberIds);
        $members=Member::whereIn('id',$memberIds)->get()->toArray();
        // dd($members);

        return [
            'messages'=>$sort,
            'members'=>$members
        ];
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
