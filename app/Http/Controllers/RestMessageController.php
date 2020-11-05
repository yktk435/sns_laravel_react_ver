<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Member;
use App\Message;
class RestMessageController extends Controller
{
    static function getMessages($memberId){

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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data=$request->all();
        $memberId=$data['member_id'];
        return $this->getMessages($memberId);
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
        $message=$data['text'];
        $targetMemberId=$data['targetId'];
        $env = "//localhost:8000/";
        
        $member = Member::find($memberId);        

        $files = $request->file();

        foreach ($files as $file) {
            // $file->store('images/memberId_'.$memberId);
            $hashName = $file->hashName();
            $file->move('images/memberId_' . $memberId, $file->hashName(), $hashName);
            // $url= Storage::disk('local')->path('images/memberId_'.$memberId.'/'.$file->hashName());
            $url = $env . 'images/memberId_' . $memberId . '/' . $hashName;
        }

        $param=[
            'created_at'=>now(),
            'message'=>$message,
            'from_id'=>$memberId,
            'to_id'=>$targetMemberId,
            'image'=>isset($url)?$url:NULL,
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        return $this->getMessages($memberId);
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
