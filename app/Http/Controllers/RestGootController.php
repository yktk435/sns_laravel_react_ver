<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Member;
use App\Good;
class RestGootController extends Controller
{

    static function getGoodArticleIds($memberId){
        
        $articleIds=Member::find($memberId)->goods->mapToGroups(function ($item, $key) {
            return [$item['article_id'] => $item['article_id']];
        })->toArray();;

        $articleIds = array_keys($articleIds);
        return $articleIds;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data=$request->all();
        $memberId=$data['member_id'];
        return $this->getGoodArticleIds($memberId);
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
        $data=$request->all();
        $memberId=$data['member_id'];
        $articleId=$data['articleId'];
        $param = [
            'member_id' => $memberId,
            'article_id' => $articleId,
            'created_at' => date("Y-m-d H:i:s"),
        ];
        DB::table('goods')->insert($param);
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
    public function edit(Request $request,$id)
    {
        $data=$request->all();
        $memberId=$data['member_id'];
        $articleId=$id;
        $exist=Good::where('member_id',$memberId)->where('article_id',$articleId);
        if($exist->get()->isEmpty()){
            DB::table('goods')->insert([
                'member_id'=>$memberId,
                'article_id'=>$articleId,
                'created_at' => date("Y-m-d H:i:s"),
            ]);
        }else{
            DB::table('goods')->where('member_id',$memberId)->where('article_id',$articleId)->delete();
        }
        return $this->getGoodArticleIds($memberId);

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
