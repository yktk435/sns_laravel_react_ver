<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Friend;
use App\Member;
use Illuminate\Support\Facades\DB;
class RestFriendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {      
        
        if($request->all()['userId']!='undefined' && $request->all()['userId']){
            $targetUserId= $request->all()['userId'];
            $memberId=Member::where('user_id',$targetUserId)->first()->toArray()['id'];
        }else{
            $memberId = $request->all()['member_id'];
        }
        $followerData = Friend::where('to', $memberId)->get();

        $followData = Friend::where('from', $memberId)->get();
        if ($followerData->isNotEmpty()) {
            $followerData = $followerData->toArray();
            foreach ($followerData as $data) {
                $membertable = Member::find($data['from'])->toArray();
                $follower[] = [
                    'userName' => $membertable['name'],
                    'userId' => $membertable['user_id'],
                    'iconUrl' => $membertable['icon'],
                    'memberId' => $membertable['id'],
                ];
            }
        }
        if ($followData->isNotEmpty()) {
            $followData = $followData->toArray();
            foreach ($followData as $data) {
                $membertable = Member::find($data['to'])->toArray();
                $follow[] = [
                    'userName' => $membertable['name'],
                    'userId' => $membertable['user_id'],
                    'iconUrl' => $membertable['icon'],
                    'memberId' => $membertable['id'],
                ];
            }
        }
        if (isset($follower)) {
            foreach ($follower as &$followerUser) {
                foreach ($follow as $followUser) {
                    if ($followerUser['userName'] == $followUser['userName']) {
                        $followerUser['follow'] = true;
                    }
                }
            }
        }
        // if (isset($follow)) {
        //     foreach ($follow as &$followUser) {
        //         foreach ($follower as $followerUser) {
        //             if($followUser['userName']==$followerUser['userName']){
        //                 $followUser['follow']=true;
        //             }
        //         }
        //     }
        // }
        $friends = [
            'follow' => isset($follow) ? $follow : [],
            'follower' => isset($follower) ? $follower : [],
        ];
        return $friends;
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
        //
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
        
        $data=$request->all();
        $memberId=$data['member_id'];
        
        $targetMemberId=$data['targetMemberId'];
        if ($id == 'following') {
            // フォロー中のをクリックしたと送ってきたら→フォロー解除の処理
            
            $res=DB::table('friends')->where('from',$memberId)->where('to',$targetMemberId)->delete();
            if($res) return ['フォロー解除しました。'];
        } else {
            // フォローの処理
            // return ['a'];
            $param = [
                'from' => $memberId,
                'to' =>$targetMemberId ,
                'created_at' => date("Y-m-d H:i:s"),
            ];
            $res=DB::table('friends')->insert($param);
            if($res)return ['フォローしました。'];
        }
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
